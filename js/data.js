// Menu data transcribed from "Lili Sushi Asia Küche_Menu.pdf" (22 pages).
// price: single number in EUR, OR variations: [{code,label_de,label_en,price}]
// allergens: array of legend codes (see ALLERGEN_LEGEND below) — required by German food-info law (LMIV).
// image: path relative to images/, or null when the PDF has no dedicated photo for this item.

// Fallback images for items with no dedicated PDF photo, keyed by item code.
// Reused real photos (e.g. "maki/sake-maki.webp") come from a visually similar dish already
// photographed in the PDF; "stock/*.webp" are free-license representative photos (Unsplash),
// used when no PDF photo of that dish family exists at all. Never claims to be the exact dish —
// purely a representative image for browsing.
export const ITEM_IMAGE_FALLBACK = {
  // Mittag
  M2: "mittag/gebratene-nudeln.webp", M3: "mittag/gebratene-nudeln.webp", M4: "mittag/gebratene-nudeln.webp",
  M5: "mittag/gebratene-nudeln.webp", M6: "mittag/gebratene-nudeln.webp",
  M11: "mittag/gebratener-reis.webp", M12: "mittag/gebratener-reis.webp", M13: "mittag/gebratener-reis.webp", M14: "mittag/gebratener-reis.webp",
  M20: "mittag/huehnerfleisch-suess-sauer.webp", M21: "mittag/huehnerfleisch-suess-sauer.webp",
  M30: "stock/chicken-panade.webp", M31: "stock/chicken-panade.webp", M32: "stock/chicken-panade.webp", M33: "stock/chicken-panade.webp",

  // Vorspeisen
  2: "stock/asian-soup.webp", 18: "stock/asian-soup.webp", 19: "stock/asian-soup.webp",
  4: "vorspeisen/fruehlingsrollen.webp",
  9: "stock/chicken-skewer.webp", 13: "stock/chicken-skewer.webp",
  17: "stock/chicken-nuggets.webp",

  // Hauptspeisen
  25: "stock/yellow-curry.webp",
  27: "stock/peanut-sauce.webp",
  29: "stock/dark-sauce-stirfry.webp", 31: "stock/dark-sauce-stirfry.webp", 35: "stock/dark-sauce-stirfry.webp",
  33: "stock/glass-noodles.webp",
  34: "hauptspeisen/gebratene-asia-nudeln.webp",

  // Nachtisch
  41: "stock/sesame-dessert-ball.webp",

  // Vom Chefkoch Empfohlen
  T2: "hauptspeisen/ente-kross.webp", T3: "stock/squid-stirfry.webp", T4: "stock/squid-stirfry.webp",

  // Kids Menü
  K1: "stock/french-fries.webp", K3: "kids/schnitzel-pommes.webp",

  // Maki
  45: "maki/sake-maki.webp", 46: "maki/sake-maki.webp", 47: "maki/sake-maki.webp",
  49: "maki/tekka-maki.webp", 50: "maki/tekka-maki.webp",
  51: "maki/sake-maki.webp", 52: "maki/sake-maki.webp", 53: "maki/sake-maki.webp",
  54: "maki/tekka-maki.webp", 55: "maki/tekka-maki.webp", 57: "maki/tekka-maki.webp",
  58: "maki/vegetarisches-maki.webp", 59: "maki/vegetarisches-maki.webp",
  60: "maki/vegetarisches-maki.webp", 61: "maki/vegetarisches-maki.webp", 63: "maki/vegetarisches-maki.webp", 66: "maki/vegetarisches-maki.webp",

  // Nigiri
  68: "nigiri/sake-nigiri.webp", 69: "nigiri/sake-nigiri.webp", 70: "nigiri/sake-nigiri.webp", 72: "nigiri/sake-nigiri.webp", 74: "nigiri/sake-nigiri.webp",

  // Inside Out
  79: "inside-out/lachs-avocado-io.webp", 80: "inside-out/lachs-avocado-io.webp", 81: "inside-out/lachs-avocado-io.webp",
  84: "inside-out/lachs-avocado-io.webp", 85: "inside-out/lachs-avocado-io.webp", "io-butterfish": "inside-out/lachs-avocado-io.webp",
  82: "inside-out/california-io.webp", 83: "inside-out/california-io.webp", "86b": "inside-out/california-io.webp",
  "io-unagi": "inside-out/california-io.webp", "io-veggie": "inside-out/california-io.webp",

  // Tempura Roll
  88: "tempura-roll/fuji-mini-roll.webp", 89: "tempura-roll/fuji-mini-roll.webp", 90: "tempura-roll/fuji-mini-roll.webp",
  91: "tempura-roll/fuji-mini-roll.webp", 92: "tempura-roll/fuji-mini-roll.webp", 93: "tempura-roll/fuji-mini-roll.webp", 94: "tempura-roll/fuji-mini-roll.webp",

  // Tempura Mini Roll
  182: "tempura-mini-roll/tempura-mini-roll.webp", 183: "tempura-mini-roll/tempura-mini-roll.webp", 184: "tempura-mini-roll/tempura-mini-roll.webp",
  185: "tempura-mini-roll/tempura-mini-roll.webp", 186: "tempura-mini-roll/tempura-mini-roll.webp", 187: "tempura-mini-roll/tempura-mini-roll.webp",
  188: "tempura-mini-roll/tempura-mini-roll.webp", 189: "tempura-mini-roll/tempura-mini-roll.webp", 190: "tempura-mini-roll/tempura-mini-roll.webp",

  // Lili Spezialitäten
  95: "stock/special-sushi-roll.webp", 96: "stock/special-sushi-roll.webp", 97: "stock/special-sushi-roll.webp", 98: "stock/special-sushi-roll.webp",
  99: "stock/special-sushi-roll.webp", 100: "stock/special-sushi-roll.webp", 101: "stock/special-sushi-roll.webp", 102: "stock/special-sushi-roll.webp",
  103: "stock/special-sushi-roll.webp", 104: "stock/special-sushi-roll.webp", 105: "stock/special-sushi-roll.webp", 106: "stock/special-sushi-roll.webp",
  107: "stock/special-sushi-roll.webp",

  // Lili Menü
  112: "lili-menue/lili-menue-platte.webp", 113: "lili-menue/lili-menue-platte.webp", 114: "lili-menue/lili-menue-platte.webp",
  115: "lili-menue/lili-menue-platte.webp", 116: "lili-menue/lili-menue-platte.webp", 117: "lili-menue/lili-menue-platte.webp",

  // Soft Drinks
  120: "stock/coca-cola-real.webp", 121: "stock/cola-glass.webp", 122: "stock/cola-glass.webp", 125: "stock/cola-glass.webp",
  123: "stock/lemon-lime-soda.webp", 124: "stock/orange-soda.webp",
  126: "stock/sparkling-water.webp", 127: "stock/sparkling-water.webp",
  johannis: "stock/berry-juice.webp",

  // Limonade
  129: "softdrinks/limonade.webp", 130: "softdrinks/limonade.webp", 131: "softdrinks/limonade.webp", 132: "softdrinks/limonade.webp",

  // Special Homemade Drink
  134: "drinks/special-homemade-drink.webp", 135: "drinks/special-homemade-drink.webp", 136: "drinks/special-homemade-drink.webp",

  // Homemade Cocktails
  137: "drinks/homemade-cocktails.webp", 142: "drinks/homemade-cocktails.webp", 143: "drinks/homemade-cocktails.webp",

  // Biere
  147: "drinks/biere.webp", 148: "drinks/biere.webp", 149: "drinks/biere.webp", 150: "drinks/biere.webp", 151: "drinks/biere.webp",

  // Schnaps
  s2: "drinks/schnaps.webp", s3: "drinks/schnaps.webp",

  // Weißweine
  154: "drinks/weissweine.webp", 155: "drinks/weissweine.webp", wa: "drinks/weissweine.webp", wb: "drinks/weissweine.webp", wc: "drinks/weissweine.webp",

  // Rotweine
  ra: "drinks/rotweine.webp", rb: "drinks/rotweine.webp", rc: "drinks/rotweine.webp", rd: "drinks/rotweine.webp", re: "drinks/rotweine.webp",

  // Kaffee
  158: "drinks/kaffee.webp",

  // Tea
  160: "drinks/tea.webp", 162: "drinks/tea.webp", 166: "drinks/tea.webp",

  // Säfte
  167: "stock/apple-juice.webp", 169: "stock/tropical-juice.webp", 170: "stock/tropical-juice.webp",
  171: "stock/apple-juice.webp", 172: "stock/tropical-juice.webp", 173: "stock/cherry-juice.webp",
};

export const ALLERGEN_LEGEND = {
  additives: {
    1: "Farbstoff / colorant", 2: "Konservierungsstoff / preservative", 3: "Süßungsmittel / sweetener",
    4: "koffeinhaltig / contains caffeine", 5: "Säuerungsmittel / acidifier", 6: "Stabilisator / stabilizer",
    7: "Antioxidationsmittel / antioxidant", 8: "chininhaltig / contains quinine", 9: "Taurin / taurine",
    10: "Geschmacksverstärker / flavour enhancer", 11: "enthält eine Phenylalaninquelle / contains a source of phenylalanine",
  },
  allergens: {
    A: "Glutenhaltiges Getreide / gluten", A1: "Weizen / wheat", A2: "Gerste / barley",
    B: "Krebstiere / crustaceans", C: "Eier / eggs", D: "Fische / fish", E: "Erdnüsse / peanuts",
    F: "Sojabohnen / soybeans", G: "Milch / milk", H: "Schalenfrüchte / nuts", I: "Sellerie / celery",
    J: "Senf / mustard", K: "Sesamsamen / sesame seeds", L: "Schwefeldioxid und Sulphite / sulphites",
    M: "Lupinen / lupin", N: "Weichtiere / molluscs",
  },
};

// Shared protein/topping choice ladder used by most Hauptspeisen sauces (items 24-31, 37, 42)
const SAUCE_CHOICES_WITH_SALMON = [
  { code: "A", label_de: "Tofu", label_en: "tofu", allergens: ["F"], price: 11.9 },
  { code: "B", label_de: "Hühnerfleisch", label_en: "chicken", price: 13.9 },
  { code: "C", label_de: "Rindfleisch", label_en: "beef", price: 14.9 },
  { code: "D", label_de: "Garnelen", label_en: "prawns", allergens: ["B"], price: 14.9 },
  { code: "E", label_de: "Knusprige Ente", label_en: "crispy duck", allergens: ["A1"], price: 15.9 },
  { code: "F", label_de: "Knusprige Hühnerfleisch", label_en: "crispy chicken", allergens: ["A1"], price: 14.9 },
  { code: "G", label_de: "Gegrillte Lachs", label_en: "salmon", price: 16.9 },
];
const SAUCE_CHOICES_NO_SALMON = [
  { code: "A", label_de: "Tofu", label_en: "tofu", allergens: ["F"], price: 12.9 },
  { code: "B", label_de: "Hühnerfleisch", label_en: "chicken", price: 13.9 },
  { code: "C", label_de: "Rindfleisch", label_en: "beef", price: 14.9 },
  { code: "D", label_de: "Garnelen", label_en: "prawns", allergens: ["B"], price: 14.9 },
  { code: "E", label_de: "Knusprige Ente", label_en: "crispy duck", allergens: ["A1"], price: 15.9 },
  { code: "F", label_de: "Knusprige Hühnerfleisch", label_en: "crispy chicken", allergens: ["A1"], price: 14.9 },
];

export const CATEGORIES = [
  // ================= MITTAG =================
  {
    id: "mittag",
    title_de: "Mittag",
    title_en: "Lunch",
    note_de: "Dazu erhältlich (Preis auf Anfrage): Peking Suppe, Chinesische Frühlingsrolle (1 Stk.), Vegetarische Frühlingsrollen (4 Stk.)",
    note_en: "Also available (price on request): Peking soup, Chinese spring roll (1 pc.), vegetarian spring rolls (4 pcs.)",
    items: [
      { code: "M1", name_de: "Gebratene Nudeln – mit frischem Gemüse und Ei", name_en: "Fried noodles with fresh vegetables and egg", allergens: ["A", "C", "F"], price: 12.70, image: "mittag/gebratene-nudeln.webp" },
      { code: "M2", name_de: "Gebratene Nudeln – mit Hühnerfleisch und Ei", name_en: "Fried noodles with chicken and egg", allergens: ["A", "C", "F"], price: 13.70 },
      { code: "M3", name_de: "Mix-Nudeln", name_en: "Mixed noodles with shrimp, chicken, egg and curry powder", allergens: ["A", "B", "C", "F"], price: 14.50 },
      { code: "M4", name_de: "Gebratene Nudeln – mit paniertem Hähnchen und Ei", name_en: "Fried noodles with breaded chicken and egg", allergens: ["A", "C", "F"], price: 13.70 },
      { code: "M5", name_de: "Gebratene Nudeln – mit knuspriger Ente und Ei", name_en: "Fried noodles with crispy duck and egg", allergens: ["A", "C", "F"], price: 14.50 },
      { code: "M6", name_de: "Gebratene Nudeln – mit Garnelen und Ei", name_en: "Fried noodles with shrimp and egg", allergens: ["A", "C", "F"], price: 14.70 },
      { code: "M10", name_de: "Gebratener Reis – mit frischem Gemüse und Ei", name_en: "Fried rice with fresh vegetables and egg", allergens: ["C", "F"], price: 12.70, image: "mittag/gebratener-reis.webp" },
      { code: "M11", name_de: "Gebratener Reis – mit Hühnerfleisch und Ei", name_en: "Fried rice with chicken and egg", allergens: ["C", "F"], price: 13.50 },
      { code: "M12", name_de: "Gebratener Reis – mit paniertem Hähnchen und Ei", name_en: "Fried rice with breaded chicken and egg", allergens: ["A", "C", "F"], price: 13.70 },
      { code: "M13", name_de: "Gebratener Reis – mit Garnelen und Ei", name_en: "Fried rice with shrimp and egg", allergens: ["B", "C", "F"], price: 14.70 },
      { code: "M14", name_de: "Gebratener Reis – mit knuspriger Ente und Ei", name_en: "Fried rice with crispy duck and egg", allergens: ["C", "F"], price: 14.50 },
      { code: "M20", name_de: "Hühnerfleisch – mit Kokosmilch und Rot-Thai Curry Sauce", name_en: "Chicken with coconut milk and red Thai curry sauce", allergens: ["F", "G", "J"], price: 13.70 },
      { code: "M21", name_de: "Hühnerfleisch – mit pikanter Sauce", name_en: "Chicken with spicy sauce", allergens: ["F", "J"], price: 13.70 },
      { code: "M22", name_de: "Hühnerfleisch – mit Süß-Sauer Sauce", name_en: "Chicken with sweet and sour sauce", allergens: ["F"], price: 13.70, image: "mittag/huehnerfleisch-suess-sauer.webp" },
      { code: "M30", name_de: "Panierte Hähnchen – mit Kokosmilch und Rot-Thai Curry Sauce", name_en: "Breaded chicken with coconut milk and red Thai curry sauce", allergens: ["A", "F", "G", "J"], price: 14.70 },
      { code: "M31", name_de: "Panierte Hähnchen – mit pikanter Sauce", name_en: "Breaded chicken with spicy sauce", allergens: ["A", "F", "J"], price: 14.70 },
      { code: "M32", name_de: "Panierte Hähnchen – mit Süß-Sauer Sauce", name_en: "Breaded chicken with sweet and sour sauce", allergens: ["A", "F"], price: 14.70 },
      { code: "M33", name_de: "Panierte Hähnchen – mit Erdnuss Sauce", name_en: "Breaded chicken with peanut sauce", allergens: ["A", "E", "F", "G", "J"], price: 14.70 },
    ],
  },

  // ================= VORSPEISEN =================
  {
    id: "vorspeisen",
    title_de: "Vorspeisen",
    title_en: "Starters",
    items: [
      {
        code: "1", name_de: "Sommer-Rollen (2 Stk.)", name_en: "Summer rolls (2 pcs.)",
        desc_de: "Frische Sommerrollen in Reispapier gefüllt mit Reisnudeln, frischen Kräutern, serviert mit Hoisin-Erdnuss-Dip",
        desc_en: "Fresh summer rolls in rice paper filled with rice noodles and fresh herbs, served with hoisin peanut dipping sauce",
        allergens: ["A1", "E", "F", "K"], image: "vorspeisen/sommerrollen.webp",
        variations: [
          { code: "A", label_de: "Tofu", label_en: "tofu", allergens: ["F"], price: 4.20 },
          { code: "B", label_de: "Hühnerfleisch", label_en: "chicken", price: 4.50 },
          { code: "C", label_de: "Panierte Garnelen", label_en: "shrimps", allergens: ["B"], price: 4.90 },
        ],
      },
      {
        code: "2", name_de: "Pikante Zitronengras-Suppe", name_en: "Spicy lemongrass soup",
        desc_de: "Pikante Zitronengras-Suppe mit Kokosmilch und Gemüse, serviert mit Koriander und Lauchzwiebeln",
        desc_en: "Spicy lemongrass soup with coconut milk and vegetables, served with cilantro and scallions",
        allergens: ["D"],
        variations: [
          { code: "A", label_de: "Tofu", label_en: "tofu", allergens: ["F"], price: 4.20 },
          { code: "B", label_de: "Hühnerfleisch", label_en: "chicken", price: 4.50 },
          { code: "C", label_de: "Panierte Garnelen", label_en: "shrimps", allergens: ["B"], price: 4.90 },
        ],
      },
      {
        code: "3", name_de: "Miso-Suppe", name_en: "Miso soup",
        desc_de: "Traditionelle japanische Suppe mit Lauch und Seetang",
        desc_en: "Traditional Japanese soup with leeks and seaweed",
        allergens: ["F"], image: "vorspeisen/miso-suppe.webp",
        variations: [
          { code: "A", label_de: "Tofu", label_en: "tofu", allergens: ["F"], price: 4.20 },
          { code: "B", label_de: "Lachs", label_en: "salmon", allergens: ["D"], price: 4.90 },
        ],
      },
      { code: "4", name_de: "Vegetarian Mini-Frühlingsrollen (6 Stk.)", name_en: "Vegetarian mini spring rolls (6 pcs.)", desc_de: "Vegetarische Mini-Frühlingsrollen mit Süß-Sauer-Dip", desc_en: "Vegetarian mini spring rolls with sweet and sour dipping sauce", allergens: ["A1", "F", "L"], price: 4.50 },
      { code: "5", name_de: "Vietnamesische Frühlingsrollen (2 Stk.)", name_en: "Vietnamese spring rolls (2 pcs.)", desc_de: "Hausgemachte Frühlingsrollen gefüllt mit Rindfleisch, Gemüse und Glasnudeln, dazu Fisch-Limetten-Dressing", desc_en: "Homemade spring rolls filled with beef, vegetables and glass noodles, with fish and lime dressing", allergens: ["A1", "D"], price: 5.20, image: "vorspeisen/fruehlingsrollen.webp" },
      { code: "6", name_de: "Gebackene Wantan (5 Stk.)", name_en: "Baked wontons (5 pcs.)", desc_de: "Gebackene Wantan mit hausgemachter Süß-Sauer-Sauce und Salat, gefüllt mit Hühnerfleisch und Garnelen", desc_en: "Baked wontons with homemade sweet and sour sauce and salad, filled with chicken and shrimp", allergens: ["A1", "B"], price: 5.20, image: "vorspeisen/wantan.webp" },
      { code: "7", name_de: "Wantan-Suppe", name_en: "Wonton soup", desc_de: "Aromatische Suppe mit Teigtaschen, gefüllt mit Hühnerfleisch und Garnelen", desc_en: "Aromatic soup with dumplings filled with chicken and shrimp", allergens: ["A1", "B"], price: 5.20 },
      {
        code: "8", name_de: "Gyoza (4 Stk.)", name_en: "Gyoza (4 pcs.)",
        desc_de: "Japanische Teigtaschen mit Gemüsefüllung, serviert mit Teriyaki-Soja-Sauce und Sesam",
        desc_en: "Japanese dumplings with vegetable filling, served with teriyaki soy sauce and sesame seeds",
        allergens: ["F", "K"], image: "vorspeisen/gyoza.webp",
        variations: [
          { code: "A", label_de: "Vegan", label_en: "vegan", price: 4.90 },
          { code: "B", label_de: "Hühnerfleisch", label_en: "chicken", price: 4.90 },
        ],
      },
      { code: "9", name_de: "Yakitori Hühnerfleisch (3 Stk.)", name_en: "Grilled chicken skewer (3 pcs.)", allergens: ["A1", "F"], price: 5.90 },
      {
        code: "10", name_de: "Gedämpfte Teigtaschen (4 Stk.)", name_en: "Steamed dumplings (4 pcs.)",
        desc_de: "Gedämpfte Teigtaschen mit Sesamdressing und einer Füllung nach Wahl",
        desc_en: "Steamed dumplings with sesame dressing and a filling of your choice",
        allergens: ["A1", "F", "K"],
        variations: [
          { code: "A", label_de: "Vegan", label_en: "vegan", price: 4.90 },
          { code: "B", label_de: "Garnelen", label_en: "shrimp", allergens: ["B"], price: 4.90 },
        ],
      },
      { code: "11", name_de: "Chinesische Frühlingsrollen (1 Stk.)", name_en: "Chinese spring roll (1 pc.)", desc_de: "Mit Gemüse und Hühnerfleisch", desc_en: "With vegetables and chicken", allergens: ["A", "C", "F"], price: 4.50 },
      {
        code: "12", name_de: "Mango Salat", name_en: "Mango salad",
        desc_de: "Frischer Mangosalat mit Gurke, Salat, Erdnuss-Limetten-Kräuter-Dressing und einer Zutat nach Wahl",
        desc_en: "Fresh mango salad with cucumber, lettuce, peanut-lime-herb dressing and an ingredient of your choice",
        allergens: ["D", "E"], image: "vorspeisen/mango-salat.webp",
        variations: [
          { code: "A", label_de: "Vegan", label_en: "vegan", price: 4.20 },
          { code: "B", label_de: "Huhn", label_en: "chicken", price: 4.90 },
          { code: "C", label_de: "Garnelen", label_en: "shrimp", allergens: ["B"], price: 5.20 },
        ],
      },
      { code: "13", name_de: "Chicken Sate (2 Stk.)", name_en: "Chicken sate (2 pcs.)", desc_de: "Mit Erdnuss- und Unagi-Sauce", desc_en: "With peanut and unagi sauce", allergens: ["A1", "E", "F"], price: 5.20 },
      {
        code: "14", name_de: "Wakame Salat", name_en: "Wakame salad",
        desc_de: "Eingelegter Algensalat mit Sesam und wahlweise:", desc_en: "Marinated seaweed salad with sesame and your choice of:",
        allergens: ["F", "K"],
        variations: [
          { code: "A", label_de: "Avocado", label_en: "avocado", allergens: ["H", "F"], price: 8.50 },
          { code: "B", label_de: "Flambierter Lachs", label_en: "flamed salmon", allergens: ["D", "F"], price: 9.50 },
          { code: "C", label_de: "Flambierter Thunfisch", label_en: "flamed tuna", allergens: ["D", "F"], price: 11.50 },
          { code: "D", label_de: "Flambierter Lachs und Thunfisch", label_en: "flamed salmon and tuna", allergens: ["D", "F"], price: 14.50 },
        ],
      },
      { code: "15", name_de: "Edamame", name_en: "Edamame", desc_de: "Gedämpfte japanische Bohnen mit Meersalz", desc_en: "Steamed Japanese beans with sea salt", allergens: ["F"], price: 5.90, image: "vorspeisen/edamame.webp" },
      { code: "16", name_de: "Ebi Tempura (3 Stk.)", name_en: "Ebi tempura (3 pcs.)", desc_de: "Gebackene Großgarnelen in Tempuramantel", desc_en: "Baked king prawns in tempura batter", allergens: ["A1", "B", "C"], price: 5.90, image: "vorspeisen/ebi-tempura.webp" },
      { code: "17", name_de: "Crispy Chicken Sticks (3 Stk.)", name_en: "Crispy chicken sticks (3 pcs.)", desc_de: "Knusprige Hühnerspieße", desc_en: "Crispy chicken skewers", allergens: ["A1", "C"], price: 4.50 },
      { code: "18", name_de: "Hühnersuppe mit Glasnudeln", name_en: "Chicken soup with glass noodles", allergens: ["A1", "B"], price: 5.20 },
      { code: "19", name_de: "Peking Suppe", name_en: "Peking soup", allergens: ["A", "F", "J"], price: 4.20 },
    ],
  },

  // ================= HAUPTSPEISEN =================
  {
    id: "hauptspeisen",
    title_de: "Hauptspeisen",
    title_en: "Main dishes",
    items: [
      { code: "20", name_de: "Grilled Fish Rice Noodles", name_en: "Grilled fish rice noodles", desc_de: "Reisnudeln serviert mit gegrilltem Lachsfilet, frischen Kräutern, Erdnüssen, Röstzwiebeln und traditioneller vietnamesischer Sauce", desc_en: "Rice noodles served with grilled salmon fillet, fresh herbs, peanuts, fried onions and traditional Vietnamese sauce", allergens: ["A1", "D", "E"], price: 15.90, image: "hauptspeisen/grilled-fish-rice-noodles.webp" },
      {
        code: "22", name_de: "Reisnudeln nach Nam Bo Art", name_en: "Rice noodles Nam Bo style",
        desc_de: "Reisnudeln mit gebratenem Rindfleisch, Erdnüssen, Röstzwiebeln, Koriander, Minze, Salat, Limettendressing und einer Zutat nach Wahl",
        desc_en: "Rice noodles with fried beef, peanuts, fried onions, coriander, mint, lettuce, lime dressing and an ingredient of your choice",
        allergens: ["A1", "D", "E"],
        variations: [
          { code: "A", label_de: "Tofu", label_en: "tofu", allergens: ["F"], price: 11.90 },
          { code: "B", label_de: "Hühnerfleisch", label_en: "chicken", price: 13.90 },
          { code: "C", label_de: "Rindfleisch", label_en: "beef", price: 14.90 },
        ],
      },
      {
        code: "23", name_de: "Gebratene Udonnudeln", name_en: "Fried udon noodles",
        desc_de: "Gebratene Udonnudeln mit Gemüse, Ei, Koriander, Salat, Röstzwiebeln und einer Zutat nach Wahl",
        desc_en: "Fried udon noodles with vegetables, egg, coriander, salad, roasted onions and an ingredient of your choice",
        allergens: ["A1", "C", "F", "K"], image: "hauptspeisen/gebratene-udonnudeln.webp",
        variations: SAUCE_CHOICES_WITH_SALMON,
      },
      { code: "24", name_de: "Mango-Curry-Sauce", name_en: "Mango curry sauce", desc_de: "Mit gebratenem Gemüse, Kokosmilch, Milch, serviert mit Reis und einer Zutat nach Wahl", desc_en: "With fried vegetables, coconut milk, milk, served with rice and an ingredient of your choice", allergens: ["G"], image: "hauptspeisen/mango-curry.webp", variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "25", name_de: "Gelbe Curry-Sauce", name_en: "Yellow curry sauce", desc_de: "Mit gebratenem Gemüse, Kokosmilch, Milch, serviert mit Reis und einer Zutat nach Wahl", desc_en: "With fried vegetables, coconut milk, milk, served with rice and an ingredient of your choice", allergens: ["G"], variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "26", name_de: "Rote Curry-Sauce", name_en: "Red curry sauce", desc_de: "Mit gebratenem Gemüse, Kokosmilch, Milch, serviert mit Reis und einer Zutat nach Wahl", desc_en: "With fried vegetables, coconut milk, milk, served with rice and an ingredient of your choice", allergens: ["G"], image: "hauptspeisen/rote-curry-suppe.webp", variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "27", name_de: "Erdnuss-Sauce", name_en: "Peanut sauce", desc_de: "Mit verschiedenem Gemüse, Kokosmilch, Milch, serviert mit Reis und einer Zutat nach Wahl", desc_en: "With mixed vegetables, coconut milk, milk, served with rice and an ingredient of your choice", allergens: ["G", "E"], variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "28", name_de: "Süß-Sauer-Sauce", name_en: "Sweet and sour sauce", desc_de: "Mit verschiedenem Gemüse, Tomaten, Ananas, Kartoffelmehl, serviert mit Reis und einer Zutat nach Wahl", desc_en: "With mixed vegetables, tomatoes, pineapple, potato starch, served with rice and an ingredient of your choice", allergens: ["L"], image: "hauptspeisen/suess-sauer-sauce.webp", variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "29", name_de: "Knoblauch-Scharf-Sauce (scharf)", name_en: "Garlic-spicy sauce (spicy)", desc_de: "Mit gebratenem Gemüse in Knoblauch-Scharf-Soße, serviert mit Reis und einer Zutat nach Wahl", desc_en: "With fried vegetables in spicy garlic sauce, served with rice and an ingredient of your choice", allergens: ["A1", "F"], variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "30", name_de: "Hoi Sin-Sauce", name_en: "Hoi sin sauce", desc_de: "Mit verschiedenem Gemüse, Zwiebeln, serviert mit Reis und einer Zutat nach Wahl", desc_en: "With various vegetables, onions, served with rice and an ingredient of your choice", allergens: ["A1", "F", "K"], image: "hauptspeisen/hoi-sin-sauce.webp", variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "31", name_de: "Teriyaki Sauce", name_en: "Teriyaki sauce", desc_de: "Mit Gemüse, Pilzen, Ingwer, Knoblauch, Kräutersalat serviert mit Reis und einer Zutat nach Wahl", desc_en: "Served with vegetables, mushrooms, ginger, garlic, herb salad, served with rice and an ingredient of your choice", allergens: ["A1", "F"], variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "32", name_de: "Gebraten Reis", name_en: "Fried egg rice", desc_de: "Gebratener Eierreis mit Gemüse und einer Zutat nach Wahl", desc_en: "Fried egg rice with vegetables and an ingredient of your choice", allergens: ["A1", "C", "F"], image: "hauptspeisen/gebraten-reis.webp", variations: SAUCE_CHOICES_NO_SALMON },
      { code: "33", name_de: "Gebratene Glasnudeln", name_en: "Fried glass noodles", desc_de: "Gebratene Glasnudeln mit verschiedenem Gemüse, Ei, Sojasauce, Koriander und einer Zutat nach Wahl", desc_en: "Fried glass noodles with various vegetables, egg, soy sauce, coriander and an ingredient of your choice", allergens: ["A1", "C", "F"], variations: SAUCE_CHOICES_NO_SALMON },
      { code: "34", name_de: "Gebratene Reisbandnudeln", name_en: "Fried rice noodles", desc_de: "Gebratene Reisbandnudeln mit verschiedenem Gemüse, Ei, Sojasauce, Koriander und einer Zutat nach Wahl", desc_en: "Fried rice noodles with various vegetables, egg, soy sauce, coriander and an ingredient of your choice", allergens: ["A1", "C", "F"], variations: SAUCE_CHOICES_NO_SALMON },
      { code: "35", name_de: "Pikanter-Sauce", name_en: "Spicy sauce", desc_de: "Mit Gemüse und Reis als Beilage", desc_en: "With vegetables and rice as a side dish", variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "36", name_de: "Frühlingsrollen-Nudeln", name_en: "Spring roll noodles", desc_de: "Lauwarme Reisnudeln mit hausgemachten Frühlingsrollen, Zwiebeln, serviert mit Sojasprossen, Salat und hausgemachter Sauce", desc_en: "Lukewarm rice noodles with homemade spring rolls, onions, served with bean sprouts, salad and homemade sauce", allergens: ["A1", "D", "E"], price: 15.50, image: "hauptspeisen/fruehlingsrollen-nudeln.webp" },
      { code: "37", name_de: "Ente Kross", name_en: "Crispy duck", desc_de: "Knusprige Ente mit Sesamreis mit Gemüse in dunkler Sauce gebraten. Mit Gemüse und Reis als Beilage.", desc_en: "Crispy duck with sesame rice with vegetables stir-fried in a dark sauce. With vegetables and rice on the side.", allergens: ["A", "F"], image: "hauptspeisen/ente-kross.webp", variations: SAUCE_CHOICES_WITH_SALMON },
      { code: "42", name_de: "Gebratene Asia-Nudeln", name_en: "Fried Asian noodles", desc_de: "Gebratene Asia-Nudeln mit Gemüse, Sesam, dazu:", desc_en: "Fried Asian noodles with vegetables, sesame, with:", allergens: ["K"], image: "hauptspeisen/gebratene-asia-nudeln.webp", variations: SAUCE_CHOICES_NO_SALMON },
    ],
  },

  // ================= NACHTISCH =================
  {
    id: "nachtisch",
    title_de: "Nachtisch",
    title_en: "Dessert",
    items: [
      { code: "40", name_de: "Japanese Mochi (3 Stk.)", name_en: "Japanese mochi (3 pcs.)", desc_de: "Klebreiskuchen nach japanischer Art", desc_en: "Japanese-style sticky rice cake", price: 5.90, image: "nachtisch/mochi.webp" },
      { code: "41", name_de: "Banh Vung (5 Stk.)", name_en: "Banh vung (5 pcs.)", desc_de: "Sesambällchen aus Klebreis, gefüllt mit grüner Bohnenpaste und in Sesam gewälzt", desc_en: "Sesame balls made from sticky rice, filled with green bean paste and rolled in sesame seeds", allergens: ["K"], price: 5.90 },
      { code: "42d", name_de: "Chuoi Chien (5 Stk.)", name_en: "Chuoi chien (5 pcs.)", desc_de: "Gebackene Banane in hausgemachter Panade mit Honig und Sesam", desc_en: "Baked banana in homemade breading with honey and sesame seeds", allergens: ["A1", "K"], price: 4.50, image: "nachtisch/chuoi-chien.webp" },
      { code: "43", name_de: "Lili-Eis (5 Stk.)", name_en: "Lili ice cream (5 pcs.)", desc_de: "Vanilleeis mit Mangosauce", desc_en: "Vanilla ice cream with mango sauce", allergens: ["G", "5"], price: 5.90, image: "nachtisch/lili-eis.webp" },
    ],
  },

  // ================= VOM CHEFKOCH EMPFOHLEN =================
  {
    id: "chefkoch",
    title_de: "Vom Chefkoch Empfohlen",
    title_en: "Chef's recommendation",
    note_de: "Serviert mit heißen Platten und Reis als Beilage",
    note_en: "Served on hot plates with rice on the side",
    items: [
      { code: "T1", name_de: "Acht Schätze", name_en: "Eight treasures", desc_de: "Mit verschiedenen Fleischsorten, Shrimps, Tintenfisch, frischem Gemüse und Cashewnüssen", desc_en: "With assorted meats, shrimp, squid, fresh vegetables, and cashew nuts", allergens: ["B", "F", "H", "N"], price: 18.50, image: "chefkoch/acht-schaetze.webp" },
      { code: "T2", name_de: "Knusprige Ente „Kumpo“", name_en: "Crispy duck \"Kumpo\"", desc_de: "Mit verschiedenen Fleischsorten, Cashewnüssen und Hoisin Sauce", desc_en: "With assorted meats, cashew nuts, and hoisin sauce", allergens: ["F", "H"], price: 18.50 },
      { code: "T3", name_de: "Tintenfisch", name_en: "Squid", desc_de: "Mit Stangensellerie, Paprika, Schwarzen Bohnen und pikanter Sauce", desc_en: "With celery, bell peppers, black beans, and spicy sauce", allergens: ["F", "I"], price: 18.50 },
      { code: "T4", name_de: "Tintenfisch mit Garnelen", name_en: "Squid with shrimp", desc_de: "Mit Garnelen, Stangensellerie, Paprika, schwarze Bohnen und pikanter Sauce", desc_en: "With shrimp, celery, bell peppers, black beans, and spicy sauce", allergens: ["B", "F", "I"], price: 18.50 },
    ],
  },

  // ================= KIDS MENÜ =================
  {
    id: "kids",
    title_de: "Kids Menü",
    title_en: "Kids menu",
    items: [
      { code: "K1", name_de: "Pommes", name_en: "French fries", allergens: ["F"], price: 3.50 },
      { code: "K2", name_de: "Schnitzel mit Pommes", name_en: "Schnitzel with French fries", allergens: ["A", "F"], price: 7.90, image: "kids/schnitzel-pommes.webp" },
      { code: "K3", name_de: "Pommes mit Chicken", name_en: "French fries with chicken", allergens: ["A", "C", "F"], price: 7.90 },
    ],
  },

  // ================= MAKI =================
  {
    id: "maki",
    title_de: "Maki",
    title_en: "Maki",
    note_de: "8 Stk. pro Portion", note_en: "8 pcs. per portion",
    items: [
      { code: "44", name_de: "Sake Maki", name_en: "Salmon", allergens: ["D"], price: 4.90, image: "maki/sake-maki.webp" },
      { code: "45", name_de: "Sake Avo Maki", name_en: "Salmon, avocado", allergens: ["D"], price: 4.90 },
      { code: "46", name_de: "Sake Kappa Maki", name_en: "Salmon, cucumber", allergens: ["D"], price: 4.90 },
      { code: "47", name_de: "Sake Negi Maki", name_en: "Salmon, cucumber", allergens: ["D"], price: 4.90 },
      { code: "48", name_de: "Tekka Maki", name_en: "Tuna", allergens: ["D"], price: 5.20, image: "maki/tekka-maki.webp" },
      { code: "49", name_de: "Tekka Negi Maki", name_en: "Tuna, spring onions", allergens: ["D"], price: 5.20 },
      { code: "50", name_de: "Tekka Spicy Maki", name_en: "Tuna, spring onions, chili", allergens: ["D"], price: 5.20 },
      { code: "51", name_de: "Ebi Maki", name_en: "Shrimp", allergens: ["B"], price: 4.90 },
      { code: "52", name_de: "Ebi Avocado Maki", name_en: "Shrimp, avocado", allergens: ["B"], price: 4.90 },
      { code: "53", name_de: "Ebi Mayo Maki", name_en: "Shrimp, spring onions, mayonnaise", allergens: ["B", "C", "J"], price: 4.90 },
      { code: "54", name_de: "Butterfish Maki", name_en: "Butterfish", allergens: ["D"], price: 4.90 },
      { code: "55", name_de: "Spicy Butterfish Maki", name_en: "Butterfish, spicy sauce", allergens: ["D"], price: 4.90 },
      { code: "57", name_de: "Unagi Kappa Maki", name_en: "Freshwater eel, cucumber", allergens: ["A1", "D", "F"], price: 5.20 },
      { code: "58", name_de: "Tori Maki", name_en: "Chicken", price: 4.50 },
      { code: "59", name_de: "Yakitori Maki", name_en: "Grilled chicken skewer", allergens: ["A1", "F"], price: 4.50 },
      { code: "60", name_de: "California Maki", name_en: "Imitation crab meat, avocado", allergens: ["A1", "B", "C", "D", "F"], price: 4.20 },
      { code: "61", name_de: "Kani Maki", name_en: "Real crab meat, mayonnaise, avocado", allergens: ["A1", "B", "C", "D", "F"], price: 4.20 },
      { code: "63", name_de: "Kappa Cheese Maki", name_en: "Cucumber, cream cheese, sesame", allergens: ["G", "K"], price: 4.20 },
      { code: "64", name_de: "Avocado Maki", name_en: "Avocado, sesame", allergens: ["K"], price: 4.20, image: "maki/vegetarisches-maki.webp" },
      { code: "66", name_de: "Spargel Maki", name_en: "Green asparagus, sesame", allergens: ["K"], price: 4.20 },
    ],
  },

  // ================= NIGIRI =================
  {
    id: "nigiri",
    title_de: "Nigiri",
    title_en: "Nigiri",
    note_de: "2 Stk. pro Portion", note_en: "2 pcs. per portion",
    items: [
      { code: "67", name_de: "Sake Nigiri", name_en: "Salmon", allergens: ["D"], price: 5.00, image: "nigiri/sake-nigiri.webp" },
      { code: "68", name_de: "Maguro Nigiri", name_en: "Tuna", allergens: ["D"], price: 5.50 },
      { code: "69", name_de: "Ebi Nigiri", name_en: "Shrimp", allergens: ["B"], price: 5.50 },
      { code: "70", name_de: "Butterfish Nigiri", name_en: "Butterfish", allergens: ["D"], price: 5.00 },
      { code: "71", name_de: "Unagi Nigiri", name_en: "Freshwater eel", allergens: ["A1", "D", "F"], price: 5.50, image: "nigiri/unagi-nigiri.webp" },
      { code: "72", name_de: "Sake Avo Nigiri", name_en: "Avocado, spring onions, seared salmon", desc_de: "Avocado, Lauchzwiebeln, flambierter Lachs, Spezial-Soße", allergens: ["D"], price: 7.00 },
      { code: "74", name_de: "Kani Spez Nigiri", name_en: "Real crab meat, mayonnaise, green onions", allergens: ["B", "C", "J"], price: 5.00 },
    ],
  },

  // ================= INSIDE OUT =================
  {
    id: "inside-out",
    title_de: "Inside Out",
    title_en: "Inside out",
    note_de: "8 Stk. pro Portion", note_en: "8 pcs. per portion",
    items: [
      { code: "78", name_de: "Sake I.O.", name_en: "Salmon, avocado, cream cheese", allergens: ["D", "G"], price: 11.90, image: "inside-out/lachs-avocado-io.webp" },
      { code: "79", name_de: "Sake Spicy I.O.", name_en: "Salmon, cucumber, spring onions, chili", allergens: ["D"], price: 11.90 },
      { code: "80", name_de: "Maguro I.O.", name_en: "Tuna, avocado, cream cheese", allergens: ["D", "G"], price: 11.90 },
      { code: "81", name_de: "Maguro Spicy I.O.", name_en: "Tuna, cucumber, spring onions, chili", allergens: ["D"], price: 11.90 },
      { code: "82", name_de: "Yaki Chicken I.O.", name_en: "Grilled chicken, cucumber, spring onions", price: 11.90 },
      { code: "83", name_de: "Chicken Tempura I.O.", name_en: "Chicken tempura, cucumber, cream cheese", allergens: ["A1", "G"], price: 11.90 },
      { code: "84", name_de: "Ebi Negi I.O.", name_en: "Shrimp, spring onions, mayonnaise, cucumber", allergens: ["B", "C", "J"], price: 11.90 },
      { code: "85", name_de: "Ebi Avocado I.O.", name_en: "Shrimp, avocado, cream cheese", allergens: ["B", "G"], price: 11.90 },
      { code: "86", name_de: "California I.O.", name_en: "Real crab meat, avocado, mayonnaise", allergens: ["A1", "B", "C", "D", "F"], price: 11.90, image: "inside-out/california-io.webp" },
      { code: "86b", name_de: "California Spez I.O.", name_en: "Real crab meat, avocado, mayonnaise, tobiko and sesame", allergens: ["A1", "B", "C", "D", "F"], price: 11.90 },
      { code: "io-unagi", name_de: "Unagi I.O.", name_en: "River eel, cucumber, avocado, tobiko and sesame", price: 12.90 },
      { code: "io-butterfish", name_de: "Butterfisch Spicy I.O.", name_en: "Butterfish, chili, cucumber, chives, tobiko and sesame", price: 12.90 },
      { code: "io-veggie", name_de: "Vegetarische I.O.", name_en: "Various vegetables, avocado, cucumber, asparagus, mango, sesame outside", price: null, priceNote_de: "Preis auf Anfrage", priceNote_en: "price on request" },
    ],
  },

  // ================= REIS-BOWL =================
  {
    id: "reis-bowl",
    title_de: "Reis-Bowl",
    title_en: "Rice bowl",
    items: [
      {
        code: "rb", name_de: "Reis-Bowl", name_en: "Rice bowl",
        desc_de: "Gemischte Gemüse-Bowl mit Reis, Sojabohnen und Cashew-Kernen, serviert mit Cocktail-Teriyaki-Dressing",
        desc_en: "Mixed vegetable bowl with rice, soybeans, and cashew nuts, served with cocktail teriyaki dressing",
        allergens: ["A", "C", "F", "G", "H", "J"], image: "reis-bowl/reis-bowl.webp",
        variations: [
          { code: "A", label_de: "Tofu", label_en: "tofu", price: 12.90 },
          { code: "B", label_de: "Hühnerfleisch", label_en: "chicken", price: 13.90 },
          { code: "C", label_de: "Lachs", label_en: "salmon", price: 15.90 },
          { code: "D", label_de: "Thunfisch", label_en: "tuna", price: 15.90 },
        ],
      },
    ],
  },

  // ================= TEMPURA ROLL =================
  {
    id: "tempura-roll",
    title_de: "Tempura Roll",
    title_en: "Tempura roll",
    note_de: "8 Stk. pro Portion", note_en: "8 pcs. per portion",
    items: [
      { code: "87", name_de: "Fuji Mini Roll", name_en: "Shrimp, cucumber, avocado, spring onions, cream cheese", allergens: ["B", "G"], price: 9.90, image: "tempura-roll/fuji-mini-roll.webp" },
      { code: "88", name_de: "Chicago Mini Roll", name_en: "Surimi, avocado, cucumber, fish roe, mayonnaise", allergens: ["A1", "B", "C", "D", "F", "J"], price: 9.90 },
      { code: "89", name_de: "Orchidee Mini Roll", name_en: "Real crab meat, chili, spring onions, mayonnaise, cucumber", allergens: ["B", "C", "J"], price: 9.90 },
      { code: "90", name_de: "Asia Mini Roll", name_en: "Butterfish, chili, spring onions, cucumber", allergens: ["D"], price: 9.90 },
      { code: "91", name_de: "Chicken Spez Mini Roll", name_en: "Grilled chicken, cucumber", allergens: ["A1", "F"], price: 9.90 },
      { code: "92", name_de: "Bao Boi Mini Roll", name_en: "Chicken tempura, cucumber, spring onions, cream cheese", allergens: ["A1", "G"], price: 9.90 },
      { code: "93", name_de: "Fujiyama Mini Roll", name_en: "Avocado, cucumber, mango, asparagus, cream cheese", allergens: ["G"], price: 9.90 },
      { code: "94", name_de: "Toronto Roll Mini", name_en: "Breaded roll with salmon, avocado, cucumber, green onions, cream cheese", allergens: ["A1", "D", "G"], price: 9.90 },
    ],
  },

  // ================= TEMPURA MINI ROLL =================
  {
    id: "tempura-mini-roll",
    title_de: "Tempura Mini Roll",
    title_en: "Tempura mini roll",
    note_de: "8 Stk. pro Portion", note_en: "8 pcs. per portion",
    items: [
      { code: "181", name_de: "Lachs – Avocado", name_en: "Salmon – avocado", price: 7.50, image: "tempura-mini-roll/tempura-mini-roll.webp" },
      { code: "182", name_de: "Gebackenes Lachs, Mayonnaise", name_en: "Baked salmon, mayonnaise", price: 7.00 },
      { code: "183", name_de: "Tuna – Gurke", name_en: "Tuna – cucumber", price: 7.50 },
      { code: "184", name_de: "Ebi – Avocado", name_en: "Shrimp – avocado", price: 7.50 },
      { code: "185", name_de: "Chicken", name_en: "Chicken", price: 7.20 },
      { code: "186", name_de: "Echtes Krebsfleisch, Mayonnaise, Avocado", name_en: "Real crab meat, mayonnaise, avocado", price: 7.20 },
      { code: "187", name_de: "Avocado", name_en: "Avocado", price: 6.90 },
      { code: "188", name_de: "Paprika", name_en: "Bell pepper", price: 6.90 },
      { code: "189", name_de: "Kappa", name_en: "Cucumber", price: 6.90 },
      { code: "190", name_de: "Mango", name_en: "Mango", price: 6.90 },
    ],
  },

  // ================= LILI SPEZIALITÄTEN =================
  {
    id: "lili-spezialitaeten",
    title_de: "Lili Spezialitäten",
    title_en: "Lili specialties",
    note_de: "Preis für 4 Stk. / 8 Stk.", note_en: "Price for 4 pcs. / 8 pcs.",
    items: [
      { code: "95", name_de: "Lili Roll", name_en: "Lili roll", desc_de: "Rucola, Frischkäse, Paprika, Mayonnaise, Schnittlauch; on top: flambierter Lachs, Spezial-Sauce", desc_en: "Arugula, cream cheese, bell peppers, mayonnaise, chives; on top: flambéed salmon, special sauce", allergens: ["C", "D", "G", "F", "J"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "96", name_de: "Salmon Roll", name_en: "Salmon roll", desc_de: "Lachs, Avocado, Gurke; on top: Mayonnaise, Bio-Lachs", desc_en: "Salmon, avocado, cucumber; on top: mayonnaise, organic salmon", allergens: ["C", "D", "J"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "97", name_de: "Hiroshima Roll", name_en: "Hiroshima roll", desc_de: "Paprika, Rucola, Frischkäse, Mayonnaise, Schnittlauch; on top: flambierter Thunfisch, Spezial-Sauce", desc_en: "Bell pepper, arugula, cream cheese, mayonnaise, chives; on top: flambéed tuna, special sauce", allergens: ["C", "D", "G", "F", "J"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "98", name_de: "Tuna Roll", name_en: "Tuna roll", desc_de: "Thunfisch, Gurke; on top: Bio-Thunfisch", desc_en: "Tuna, cucumber; on top: organic tuna", allergens: ["D"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "99", name_de: "Chiba Roll", name_en: "Chiba roll", desc_de: "Ebi-Tempura, Rucola, Mayonnaise, Schnittlauch; on top: flambierter Lachs, Spezial-Sauce", desc_en: "Shrimp tempura, arugula, mayonnaise, chives; on top: flambéed salmon, special sauce", allergens: ["A1", "C", "D", "F", "J"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "100", name_de: "Fuji Roll", name_en: "Fuji roll", desc_de: "Gekochte Garnelen, Rucola, Frischkäse; on top: Lachs, Spezial-Sauce", desc_en: "Boiled shrimp, arugula, cream cheese; on top: salmon, special sauce", allergens: ["B", "D", "F", "G"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "101", name_de: "Yamato Roll", name_en: "Yamato roll", desc_de: "Gekochte Garnelen, Gurke, Mayonnaise, Schnittlauch; on top: flambierter Thunfisch, Lachs, Butterfisch, Spezial-Sauce", desc_en: "Boiled shrimp, cucumber, mayonnaise, chives; on top: flambéed tuna, salmon, butterfish, special sauce", allergens: ["B", "C", "D", "F", "J"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "102", name_de: "Yokohama Roll", name_en: "Yokohama roll", desc_de: "Butterfisch, Schnittlauch, Paprika; on top: Lachs, Chili, Spezial-Sauce", desc_en: "Butterfish, chives, bell pepper; on top: salmon, chili, special sauce", allergens: ["D", "F"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "103", name_de: "Rainbow Roll", name_en: "Rainbow roll", desc_de: "Echtes Krebsfleisch, Chili, Schnittlauch, Mayonnaise; on top: Lachs, Butterfisch, Aal, Thunfisch, Spezial-Sauce", desc_en: "Real crab meat, chili, chives, mayonnaise; on top: salmon, butterfish, eel, tuna, special sauce", allergens: ["B", "C", "D", "F", "J"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "104", name_de: "Dragon Roll", name_en: "Dragon roll", desc_de: "Ebi-Tempura, Gurke, Fischrogen; on top: Aal (Unagi), Fischrogen", desc_en: "Shrimp tempura, cucumber, fish roe; on top: eel (unagi), fish roe", allergens: ["A1", "D", "F"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "105", name_de: "Suzuki Roll", name_en: "Suzuki roll", desc_de: "Avocado, Frischkäse; on top: Aal (Unagi), Spezial-Sauce", desc_en: "Avocado, cream cheese; on top: eel (unagi), special sauce", allergens: ["A1", "D", "F", "G"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "106", name_de: "Kawasaki Roll", name_en: "Kawasaki roll", desc_de: "Tempura, Lauchzwiebeln, Paprika; on top: Avocado, Sauce", desc_en: "Tempura, spring onion, bell pepper; on top: avocado, sauce", allergens: ["A1"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
      { code: "107", name_de: "Okasaki Roll", name_en: "Okasaki roll", desc_de: "Lachs-Tempura, Mayonnaise; on top: Gurke, Sauce", desc_en: "Salmon tempura, mayonnaise; on top: cucumber, sauce", allergens: ["A1", "C", "J"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
    ],
  },

  // ================= SASHIMI =================
  {
    id: "sashimi",
    title_de: "Sashimi",
    title_en: "Sashimi",
    note_de: "Preis für 4 Stk. / 8 Stk.", note_en: "Price for 4 pcs. / 8 pcs.",
    items: [
      { code: "108", name_de: "Thunfisch", name_en: "Tuna", allergens: ["D"], image: "sashimi/sashimi-platte.webp", variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 7.00 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 14.00 }] },
      { code: "109", name_de: "Lachs", name_en: "Salmon", allergens: ["D"], variations: [{ code: "4", label_de: "4 Stk.", label_en: "4 pcs.", price: 6.90 }, { code: "8", label_de: "8 Stk.", label_en: "8 pcs.", price: 13.90 }] },
    ],
  },

  // ================= LILI MENÜ =================
  {
    id: "lili-menue",
    title_de: "Lili Menü",
    title_en: "Lili menu sets",
    items: [
      { code: "111", name_de: "Veggie Set", name_en: "Veggie set", desc_de: "6 Stk. Kappa Maki, 6 Stk. Avocado Maki, 8 Stk. Veggie I.O.", allergens: ["G"], price: 18.00, image: "lili-menue/lili-menue-platte.webp" },
      { code: "112", name_de: "Maki Set", name_en: "Maki set", desc_de: "6 Stk. Kappa Maki, 6 Stk. Tuna Maki, 6 Stk. Sake Maki", allergens: ["D"], price: 14.90 },
      { code: "113", name_de: "Sake Classics", name_en: "Sake classics", desc_de: "2 Stk. Sake Nigiri, 6 Stk. Sake Maki, 8 Stk. Sake I.O., 3 Stk. Sake Sashimi", allergens: ["D", "G"], price: 21.90 },
      { code: "114", name_de: "Tuna Classics", name_en: "Tuna classics", desc_de: "2 Stk. Maguro Nigiri, 6 Stk. Tekka Maki, 8 Stk. Maguro I.O., 3 Stk. Maguro Sashimi", allergens: ["D", "G"], price: 22.90 },
      { code: "115", name_de: "Nigiri Set", name_en: "Nigiri set", desc_de: "7 Stk. verschiedene Nigiri", allergens: ["B", "C", "D", "F"], price: 15.90 },
      { code: "116", name_de: "Mix Set (1 Person)", name_en: "Mix set (1 person)", desc_de: "4 Stk. Sashimi (2 Lachs, 1 Tuna, 1 Thunfisch), 6 Stk. California Maki, 2 Stk. Ebi Nigiri, 6 Stk. Chicken Spez Mini Roll", allergens: ["A1", "B", "C", "D", "F"], price: 27.90 },
      { code: "117", name_de: "Mix Set (2 Personen)", name_en: "Mix set (2 people)", desc_de: "6 Stk. Sashimi (2 Lachs, 2 Butterfisch, 2 Ebi), 5 Stk. Nigiri (Lachs, Thunfisch, Butterfisch, Aal, Surimi), 8 Stk. California I.O., 8 Stk. Yaki Chicken I.O., 6 Stk. Toronto Mini Roll", allergens: ["A1", "B", "C", "D", "F"], price: 50.00 },
    ],
  },

  // ================= SOFT DRINKS =================
  {
    id: "softdrinks",
    title_de: "Soft Drinks",
    title_en: "Soft drinks",
    items: [
      { code: "120", name_de: "Coca Cola", name_en: "Coca Cola", allergens: ["1", "4", "5"], variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 2.70 }, { code: "0.33l", label_de: "0,33 l", label_en: "0.33 l", price: 3.50 }] },
      { code: "121", name_de: "Cola Zero", name_en: "Cola Zero", allergens: ["1", "3", "5", "11"], variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 2.70 }, { code: "0.33l", label_de: "0,33 l", label_en: "0.33 l", price: 3.50 }] },
      { code: "122", name_de: "Cola Light", name_en: "Cola Light", allergens: ["1", "3", "4", "5"], variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 2.70 }, { code: "0.33l", label_de: "0,33 l", label_en: "0.33 l", price: 3.50 }] },
      { code: "123", name_de: "Sprite", name_en: "Sprite", allergens: ["5"], variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 2.70 }, { code: "0.33l", label_de: "0,33 l", label_en: "0.33 l", price: 3.50 }] },
      { code: "124", name_de: "Fanta", name_en: "Fanta", allergens: ["1", "5", "6"], variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 2.70 }, { code: "0.33l", label_de: "0,33 l", label_en: "0.33 l", price: 3.50 }] },
      { code: "125", name_de: "Spezi", name_en: "Spezi", allergens: ["1", "4", "5", "6"], variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 2.70 }, { code: "0.33l", label_de: "0,33 l", label_en: "0.33 l", price: 3.50 }] },
      { code: "126", name_de: "Mineralwasser", name_en: "Sparkling mineral water", variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 2.50 }, { code: "0.33l", label_de: "0,33 l", label_en: "0.33 l", price: 3.50 }, { code: "0.5l", label_de: "0,5 l", label_en: "0.5 l", price: 5.00 }] },
      { code: "127", name_de: "Stilles Wasser", name_en: "Still mineral water", variations: [{ code: "0.33l", label_de: "0,33 l", label_en: "0.33 l", price: 3.50 }, { code: "0.5l", label_de: "0,5 l", label_en: "0.5 l", price: 5.00 }] },
      { code: "johannis", name_de: "Johannisbeere", name_en: "Blackcurrant", variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 2.80 }, { code: "0.33l", label_de: "0,33 l", label_en: "0.33 l", price: 3.50 }] },
    ],
  },

  // ================= LIMONADE =================
  {
    id: "limonade",
    title_de: "Limonade",
    title_en: "Lemonade",
    items: [
      { code: "128", name_de: "Vietnamesischer Eistee", name_en: "Vietnamese iced tea", desc_de: "Vietnamesischer Eistee, hausgemachte Limonade aus frischen Limetten, Minze, Rohrzucker, Soda", desc_en: "Vietnamese iced tea, homemade lemonade made from fresh limes, mint, cane sugar, soda", allergens: ["4"], price: 4.90, image: "softdrinks/limonade.webp" },
      { code: "129", name_de: "Guaven-Limetten-Limonade", name_en: "Guava-lime lemonade", desc_de: "Hausgemachte Limonade aus frischem Limetten- und Guavensaft, Minze, Soda", desc_en: "Homemade lemonade made from fresh lime and guava juice, mint, soda", allergens: ["1", "5", "6"], price: 4.90 },
      { code: "130", name_de: "Lychee Lime Lemonade", name_en: "Lychee lime lemonade", desc_de: "Erfrischende Limonade aus Limetten- und Lycheesaft, Minze, Soda", desc_en: "Refreshing lemonade from lime and lychee juice, mint, soda", allergens: ["5", "6", "7"], price: 4.90 },
      { code: "131", name_de: "Asian Cup", name_en: "Asian cup", desc_de: "Limetten, Minze, Orangensaft, Ananassaft", desc_en: "Limes, mint, orange juice, pineapple juice", allergens: ["5", "6"], price: 4.90 },
      { code: "132", name_de: "Mint Lime Refresher", name_en: "Mint lime refresher", desc_de: "Limettensaft, Minze, Soda, Ginger Ale, Apfelsaft", desc_en: "Lime juice, mint, soda, ginger ale, apple juice", allergens: ["1", "5"], price: 4.90 },
    ],
  },

  // ================= SPECIAL HOMEMADE DRINK =================
  {
    id: "special-drinks",
    title_de: "Special Homemade Drink",
    title_en: "Special homemade drink",
    items: [
      { code: "133", name_de: "Golden Dragon", name_en: "Golden dragon", desc_de: "Beeren-Mix, Erdbeerpüree, Orangensaft, Crushed Ice", desc_en: "Berry mix, strawberry puree, orange juice, crushed ice", price: 5.90, image: "drinks/special-homemade-drink.webp" },
      { code: "134", name_de: "Virgin Princess", name_en: "Virgin princess", desc_de: "Lycheesaft, Maracuja, Lychee, Minze, Crushed Ice", desc_en: "Lychee juice, passion fruit, lychee, mint, crushed ice", allergens: ["5", "6", "7"], price: 5.90 },
      { code: "135", name_de: "Sunny", name_en: "Sunny", desc_de: "Maracuja, Orange, Mango, Minze, Crushed Ice", desc_en: "Passion fruit, orange, mango, mint, crushed ice", allergens: ["5", "7"], price: 5.90 },
      { code: "136", name_de: "Apple Ice Tea", name_en: "Apple ice tea", desc_de: "Grüntee, Apfel, Ingwer, Minze, Crushed Ice", desc_en: "Green tea, apple, ginger, mint, crushed ice", allergens: ["4"], price: 5.90 },
    ],
  },

  // ================= HOMEMADE COCKTAILS =================
  {
    id: "cocktails",
    title_de: "Homemade Cocktails",
    title_en: "Homemade cocktails",
    note_de: "Enthält Alkohol", note_en: "Contains alcohol",
    items: [
      { code: "137", name_de: "Vietnamesischer Mojito", name_en: "Vietnamese mojito", desc_de: "Wodka, Limette, Minze, Tonic Water, Zucker", desc_en: "Vodka, lime, mint, tonic water, sugar", allergens: ["5", "7", "8"], price: 5.90 },
      { code: "142", name_de: "Aperol Spritz", name_en: "Aperol spritz", desc_de: "Aperol, Prosecco, frische Orange, Soda, Eiswürfel", desc_en: "Aperol, prosecco, fresh orange, soda, ice cubes", allergens: ["1", "8"], price: 5.90 },
      { code: "143", name_de: "Cuba Libre", name_en: "Cuba libre", desc_de: "Havana Club, Limette, Coca-Cola", desc_en: "Havana Club, lime, Coca-Cola", allergens: ["1", "4", "5"], price: 5.90 },
      { code: "145", name_de: "Swimming Pool", name_en: "Swimming pool", desc_de: "Havana Club, Wodka, Kokossirup, Ananassaft, Blue Curaçao", desc_en: "Havana Club, vodka, coconut syrup, pineapple juice, Blue Curaçao", allergens: ["5", "6", "7"], price: 5.90, image: "drinks/homemade-cocktails.webp" },
    ],
  },

  // ================= BIERE =================
  {
    id: "biere",
    title_de: "Biere",
    title_en: "Beer",
    items: [
      { code: "146", name_de: "Helles", name_en: "Helles", price: 4.90, unit_de: "0,5 l", unit_en: "0.5 l", image: "drinks/biere.webp" },
      { code: "147", name_de: "Pils", name_en: "Pils", price: 4.90, unit_de: "0,5 l", unit_en: "0.5 l" },
      { code: "148", name_de: "Dunkelweizen", name_en: "Dunkelweizen", price: 4.90, unit_de: "0,5 l", unit_en: "0.5 l" },
      { code: "149", name_de: "Alkoholfreies Weizen", name_en: "Non-alcoholic wheat beer", price: 5.90 },
      { code: "150", name_de: "Radler", name_en: "Radler", price: 5.90, unit_de: "0,33 l", unit_en: "0.33 l" },
      { code: "151", name_de: "Alkoholfreies Classic", name_en: "Non-alcoholic classic", price: 4.90, unit_de: "0,5 l", unit_en: "0.5 l" },
    ],
  },

  // ================= SCHNAPS =================
  {
    id: "schnaps",
    title_de: "Schnaps",
    title_en: "Schnapps",
    items: [
      { code: "s1", name_de: "Lua Moi Vodka", name_en: "Lua Moi vodka", price: 2.00, image: "drinks/schnaps.webp" },
      { code: "s2", name_de: "Jäger Meister", name_en: "Jägermeister", price: 2.50 },
      { code: "s3", name_de: "Sierra Tequila", name_en: "Sierra tequila", price: 2.00 },
    ],
  },

  // ================= WEISSWEINE =================
  {
    id: "weissweine",
    title_de: "Weißweine",
    title_en: "White wines",
    items: [
      { code: "153", name_de: "Chardonnay", name_en: "Chardonnay", desc_de: "trocken, aus Italien", desc_en: "dry, from Italy", allergens: ["L"], image: "drinks/weissweine.webp", variations: [{ code: "0.2l", label_de: "0,2 l", label_en: "0.2 l", price: 4.90 }, { code: "0.75l", label_de: "0,75 l", label_en: "0.75 l", price: 12.90 }] },
      { code: "154", name_de: "Grauer Burgunder", name_en: "Pinot gris", desc_de: "trocken, aus Deutschland", desc_en: "dry, from Germany", allergens: ["L"], variations: [{ code: "0.2l", label_de: "0,2 l", label_en: "0.2 l", price: 4.90 }, { code: "0.75l", label_de: "0,75 l", label_en: "0.75 l", price: 12.90 }] },
      { code: "155", name_de: "Riesling", name_en: "Riesling", desc_de: "trocken, aus Deutschland", desc_en: "dry, from Germany", allergens: ["L"], variations: [{ code: "0.2l", label_de: "0,2 l", label_en: "0.2 l", price: 4.90 }, { code: "0.75l", label_de: "0,75 l", label_en: "0.75 l", price: 12.90 }] },
      { code: "wa", name_de: "Weißwein Frankreich", name_en: "White wine France", variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 4.90 }, { code: "0.7l", label_de: "0,7 l", label_en: "0.7 l", price: 13.90 }] },
      { code: "wb", name_de: "Weißwein Italien", name_en: "White wine Italy", variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 4.90 }, { code: "0.7l", label_de: "0,7 l", label_en: "0.7 l", price: 13.90 }] },
      { code: "wc", name_de: "Weinschorle", name_en: "Wine spritzer", variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 4.50 }, { code: "0.7l", label_de: "0,7 l", label_en: "0.7 l", price: 13.90 }] },
    ],
  },

  // ================= ROTWEINE =================
  {
    id: "rotweine",
    title_de: "Rotweine",
    title_en: "Red wines",
    items: [
      { code: "156", name_de: "Dornfelder", name_en: "Dornfelder", desc_de: "aus Deutschland", desc_en: "from Germany", allergens: ["L"], image: "drinks/rotweine.webp", variations: [{ code: "0.2l", label_de: "0,2 l", label_en: "0.2 l", price: 4.90 }, { code: "0.75l", label_de: "0,75 l", label_en: "0.75 l", price: 12.90 }] },
      { code: "ra", name_de: "Rotwein Deutsche", name_en: "Red wine Germany", variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 4.90 }, { code: "0.7l", label_de: "0,7 l", label_en: "0.7 l", price: 13.90 }] },
      { code: "rb", name_de: "Rotwein Frankreich", name_en: "Red wine France", variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 4.90 }, { code: "0.7l", label_de: "0,7 l", label_en: "0.7 l", price: 13.90 }] },
      { code: "rc", name_de: "Rotwein Italien", name_en: "Red wine Italy", variations: [{ code: "0.25l", label_de: "0,25 l", label_en: "0.25 l", price: 4.90 }, { code: "0.7l", label_de: "0,7 l", label_en: "0.7 l", price: 13.90 }] },
      { code: "rd", name_de: "Franken Domina", name_en: "Franken Domina", price: 4.90, unit_de: "0,2 l", unit_en: "0.2 l" },
      { code: "re", name_de: "Trocken Qualitätswein", name_en: "Dry quality wine", price: 12.90, unit_de: "0,75 l", unit_en: "0.75 l" },
    ],
  },

  // ================= KAFFEE =================
  {
    id: "kaffee",
    title_de: "Kaffee",
    title_en: "Coffee",
    items: [
      { code: "157", name_de: "Vietnam Phin Coffee", name_en: "Vietnam phin coffee", desc_de: "Traditioneller vietnamesischer Kaffee mit gezuckerter Kondensmilch", desc_en: "Traditional Vietnamese coffee with sweetened condensed milk", allergens: ["G", "4"], price: 4.50, image: "drinks/kaffee.webp" },
      { code: "158", name_de: "Iced Milk Coffee", name_en: "Iced milk coffee", desc_de: "Kalter vietnamesischer Kaffee mit gesüßter Kondensmilch und Milchschaum", desc_en: "Cold Vietnamese coffee with sweetened condensed milk and milk foam", allergens: ["G", "4"], price: 4.50 },
    ],
  },

  // ================= TEA =================
  {
    id: "tea",
    title_de: "Tea",
    title_en: "Tea",
    items: [
      { code: "159", name_de: "Ginger Tea", name_en: "Ginger tea", desc_de: "Hausgemachter Ingwertee mit Limetten und Honig", desc_en: "Homemade ginger tea with lime and honey", price: 4.90, image: "drinks/tea.webp" },
      { code: "160", name_de: "Ginger Orange Tea", name_en: "Ginger orange tea", desc_de: "Tee aus frischem Ingwer, Orange und Honig", desc_en: "Tea made from fresh ginger, orange, and honey", price: 4.90 },
      { code: "162", name_de: "Jasmintee", name_en: "Jasmine tea", desc_de: "Grüntee mit Jasminknospen", desc_en: "Green tea with jasmine blossoms", allergens: ["4"], price: 4.90 },
      { code: "166", name_de: "Vietnamesischer Mojito", name_en: "Vietnamese mojito", desc_de: "Wodka, Limetten, Minze, Tonic Water, Zucker", desc_en: "Vodka, lime, mint, tonic water, sugar", allergens: ["5", "7", "8"], price: 5.90 },
    ],
  },

  // ================= SÄFTE =================
  {
    id: "saefte",
    title_de: "Säfte",
    title_en: "Juices",
    items: [
      { code: "167", name_de: "Apfelsaft", name_en: "Apple juice", price: 3.90 },
      { code: "168", name_de: "Orangensaft", name_en: "Orange juice", price: 3.90, image: "drinks/saefte.webp" },
      { code: "169", name_de: "Ananassaft", name_en: "Pineapple juice", allergens: ["5", "6"], price: 3.90 },
      { code: "170", name_de: "Mangosaft", name_en: "Mango juice", allergens: ["5", "7"], price: 3.90 },
      { code: "171", name_de: "Apfelschorle", name_en: "Apple spritzer", price: 3.90 },
      { code: "172", name_de: "Lychee-Nektar", name_en: "Lychee nectar", allergens: ["5", "6", "7"], price: 3.90 },
      { code: "173", name_de: "Kiba", name_en: "Kiba", desc_de: "Kirsch- und Bananennektar", desc_en: "Cherry and banana nectar", allergens: ["5", "6", "7"], price: 3.90 },
    ],
  },
];
