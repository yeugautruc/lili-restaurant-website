// ============================================================
// EDIT THIS FILE with your real business details before going live.
// Everything here is PUBLIC (visible to anyone via browser dev tools) —
// that's fine, none of it is a secret (it's exactly what German law
// requires to disclose publicly in the Impressum anyway).
// ============================================================

export const CONFIG = {
  restaurant: {
    name: "Lili Sushi Asia Küche",
    street: "An d. Alten Weed 18",
    zip: "91438",
    city: "Bad Windsheim",
    phoneDisplay: "09841 / 6529163",
    phoneHref: "+4998416529163",
    email: "PLACEHOLDER_EMAIL@example.com",
    hours: [
      { days: "Mo. – Do.", days_en: "Mon – Thu", times: ["11:30 – 15:00 Uhr", "17:00 – 22:00 Uhr"], times_en: ["11:30 AM – 3:00 PM", "5:00 PM – 10:00 PM"] },
      { days: "Fr. – So.", days_en: "Fri – Sun", times: ["11:30 – 22:00 Uhr"], times_en: ["11:30 AM – 10:00 PM"] },
    ],
  },

  // WhatsApp number that receives order / reservation messages.
  // Format: country code + number, NO "+", NO spaces. Example: "4915112345678"
  whatsappNumber: "49XXXXXXXXXX",

  // Real review link (Google Maps review URL or Facebook page) for the "Bewerten" nav button.
  reviewUrl: "https://www.google.com/maps?cid=5915246933775414237",

  // ---- Impressum (§ 5 TMG/TDDDG) — fill in before publishing live ----
  legal: {
    ownerName: "PLACEHOLDER_VOR_UND_NACHNAME_ODER_FIRMA",
    legalForm: "PLACEHOLDER_z.B._Einzelunternehmen_oder_GmbH",
    street: "An d. Alten Weed 18",
    zip: "91438",
    city: "Bad Windsheim",
    phone: "09841 / 6529163",
    email: "PLACEHOLDER_EMAIL@example.com",
    vatId: "PLACEHOLDER_USt-IdNr_falls_vorhanden",
    tradeRegister: "PLACEHOLDER_Handelsregister_falls_vorhanden",
    responsiblePerson: "PLACEHOLDER_falls_abweichend_vom_Inhaber",
  },
};
