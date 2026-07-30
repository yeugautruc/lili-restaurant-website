import { CONFIG } from "./config.js";
import { CATEGORIES, ALLERGEN_LEGEND, ITEM_IMAGE_FALLBACK } from "./data.js";
import { subscribe, addLine, changeQty, removeLine, getLines, totalCount, totalPrice, clearCart } from "./cart.js";
import { sendOrder, sendReservation } from "./notify.js";
import { getLang, t, applyTranslations, initLangSwitcher } from "./i18n.js";

const IMG_BASE = "images/";

function fmtPrice(n) {
  return n.toFixed(2).replace(".", ",") + " €";
}

function esc(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

function allergenText(codes = []) {
  return codes.join(", ");
}

// ---------------- Category nav + menu grid ----------------

function itemBasePrice(item) {
  if (item.variations && item.variations.length) return item.variations[0].price;
  return item.price;
}

function localized(item, field) {
  const lang = getLang();
  return (lang === "en" ? item[`${field}_en`] : item[`${field}_de`]) ?? item[`${field}_de`] ?? item[`${field}_en`];
}

function renderItemCard(item) {
  const price = itemBasePrice(item);
  const priceNote = getLang() === "en" ? item.priceNote_en : item.priceNote_de;
  const priceLabel = price == null ? (priceNote || t("price_on_request")) : `${t("price_from")} ${fmtPrice(price)}`;
  const image = item.image || ITEM_IMAGE_FALLBACK[item.code];
  const isFallback = !item.image && !!ITEM_IMAGE_FALLBACK[item.code];
  const name = localized(item, "name");
  const desc = localized(item, "desc");
  const imgHtml = image
    ? `<div class="item-card__img"><img src="${IMG_BASE}${image}" alt="${esc(name)}" loading="lazy">${isFallback ? `<span class="item-card__img-badge">${esc(t("sample_image"))}</span>` : ""}</div>`
    : "";
  const descHtml = desc ? `<div class="item-card__desc">${esc(desc)}</div>` : "";
  const allergenHtml = item.allergens?.length ? `<div class="item-card__allergens">${esc(t("allergens_prefix"))} ${esc(allergenText(item.allergens))}</div>` : "";
  const disabled = price == null && !(item.variations?.length);
  return `
    <article class="item-card" data-code="${esc(item.code)}">
      ${imgHtml}
      <div class="item-card__body">
        <div class="item-card__code">${esc(item.code)}</div>
        <div class="item-card__name">${esc(name)}</div>
        ${descHtml}
        ${allergenHtml}
        <div class="item-card__footer">
          <span class="item-card__price">${priceLabel}</span>
          <button class="add-btn" ${disabled ? "disabled" : ""} data-add="${esc(item.code)}">${esc(t("add_to_cart"))}</button>
        </div>
      </div>
    </article>`;
}

function renderCategorySection(cat) {
  const title = localized(cat, "title");
  const note = localized(cat, "note");
  const noteHtml = note ? `<div class="menu-section__note">${esc(note)}</div>` : "";
  const cards = cat.items.map(renderItemCard).join("");
  return `
    <section class="menu-section" id="cat-${cat.id}">
      <div class="container">
        <h2 class="menu-section__title">${esc(title)}</h2>
        ${noteHtml}
        <div class="menu-grid">${cards}</div>
      </div>
    </section>`;
}

function renderActiveCategory(catId) {
  const main = document.getElementById("menuMain");
  const cat = CATEGORIES.find((c) => c.id === catId) || CATEGORIES[0];
  main.innerHTML = renderCategorySection(cat) + renderAllergenLegend();
}

function renderAllergenLegend() {
  const additives = Object.entries(ALLERGEN_LEGEND.additives)
    .map(([k, v]) => `<div>${esc(k)} – ${esc(v)}</div>`).join("");
  const allergens = Object.entries(ALLERGEN_LEGEND.allergens)
    .map(([k, v]) => `<div>${esc(k)} – ${esc(v)}</div>`).join("");
  return `
    <details class="allergen-legend container">
      <summary>${esc(t("allergen_legend_title"))}</summary>
      <div class="legend-grid">${allergens}${additives}</div>
    </details>`;
}

// Groups the 26 categories into a few labeled rows so the nav stays scannable.
const NAV_GROUPS = [
  { label_de: "Mittagskarte", label_en: "Lunch menu", ids: ["mittag"] },
  { label_de: "Küche", label_en: "Kitchen", ids: ["vorspeisen", "hauptspeisen", "chefkoch", "nachtisch", "kids"] },
  { label_de: "Sushi", label_en: "Sushi", ids: ["maki", "nigiri", "inside-out", "reis-bowl", "tempura-roll", "tempura-mini-roll", "lili-spezialitaeten", "sashimi", "lili-menue"] },
  { label_de: "Getränke", label_en: "Drinks", ids: ["softdrinks", "limonade", "special-drinks", "cocktails", "biere", "schnaps", "weissweine", "rotweine", "kaffee", "tea", "saefte"] },
];

function setGroupOpen(groupEl, open) {
  const wrap = groupEl.querySelector(".category-nav__group-tabs-wrap");
  groupEl.classList.toggle("open", open);
  wrap.style.maxHeight = open ? `${wrap.scrollHeight}px` : "0px";
}

function initMenu() {
  const nav = document.getElementById("categoryNav");
  const main = document.getElementById("menuMain");
  const byId = new Map(CATEGORIES.map((c) => [c.id, c]));

  const hashItemCode = location.hash.startsWith("#item-") ? location.hash.slice(6) : null;
  const allItems = CATEGORIES.flatMap((c) => c.items);
  const hashItem = hashItemCode ? allItems.find((it) => it.code === hashItemCode) : null;
  const hashCatId = hashItem ? CATEGORIES.find((c) => c.items.includes(hashItem))?.id : null;
  const initialCatId = hashCatId && byId.has(hashCatId) ? hashCatId : CATEGORIES[0].id;

  const tabHtml = (c) =>
    `<button class="category-tab${c.id === initialCatId ? " active" : ""}" data-cat="${c.id}">${esc(localized(c, "title"))}</button>`;

  const singleCats = [];
  const groupsHtml = NAV_GROUPS.map((group, gi) => {
    const cats = group.ids.map((id) => byId.get(id)).filter(Boolean);
    if (cats.length <= 1) {
      singleCats.push(...cats);
      return "";
    }
    const groupLabel = getLang() === "en" ? group.label_en : group.label_de;
    return `
      <div class="category-nav__group" data-group-index="${gi}">
        <button type="button" class="category-nav__group-header">
          <span class="category-nav__group-label">${esc(groupLabel)}<span class="category-nav__group-count">${cats.length} ${esc(t("categories_suffix"))}</span></span>
          <span class="category-nav__group-chevron">▾</span>
        </button>
        <div class="category-nav__group-tabs-wrap">
          <div class="category-nav__group-tabs">
            ${cats.map(tabHtml).join("")}
          </div>
        </div>
      </div>`;
  }).join("");

  const standaloneHtml = singleCats.length
    ? `<div class="category-nav__standalone-row">${singleCats.map(tabHtml).join("")}</div>`
    : "";

  nav.innerHTML = `<div class="category-nav__inner">${standaloneHtml}${groupsHtml}</div>`;
  renderActiveCategory(initialCatId);

  // Open the group that contains the default active category.
  const defaultGroupEl = [...nav.querySelectorAll(".category-nav__group")].find((g) =>
    g.querySelector(".category-tab.active")
  );
  if (defaultGroupEl) setGroupOpen(defaultGroupEl, true);

  // Arrived via a direct link to an item (e.g. from the Sushi-tanzt price link) — jump straight to its card.
  if (hashItem) {
    requestAnimationFrame(() => {
      const card = main.querySelector(`.item-card[data-code="${CSS.escape(hashItem.code)}"]`);
      const target = card || main;
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      if (card) {
        card.classList.add("item-card--highlight");
        setTimeout(() => card.classList.remove("item-card--highlight"), 1800);
      }
    });
  }

  nav.addEventListener("click", (e) => {
    const header = e.target.closest(".category-nav__group-header");
    if (header) {
      const groupEl = header.closest(".category-nav__group");
      setGroupOpen(groupEl, !groupEl.classList.contains("open"));
      return;
    }
    const btn = e.target.closest(".category-tab");
    if (!btn) return;
    nav.querySelectorAll(".category-tab").forEach((tab) => tab.classList.remove("active"));
    btn.classList.add("active");
    renderActiveCategory(btn.dataset.cat);
    document.getElementById("menuMain").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  wireAddButtons(main);
}

function wireAddButtons(container) {
  container.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    const code = btn.dataset.add;
    const item = CATEGORIES.flatMap((c) => c.items).find((i) => i.code === code);
    if (!item) return;
    if (item.variations?.length) {
      openVariationModal(item);
    } else {
      addLine({ itemCode: item.code, name: item.name_de, variantLabel: null, unitPrice: item.price });
      showToast(`${localized(item, "name")} ${t("added_to_cart_suffix")}`);
    }
  });
}

// ---------------- Speisekarte page: PDF page carousel ----------------

const PDF_PAGE_COUNT = 22;

function initPdfViewer() {
  const carousel = document.getElementById("pdfCarousel");
  if (!carousel) return;
  carousel.innerHTML = Array.from({ length: PDF_PAGE_COUNT }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `<img src="images/menu-pages/page-${n}.webp" alt="Speisekarte Seite ${i + 1}" loading="${i < 2 ? "eager" : "lazy"}">`;
  }).join("");

  const indicator = document.getElementById("pdfPageIndicator");
  const slides = [...carousel.children];

  // With several pages visible at once, "closest slide to viewport center" is
  // ambiguous and jumps around. Track position as a fixed step (slide width +
  // gap) instead — index = how many full steps we've scrolled past.
  function slideStep() {
    return (slides[1]?.offsetLeft ?? slides[0].offsetWidth) - (slides[0]?.offsetLeft ?? 0) || slides[0].offsetWidth;
  }
  function currentIndex() {
    const step = slideStep();
    if (!step) return 0;
    return Math.min(PDF_PAGE_COUNT - 1, Math.max(0, Math.round(carousel.scrollLeft / step)));
  }
  function updateIndicator() {
    const idx = currentIndex();
    indicator.textContent = `${idx + 1} ${t("pdf_page_of")} ${PDF_PAGE_COUNT}`;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
    return idx;
  }

  let scrollTimer;
  carousel.addEventListener("scroll", () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(updateIndicator, 80);
  });

  // Images aren't laid out yet on the same tick the markup is inserted, so the
  // very first calculation would see offsetLeft/offsetWidth as 0 for everything.
  // Wait a frame (and again once the first slide's image has actually loaded).
  requestAnimationFrame(() => requestAnimationFrame(updateIndicator));
  if (slides[0]) {
    if (slides[0].complete) updateIndicator();
    else slides[0].addEventListener("load", updateIndicator, { once: true });
  }

  document.getElementById("pdfPrev")?.addEventListener("click", () => {
    const target = slides[Math.max(0, currentIndex() - 1)];
    target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
  document.getElementById("pdfNext")?.addEventListener("click", () => {
    const target = slides[Math.min(slides.length - 1, currentIndex() + 1)];
    target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });

  const lightbox = document.getElementById("pdfLightbox");
  const lightboxImg = document.getElementById("pdfLightboxImg");
  let lightboxIndex = 0;
  function showLightboxSlide(i) {
    lightboxIndex = Math.min(slides.length - 1, Math.max(0, i));
    const slide = slides[lightboxIndex];
    lightboxImg.src = slide.src;
    lightboxImg.alt = slide.alt;
    slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
  function openLightbox(i) {
    showLightboxSlide(i);
    lightbox.classList.add("is-open");
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
  }
  slides.forEach((slide, i) => {
    slide.addEventListener("click", () => {
      if (i === currentIndex()) openLightbox(i);
      else slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  });
  document.getElementById("pdfLightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("pdfLightboxPrev")?.addEventListener("click", () => showLightboxSlide(lightboxIndex - 1));
  document.getElementById("pdfLightboxNext")?.addEventListener("click", () => showLightboxSlide(lightboxIndex + 1));
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox?.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") showLightboxSlide(lightboxIndex - 1);
    else if (e.key === "ArrowRight") showLightboxSlide(lightboxIndex + 1);
  });

  updateIndicator();
}

// ---------------- Home page: featured dishes ----------------

const FEATURED_CODES = ["111", "113", "115", "117"];

function renderFeaturedDishes() {
  const container = document.getElementById("featuredDishes");
  if (!container) return;
  const allItems = CATEGORIES.flatMap((c) => c.items);
  const items = FEATURED_CODES.map((code) => allItems.find((i) => i.code === code)).filter(Boolean);
  container.innerHTML = items.map(renderItemCard).join("");
  wireAddButtons(container);
}

// ---------------- Home page: hero hover video ----------------

function initHeroVideo() {
  const hero = document.getElementById("homeHero");
  const video = document.getElementById("heroVideo");
  if (!hero || !video) return;
  const play = () => {
    hero.classList.add("is-video-active");
    video.play().catch(() => {});
  };
  const hasHover = window.matchMedia("(hover: hover)").matches;
  if (!hasHover) {
    // Mobile: no hover concept — just play as soon as the hero is on screen.
    play();
    return;
  }
  hero.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    play();
  });
  hero.addEventListener("mouseleave", () => {
    hero.classList.remove("is-video-active");
    video.pause();
  });
  // Desktop: also autoplay once the hero scrolls into view, not only on hover.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) play(); });
    }, { threshold: 0.4 });
    observer.observe(hero);
  }
}

// ---------------- Floating scroll-to-top + cart shortcut (mobile) ----------------

function initScrollFab() {
  const fab = document.getElementById("scrollFab");
  const topBtn = document.getElementById("scrollFabTop");
  if (!fab || !topBtn) return;
  let ticking = false;
  const update = () => {
    fab.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ---------------- Scroll reveal ----------------

function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => observer.observe(el));
}

// ---------------- Home page: dancing sushi mascots ----------------

const SUSHI_DANCE_ITEMS = [
  { code: "67", slug: "sake-nigiri" },
  { code: "48", slug: "tekka-maki" },
  { code: "69", slug: "ebi-nigiri" },
  { code: "86", slug: "california-io" },
  { code: "71", slug: "unagi-nigiri" },
  { code: "64", slug: "avocado-maki" },
  { code: "8", slug: "gyoza" },
  { code: "3", slug: "miso-suppe" },
];

function renderSushiDance() {
  const stage = document.getElementById("sushiDanceStage");
  if (!stage) return;
  stage.innerHTML = SUSHI_DANCE_ITEMS.map((entry, i) => {
    const category = CATEGORIES.find((c) => c.items.some((it) => it.code === entry.code));
    const item = category?.items.find((it) => it.code === entry.code);
    if (!item) return "";
    const staticSrc = `images/sushi-dance/${entry.slug}-static.png`;
    const dancingSrc = `images/sushi-dance/${entry.slug}-dancing.gif`;
    return `
      <div class="sushi-dance__item">
        <img class="sushi-dance__img" src="${staticSrc}" data-static="${staticSrc}" data-dancing="${dancingSrc}"
             alt="${esc(localized(item, "name"))}" loading="lazy" style="animation-delay:${(i * 0.35).toFixed(2)}s">
        <a class="sushi-dance__label" href="bestellen.html#item-${esc(item.code)}">
          ${esc(localized(item, "name"))}<br>
          <span class="sushi-dance__price-link">${fmtPrice(itemBasePrice(item))}</span>
        </a>
      </div>`;
  }).join("");
  stage.querySelectorAll(".sushi-dance__img").forEach((img) => {
    img.addEventListener("mouseenter", () => { img.src = img.dataset.dancing; });
    img.addEventListener("mouseleave", () => { img.src = img.dataset.static; });
    // touchstart: a tap alone is enough to make it dance, no press-and-hold needed.
    img.addEventListener("touchstart", () => { img.src = img.dataset.dancing; }, { passive: true });
  });
}

// ---------------- Variation modal ----------------

function openVariationModal(item) {
  const overlay = document.getElementById("variationOverlay");
  const list = document.getElementById("variationList");
  document.getElementById("variationTitle").textContent = localized(item, "name");
  document.getElementById("variationSub").textContent = getLang() === "en" ? (item.name_de || "") : (item.name_en || "");
  list.innerHTML = item.variations
    .map(
      (v, i) => `
      <label class="option-row${i === 0 ? " selected" : ""}">
        <span>${esc(localized(v, "label"))} <span style="color:var(--text-light)">(${esc(getLang() === "en" ? v.label_de : v.label_en)})</span></span>
        <span style="display:flex;align-items:center;gap:8px;">
          <b>${fmtPrice(v.price)}</b>
          <input type="radio" name="variant" value="${i}" ${i === 0 ? "checked" : ""}>
        </span>
      </label>`
    )
    .join("");
  list.querySelectorAll(".option-row").forEach((row) => {
    row.addEventListener("click", () => {
      list.querySelectorAll(".option-row").forEach((r) => r.classList.remove("selected"));
      row.classList.add("selected");
      row.querySelector("input").checked = true;
    });
  });
  overlay.classList.add("open");
  overlay.dataset.itemCode = item.code;
}

function closeVariationModal() {
  document.getElementById("variationOverlay").classList.remove("open");
}

function confirmVariation() {
  const overlay = document.getElementById("variationOverlay");
  const code = overlay.dataset.itemCode;
  const item = CATEGORIES.flatMap((c) => c.items).find((i) => i.code === code);
  const selectedIdx = Number(document.querySelector('input[name="variant"]:checked')?.value ?? 0);
  const variant = item.variations[selectedIdx];
  addLine({
    itemCode: item.code,
    name: item.name_de,
    variantLabel: variant.label_de,
    unitPrice: variant.price,
  });
  showToast(`${localized(item, "name")} (${localized(variant, "label")}) ${t("added_to_cart_suffix")}`);
  closeVariationModal();
}

// ---------------- Cart drawer ----------------

function renderCart(lines) {
  const countEls = document.querySelectorAll(".cart-count");
  const count = totalCount();
  countEls.forEach((el) => (el.textContent = String(count)));

  const container = document.getElementById("cartItems");
  if (!lines.length) {
    container.innerHTML = `<div class="empty-cart">${esc(t("cart_empty"))}</div>`;
  } else {
    container.innerHTML = lines
      .map(
        (l) => `
        <div class="cart-line" data-key="${esc(l.key)}">
          <div class="cart-line__info">
            <div class="cart-line__name">${esc(l.name)}</div>
            ${l.variantLabel ? `<div class="cart-line__variant">${esc(l.variantLabel)}</div>` : ""}
            <div class="cart-line__controls">
              <button class="qty-btn" data-qty="-1">−</button>
              <span>${l.qty}</span>
              <button class="qty-btn" data-qty="1">+</button>
            </div>
            <button class="cart-line__remove" data-remove>${esc(t("remove"))}</button>
          </div>
          <div class="cart-line__price">${fmtPrice(l.unitPrice * l.qty)}</div>
        </div>`
      )
      .join("");
  }
  document.getElementById("cartTotal").textContent = fmtPrice(totalPrice());
  document.getElementById("checkoutBtn").disabled = lines.length === 0;
}

function initCart() {
  subscribe(renderCart);

  document.getElementById("cartItems").addEventListener("click", (e) => {
    const line = e.target.closest(".cart-line");
    if (!line) return;
    const key = line.dataset.key;
    if (e.target.matches("[data-qty]")) {
      changeQty(key, Number(e.target.dataset.qty));
    } else if (e.target.matches("[data-remove]")) {
      removeLine(key);
    }
  });

  document.querySelectorAll("[data-open-cart]").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.getElementById("cartDrawer").classList.add("open");
      document.getElementById("drawerOverlay").classList.add("open");
    })
  );
  const closeCart = () => {
    document.getElementById("cartDrawer").classList.remove("open");
    document.getElementById("drawerOverlay").classList.remove("open");
  };
  document.getElementById("closeCartBtn").addEventListener("click", closeCart);
  document.getElementById("drawerOverlay").addEventListener("click", closeCart);

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    closeCart();
    openOrderModal();
  });
}

// ---------------- Order (Bestellen) modal ----------------

function openOrderModal() {
  document.getElementById("orderOverlay").classList.add("open");
}
function closeOrderModal() {
  document.getElementById("orderOverlay").classList.remove("open");
}

function nextCounter(key) {
  const n = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(n));
  return n;
}

async function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById("orderName").value.trim();
  const phone = document.getElementById("orderPhone").value.trim();
  const pickupTime = document.getElementById("orderPickupTime").value.trim();
  if (!name || !phone || !pickupTime) return;
  const lines = getLines();
  const total = totalPrice();
  const submitBtn = e.target.querySelector('button[type="submit"]');
  setBtnLoading(submitBtn, true);
  const result = await sendOrder({ lines, total, customerName: name, customerPhone: phone, pickupTime });
  setBtnLoading(submitBtn, false);

  if (result.ok) {
    const n = nextCounter("lili_order_counter");
    closeOrderModal();
    document.getElementById("orderForm").reset();
    clearCart();
    openResultModal({
      success: true,
      title: `${t("order_recorded_title")} (#${n})`,
      details: `${pickupTime} · ${fmtPrice(total)}`,
    });
  } else {
    openResultModal({ success: false, error: result.error, retry: () => submitOrder(e) });
  }
}

// ---------------- Reservation modal ----------------

function openReservationModal() {
  document.getElementById("reservationOverlay").classList.add("open");
}
function closeReservationModal() {
  document.getElementById("reservationOverlay").classList.remove("open");
}

async function submitReservation(e) {
  e.preventDefault();
  const name = document.getElementById("resName").value.trim();
  const phone = document.getElementById("resPhone").value.trim();
  const date = document.getElementById("resDate").value;
  const time = document.getElementById("resTime").value;
  const pax = document.getElementById("resPax").value;
  const notes = document.getElementById("resNotes").value.trim();
  if (!name || !phone || !date || !time || !pax) return;
  const submitBtn = e.target.querySelector('button[type="submit"]');
  setBtnLoading(submitBtn, true);
  const result = await sendReservation({ name, phone, date, time, pax, notes });
  setBtnLoading(submitBtn, false);

  if (result.ok) {
    const n = nextCounter("lili_reservation_counter");
    closeReservationModal();
    document.getElementById("reservationForm").reset();
    openResultModal({
      success: true,
      title: `${t("reservation_recorded_title")} (#${n})`,
      details: `${date} · ${time} · ${pax} ${t("guests_suffix")}`,
    });
  } else {
    openResultModal({ success: false, error: result.error, retry: () => submitReservation(e) });
  }
}

function setBtnLoading(btn, loading) {
  if (!btn) return;
  btn.disabled = loading;
  if (loading) {
    btn.dataset.originalText = btn.textContent;
    btn.textContent = t("sending_ellipsis");
  } else if (btn.dataset.originalText) {
    btn.textContent = btn.dataset.originalText;
  }
}

// ---------------- Result modal (success or error after sending) ----------------

function openResultModal({ success, title, details, error, retry }) {
  const overlay = document.getElementById("confirmOverlay");
  if (!overlay) {
    alert(success ? title : `${t("send_error_title")}: ${error}`);
    return;
  }
  overlay.classList.toggle("is-error", !success);
  document.getElementById("confirmIcon").textContent = success ? "✓" : "✕";
  document.getElementById("confirmTitle").textContent = success ? title : t("send_error_title");
  document.getElementById("confirmDetails").textContent = success
    ? details
    : `${error} — ${t("send_error_note")} ${CONFIG.restaurant.phoneDisplay}`;
  document.getElementById("confirmNote").style.display = success ? "none" : "";
  const retryBtn = document.getElementById("confirmRetryBtn");
  if (success) {
    retryBtn.style.display = "none";
  } else {
    retryBtn.style.display = "";
    retryBtn.onclick = () => {
      closeConfirmModal();
      retry?.();
    };
  }
  overlay.classList.add("open");
}

function closeConfirmModal() {
  document.getElementById("confirmOverlay")?.classList.remove("open");
}

// ---------------- Toast ----------------

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function showSuccessMessage(msg) {
  showToast(msg);
}

// ---------------- Header / footer info from config ----------------

function renderRestaurantInfo() {
  document.querySelectorAll("[data-restaurant-name]").forEach((el) => (el.textContent = CONFIG.restaurant.name));
  document.querySelectorAll("[data-restaurant-phone]").forEach((el) => (el.textContent = CONFIG.restaurant.phoneDisplay));
  const phoneLinkHtml = `<a href="tel:${CONFIG.restaurant.phoneHref}">${esc(CONFIG.restaurant.phoneDisplay)}</a>`;
  const orderSub = document.getElementById("orderModalSub");
  if (orderSub) orderSub.innerHTML = t("order_modal_sub", { phone: phoneLinkHtml });
  const resSub = document.getElementById("reservationModalSub");
  if (resSub) resSub.innerHTML = t("reservation_modal_sub", { phone: phoneLinkHtml });
  document.querySelectorAll("[data-restaurant-address]").forEach(
    (el) => (el.textContent = `${CONFIG.restaurant.street}, ${CONFIG.restaurant.zip} ${CONFIG.restaurant.city}`)
  );
  document.querySelectorAll("[data-review-link]").forEach((el) => (el.href = CONFIG.reviewUrl));
  const mapsQuery = encodeURIComponent(`${CONFIG.restaurant.street}, ${CONFIG.restaurant.zip} ${CONFIG.restaurant.city}`);
  document.querySelectorAll("#mapsLink, [data-maps-link]").forEach((el) => {
    el.href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  });
  const phoneLink = document.getElementById("phoneLink");
  if (phoneLink) phoneLink.href = `tel:${CONFIG.restaurant.phoneHref}`;
  const lang = getLang();
  const hoursHtml = CONFIG.restaurant.hours
    .map((h) => {
      const days = lang === "en" ? h.days_en || h.days : h.days;
      const times = lang === "en" ? h.times_en || h.times : h.times;
      return `<div><b>${esc(days)}</b> ${times.map(esc).join(" &amp; ")}</div>`;
    })
    .join("");
  document.querySelectorAll("[data-opening-hours]").forEach((el) => (el.innerHTML = hoursHtml));
}

// ---------------- Init ----------------

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  initLangSwitcher();
  renderRestaurantInfo();
  if (document.getElementById("categoryNav") && document.getElementById("menuMain")) {
    initMenu();
  }
  initPdfViewer();
  initHeroVideo();
  renderFeaturedDishes();
  renderSushiDance();
  initScrollReveal();
  initScrollFab();
  initCart();

  document.querySelectorAll("[data-open-reservation]").forEach((btn) => btn.addEventListener("click", openReservationModal));
  document.getElementById("closeReservationBtn")?.addEventListener("click", closeReservationModal);
  document.getElementById("reservationOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "reservationOverlay") closeReservationModal();
  });
  document.getElementById("reservationForm")?.addEventListener("submit", submitReservation);

  document.getElementById("closeOrderBtn")?.addEventListener("click", closeOrderModal);
  document.getElementById("orderOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "orderOverlay") closeOrderModal();
  });
  document.getElementById("orderForm")?.addEventListener("submit", submitOrder);

  if (document.getElementById("variationOverlay")) {
    document.getElementById("closeVariationBtn").addEventListener("click", closeVariationModal);
    document.getElementById("variationOverlay").addEventListener("click", (e) => {
      if (e.target.id === "variationOverlay") closeVariationModal();
    });
    document.getElementById("confirmVariationBtn").addEventListener("click", confirmVariation);
  }

  if (document.getElementById("confirmOverlay")) {
    document.getElementById("closeConfirmBtn").addEventListener("click", closeConfirmModal);
    document.getElementById("confirmOkBtn").addEventListener("click", closeConfirmModal);
    document.getElementById("confirmOverlay").addEventListener("click", (e) => {
      if (e.target.id === "confirmOverlay") closeConfirmModal();
    });
  }
});
