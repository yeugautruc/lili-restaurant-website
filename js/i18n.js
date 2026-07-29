const LANG_KEY = "lili_lang";

export function getLang() {
  const l = localStorage.getItem(LANG_KEY);
  return l === "en" ? "en" : "de";
}

export function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang === "en" ? "en" : "de");
}

export const STRINGS = {
  de: {
    nav_home: "Startseite",
    nav_menu: "Speisekarte",
    nav_about: "Über uns",
    nav_contact: "Kontakt",
    nav_reviews: "Bewerten",
    reserve_table: "Tisch reservieren",
    cart: "Warenkorb",
    hero_title: "Willkommen bei Lili",
    hero_text: "Frische Sushi-Kunst, vietnamesische Klassiker und asiatische Küche mitten in Bad Windsheim – reservieren Sie Ihren Tisch oder bestellen Sie ganz einfach online.",
    hero_video_hint: "Video ansehen",
    view_menu: "Speisekarte ansehen",
    home_teaser_title: "Sushi · Vietnamesisch · Asiatisch",
    home_teaser_text: "Von frischen Sommerrollen und Vorspeisen über Maki, Nigiri und Inside-Out-Rollen bis zu vietnamesischen Hauptspeisen und Wok-Gerichten – unsere volle Speisekarte finden Sie hier.",
    to_menu: "Zur Speisekarte",
    menu_hero_title: "Speisekarte",
    menu_hero_text: "Vorspeisen, Sushi, Hauptspeisen, Nachtisch und Getränke – frisch zubereitet, zum hier Essen oder Mitnehmen.",
    categories_suffix: "Kategorien",
    add_to_cart: "＋ Hinzufügen",
    allergens_prefix: "Allergene/Zusatzstoffe:",
    price_from: "ab",
    price_on_request: "Preis auf Anfrage",
    sample_image: "Beispielbild",
    allergen_legend_title: "Allergene & Zusatzstoffe – Legende",
    please_choose: "Bitte auswählen",
    confirm_add_to_cart: "Zum Warenkorb hinzufügen",
    cart_empty: "Ihr Warenkorb ist leer.",
    total: "Gesamt",
    order: "Bestellen",
    order_modal_title: "Bestellung abschließen",
    order_modal_sub: "Für schnellste und sicherste Bearbeitung können Sie uns auch direkt anrufen: {phone}. Oder senden Sie uns Ihre Bestellung einfach über das Formular unten.",
    label_name: "Name",
    label_phone: "Telefonnummer",
    label_pickup_time: "Abholzeit",
    send_whatsapp: "Absenden",
    reservation_modal_title: "Tisch reservieren",
    reservation_modal_sub: "Für schnellste und sicherste Bearbeitung können Sie uns auch direkt anrufen: {phone}. Oder senden Sie uns Ihre Reservierung einfach über das Formular unten.",
    label_date: "Datum",
    label_time: "Uhrzeit",
    label_pax: "Anzahl Personen",
    label_notes: "Anmerkung (optional)",
    remove: "Entfernen",
    opening_hours: "Öffnungszeiten",
    navigation: "Navigation",
    legal_notice: "Impressum",
    privacy_policy: "Datenschutz",
    added_to_cart_suffix: "zum Warenkorb hinzugefügt",
    order_success: "Vielen Dank! Ihre Bestellung wurde erfasst und wird über WhatsApp gesendet.",
    reservation_success: "Vielen Dank! Ihre Tischreservierung wurde erfasst und wird über WhatsApp gesendet.",
    order_recorded_title: "Bestellung erfolgreich gesendet!",
    reservation_recorded_title: "Tisch erfolgreich reserviert!",
    confirm_pending_note: "Noch nicht abgeschlossen.",
    chat_on_whatsapp: "Über WhatsApp senden",
    ok_button: "OK",
    guests_suffix: "Personen",
    sending_ellipsis: "Wird gesendet…",
    send_error_title: "Etwas ist schiefgelaufen",
    send_error_note: "Bitte versuchen Sie es erneut oder rufen Sie uns direkt an:",
    retry_button: "Erneut versuchen",
    kontakt_title: "Kontakt",
    kontakt_address: "Adresse",
    kontakt_open_maps: "In Google Maps öffnen →",
    kontakt_phone: "Telefon",
    kontakt_order_title: "Tisch reservieren oder bestellen",
    kontakt_order_text: "Am schnellsten erreichen Sie uns direkt über WhatsApp:",
    about_title: "Über uns",
    about_notice: "Noch offen: Gründungsjahr, Fotos vom Restaurant/Team und weitere Details fehlen noch — bitte bei Bedarf ergänzen. Der Text unten basiert auf den Angaben, die Sie uns gegeben haben.",
    about_p1: "Hinter jedem Gericht bei Lili Sushi Asia Küche steht ein Küchenchef mit über 10 Jahren Erfahrung in der asiatischen Küche. Diese Erfahrung schmeckt man: in der Präzision unserer Sushi-Rollen, in den kräftigen Aromen unserer vietnamesischen Klassiker und in jedem Wok-Gericht, das frisch für Sie zubereitet wird.",
    about_p2: "Unser Anspruch ist einfach – und genau deshalb nicht selbstverständlich: nur die frischesten, besten Zutaten zu verwenden und daraus den bestmöglichen Geschmack herauszuholen. Kein Fertigprodukt, keine Abkürzung – jedes Gericht entsteht mit der gleichen Sorgfalt, mit der man für Familie und Freunde kocht. Ob Sommerrollen, handgerollte Maki oder ein dampfendes Wok-Gericht: Wir wollen, dass jeder Bissen bei Lili ein kleines Erlebnis ist.",
    footer_tagline: "",

    about_eyebrow: "Über uns",
    about_home_title: "Wer wir sind",
    about_home_text: "Ein Küchenchef mit über 10 Jahren Erfahrung in der asiatischen Küche – und der Anspruch, jedes Gericht mit den frischesten Zutaten frisch zuzubereiten. Kein Fertigprodukt, keine Abkürzung.",
    learn_more: "Mehr erfahren →",
    featured_eyebrow: "Lili Sushi Asia Küche",
    featured_title: "Beliebte Gerichte",
    sushi_dance_eyebrow: "Zum Reinschauen",
    sushi_dance_title: "Sushi, die tanzt",
    sushi_dance_text: "Fahren Sie mit der Maus darüber oder tippen Sie sie an – unsere Sushi-Freunde tanzen für Sie.",
    highlight1_title: "Frisch zubereitet",
    highlight1_text: "Jedes Gericht wird auf Bestellung frisch zubereitet – mit Sorgfalt und den besten Zutaten.",
    highlight2_title: "Sushi · Vietnamesisch · Asiatisch",
    highlight2_text: "Über 150 Gerichte aus japanischer Sushi-Kunst und vietnamesischer/asiatischer Küche.",
    highlight3_title: "Einfach online bestellen",
    highlight3_text: "Zum Abholen bestellen oder einen Tisch reservieren – direkt über unsere Website.",
    review_title: "Wie war Ihr Besuch?",
    review_text: "Ihre Meinung ist uns wichtig – teilen Sie sie gerne auf Google mit uns.",
    pdf_viewer_eyebrow: "Speisekarte",
    pdf_viewer_title: "Unsere Speisekarte durchblättern",
    pdf_viewer_text: "Wischen Sie seitlich oder nutzen Sie die Pfeile, um alle Seiten zu sehen.",
    pdf_page_of: "von",
    order_cta_title: "Bereit zum Bestellen?",
    order_cta_text: "Bestellen Sie zum Abholen direkt online – schnell und unkompliziert.",
    order_cta_button: "Jetzt bestellen →",
    review_cta: "Jetzt bewerten",
    hours_eyebrow: "Kontakt",
    hours_title: "Öffnungszeiten",
  },
  en: {
    nav_home: "Home",
    nav_menu: "Menu",
    nav_about: "About us",
    nav_contact: "Contact",
    nav_reviews: "Reviews",
    reserve_table: "Reserve a table",
    cart: "Cart",
    hero_title: "Welcome to Lili",
    hero_text: "Fresh sushi craftsmanship, Vietnamese classics and Asian cuisine right in the heart of Bad Windsheim – reserve your table or order online with ease.",
    hero_video_hint: "Watch video",
    view_menu: "View menu",
    home_teaser_title: "Sushi · Vietnamese · Asian",
    home_teaser_text: "From fresh summer rolls and starters to maki, nigiri and inside-out rolls, all the way to Vietnamese main dishes and wok specialties – find our full menu here.",
    to_menu: "View menu",
    menu_hero_title: "Menu",
    menu_hero_text: "Starters, sushi, main dishes, dessert and drinks – freshly prepared, for dine-in or takeaway.",
    categories_suffix: "categories",
    add_to_cart: "＋ Add",
    allergens_prefix: "Allergens/Additives:",
    price_from: "from",
    price_on_request: "Price on request",
    sample_image: "Sample photo",
    allergen_legend_title: "Allergens & additives – legend",
    please_choose: "Please choose",
    confirm_add_to_cart: "Add to cart",
    cart_empty: "Your cart is empty.",
    total: "Total",
    order: "Order",
    order_modal_title: "Complete order",
    order_modal_sub: "For the fastest and most reliable service, you can also call us directly: {phone}. Or simply send us your order using the form below.",
    label_name: "Name",
    label_phone: "Phone number",
    label_pickup_time: "Pickup time",
    send_whatsapp: "Submit",
    reservation_modal_title: "Reserve a table",
    reservation_modal_sub: "For the fastest and most reliable service, you can also call us directly: {phone}. Or simply send us your reservation using the form below.",
    label_date: "Date",
    label_time: "Time",
    label_pax: "Number of guests",
    label_notes: "Note (optional)",
    remove: "Remove",
    opening_hours: "Opening hours",
    navigation: "Navigation",
    legal_notice: "Legal notice",
    privacy_policy: "Privacy policy",
    added_to_cart_suffix: "added to cart",
    order_success: "Thank you! Your order has been recorded and will be sent via WhatsApp.",
    reservation_success: "Thank you! Your table reservation has been recorded and will be sent via WhatsApp.",
    order_recorded_title: "Order recorded!",
    reservation_recorded_title: "Table booked successfully!",
    confirm_pending_note: "Not yet complete.",
    chat_on_whatsapp: "Send via WhatsApp",
    ok_button: "OK",
    guests_suffix: "guests",
    sending_ellipsis: "Sending…",
    send_error_title: "Something went wrong",
    send_error_note: "Please try again or call us directly:",
    retry_button: "Try again",
    kontakt_title: "Contact",
    kontakt_address: "Address",
    kontakt_open_maps: "Open in Google Maps →",
    kontakt_phone: "Phone",
    kontakt_order_title: "Reserve a table or order",
    kontakt_order_text: "The fastest way to reach us is directly via WhatsApp:",
    about_title: "About us",
    about_notice: "Still open: founding year, photos of the restaurant/team and further details are missing — please add if needed. The text below is based on the information you gave us.",
    about_p1: "Behind every dish at Lili Sushi Asia Küche stands a head chef with over 10 years of experience in Asian cuisine. You can taste that experience: in the precision of our sushi rolls, in the bold flavors of our Vietnamese classics, and in every wok dish prepared fresh for you.",
    about_p2: "Our standard is simple – and precisely because of that, not a given: using only the freshest, best ingredients and getting the best possible flavor out of them. No shortcuts, no ready-made products – every dish is made with the same care you'd put into cooking for family and friends. Whether it's summer rolls, hand-rolled maki, or a steaming wok dish: we want every bite at Lili to be a small experience.",
    footer_tagline: "",

    about_eyebrow: "About us",
    about_home_title: "Who we are",
    about_home_text: "A head chef with over 10 years of experience in Asian cuisine – and the standard to prepare every dish fresh with the finest ingredients. No shortcuts, no ready-made products.",
    learn_more: "Learn more →",
    featured_eyebrow: "Lili Sushi Asia Küche",
    featured_title: "Popular dishes",
    sushi_dance_eyebrow: "Take a peek",
    sushi_dance_title: "Sushi that dances",
    sushi_dance_text: "Hover over them or give them a tap – our sushi friends will dance for you.",
    highlight1_title: "Freshly prepared",
    highlight1_text: "Every dish is freshly prepared to order – with care and the best ingredients.",
    highlight2_title: "Sushi · Vietnamese · Asian",
    highlight2_text: "Over 150 dishes spanning Japanese sushi craftsmanship and Vietnamese/Asian cuisine.",
    highlight3_title: "Simple online ordering",
    highlight3_text: "Order for pickup or reserve a table – directly through our website.",
    review_title: "How was your visit?",
    review_text: "Your opinion matters to us – feel free to share it with us on Google.",
    pdf_viewer_eyebrow: "Menu",
    pdf_viewer_title: "Browse our full menu",
    pdf_viewer_text: "Swipe sideways or use the arrows to see every page.",
    pdf_page_of: "of",
    order_cta_title: "Ready to order?",
    order_cta_text: "Order for pickup directly online – fast and simple.",
    order_cta_button: "Order now →",
    review_cta: "Leave a review",
    hours_eyebrow: "Contact",
    hours_title: "Opening hours",
  },
};

export function t(key, vars) {
  const lang = getLang();
  let str = STRINGS[lang][key] ?? STRINGS.de[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replaceAll(`{${k}}`, v);
    }
  }
  return str;
}

export function applyTranslations(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  root.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
}

export function initLangSwitcher() {
  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langSwitch === getLang());
    btn.addEventListener("click", () => {
      setLang(btn.dataset.langSwitch);
      location.reload();
    });
  });
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.querySelectorAll("[data-opt]").forEach((opt) => {
      opt.classList.toggle("is-active", opt.dataset.opt === getLang());
    });
    btn.addEventListener("click", () => {
      setLang(getLang() === "en" ? "de" : "en");
      location.reload();
    });
  });
}
