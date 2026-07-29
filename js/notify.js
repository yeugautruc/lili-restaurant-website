// Sends order/reservation data to our own backend (api/notify.js), which relays
// it to the restaurant's Telegram chat. No customer WhatsApp/Telegram account needed.

export async function sendOrder({ lines, total, customerName, customerPhone, pickupTime }) {
  const payload = {
    type: "order",
    customerName,
    customerPhone,
    pickupTime,
    total,
    lines: lines.map((l) => ({ name: l.name, variantLabel: l.variantLabel, qty: l.qty, unitPrice: l.unitPrice })),
  };
  return postNotify(payload);
}

export async function sendReservation({ name, phone, date, time, pax, notes }) {
  return postNotify({ type: "reservation", name, phone, date, time, pax, notes });
}

async function postNotify(payload) {
  try {
    const res = await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({ ok: false, error: "Invalid server response" }));
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message || "Network error" };
  }
}
