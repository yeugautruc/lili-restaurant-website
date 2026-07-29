const STORAGE_KEY = "lili_cart_v1";

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

let lines = load();
const listeners = new Set();

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  listeners.forEach((fn) => fn(lines));
}

export function subscribe(fn) {
  listeners.add(fn);
  fn(lines);
  return () => listeners.delete(fn);
}

export function getLines() {
  return lines;
}

export function addLine({ itemCode, name, variantLabel, unitPrice, qty = 1 }) {
  const key = `${itemCode}::${variantLabel || ""}`;
  const existing = lines.find((l) => l.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    lines.push({ key, itemCode, name, variantLabel, unitPrice, qty });
  }
  persist();
}

export function changeQty(key, delta) {
  const line = lines.find((l) => l.key === key);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) {
    lines = lines.filter((l) => l.key !== key);
  }
  persist();
}

export function removeLine(key) {
  lines = lines.filter((l) => l.key !== key);
  persist();
}

export function clearCart() {
  lines = [];
  persist();
}

export function totalCount() {
  return lines.reduce((sum, l) => sum + l.qty, 0);
}

export function totalPrice() {
  return lines.reduce((sum, l) => sum + l.unitPrice * l.qty, 0);
}
