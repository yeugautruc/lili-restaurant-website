import { CONFIG } from "./config.js";

function fmtPrice(n) {
  return n.toFixed(2).replace(".", ",") + " €";
}

export function openWhatsApp(text) {
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener");
}

export function buildOrderMessage({ lines, total, customerName, pickupTime }) {
  const itemLines = lines
    .map((l) => `• ${l.qty}x ${l.name}${l.variantLabel ? ` (${l.variantLabel})` : ""} – ${fmtPrice(l.unitPrice * l.qty)}`)
    .join("\n");
  return [
    `Neue Bestellung – ${CONFIG.restaurant.name}`,
    "",
    itemLines,
    "",
    `Gesamt: ${fmtPrice(total)}`,
    "",
    `Name: ${customerName}`,
    `Abholzeit: ${pickupTime}`,
  ].join("\n");
}

export function buildReservationMessage({ name, date, time, pax, notes }) {
  return [
    `Tischreservierung – ${CONFIG.restaurant.name}`,
    "",
    `Name: ${name}`,
    `Datum: ${date}`,
    `Uhrzeit: ${time}`,
    `Personen: ${pax}`,
    notes ? `Anmerkung: ${notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
