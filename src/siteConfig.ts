import logoPng from "@/assets/png/logo.png";

import facebookIconBlack from "@/assets/svg/facebook_black.svg";
import instagramIconBlack from "@/assets/svg/instagram_black.svg";
import tiktokIconBlack from "@/assets/svg/tiktok_black.svg";
import whatsappIconBlack from "@/assets/svg/whatsapp_black.svg";
import xIconBlack from "@/assets/svg/x_black.svg";
import uberEatsIconBlack from "@/assets/svg/ubereats_black.svg";
import mrdFoodIconBlack from "@/assets/svg/mrdfoods_black.svg";

import facebookIcon from "@/assets/svg/facebook.svg";
import instagramIcon from "@/assets/svg/instagram.svg";
import tiktokIcon from "@/assets/svg/tiktok.svg";
import whatsappIcon from "@/assets/svg/whatsapp.svg";
import xIcon from "@/assets/svg/x.svg";
import uberEatsIcon from "@/assets/svg/ubereats.svg";
import mrdFoodIcon from "@/assets/svg/mrdfoods.svg";

export type WeeklyHours = {
  day: string;
  dayIndex: number;
  openTime: string;
  closeTime: string;
  isOpen: boolean;
  note?: string;
};

export type EventListing = {
  name: string;
  date: string;
  time: string;
  location: string;
  address?: string;
  googleMapsUrl?: string;
  notes?: string;
  description: string;
  type: string;
  ticketUrl?: string;
};

export type MenuTag =
  | "Vegetarian"
  | "Spicy"
  | "Signature"
  | "Seafood"
  | "Halal"
  | "New";

export type MenuCategory =
  | "Burgers"
  | "Pizzas"
  | "Combos"
  | "Grills"
  | "Starters"
  | "Light Meals"
  | "Extras";

export type MenuEntry = {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  tags: MenuTag[];
  image: string;
  pairingNote?: string;
};

export const siteConfig = {
  sections: {
    hero: true,
    about: false,
    todaysSpecial: false,
    tastingMenu: false,
    newsletter: false,
    reservationForm: false,
    privateDining: false,
    menuSpecial: true,
    menuGrid: true,
    reviews: true,
    pressFeatures: true,
    photoGallery: true,
    upcomingEvents: false,
    privateHire: false,
    contactDetails: true,
    eventsForm: false,
    location: true,
    locationMap: true,
    hours: true,
    gifts: false,
    footer: true,
    mobileBar: true,
    banner: true,
    delivery: true,
    menu: true,
    reservations: true,
    gallery: true,
    specials: true,
    socials: true,
  },

  integrations: {
    socialLinksEnabled: true,
    whatsappEnabled: true,
    reservationsEnabled: false,
    deliveryEnabled: true,
  },

  branding: {
    logo: logoPng,
    logoAlt: "Ziggy's Burger Joint logo",
  },

  iconAssets: {
    instagram: instagramIcon,
    tiktok: tiktokIcon,
    facebook: facebookIcon,
    whatsapp: whatsappIcon,
    x: xIcon,
    uberEats: uberEatsIcon,
    mrdFood: mrdFoodIcon,
    instagramBlack: instagramIconBlack,
    tiktokBlack: tiktokIconBlack,
    facebookBlack: facebookIconBlack,
    whatsappBlack: whatsappIconBlack,
    xBlack: xIconBlack,
    uberEatsBlack: uberEatsIconBlack,
    mrdFoodBlack: mrdFoodIconBlack,
  },

  restaurantName: "Ziggy's Burger Joint",
  tagline: "Crafted with Fire, Served with Heart",
  cuisineType: "Burgers & Grill",
  foundedYear: 2022,

  colors: {
  brand: {
    primary: "#C4521B",      // Deep, earthy orange (terracotta / burnt orange)
    primarySoft: "#DD6B34",  // Softer, slightly brighter orange for hover
    primaryStrong: "#9A3F12", // Darker, richer orange-brown for contrast
    onPrimary: "#FFF8F0",    // Soft cream for text on primary
  },
  ui: {
    page: "#FDF8F2",         // Warm off-white / cream background (softer on eyes)
    panel: "#FFFFFF",        // Clean white cards for contrast
    panelAlt: "#FFF3E8",     // Very light orange-tinted alt background
    text: "#2C241E",         // Dark brownish-grey (warm, not harsh black)
    textMuted: "rgba(44, 36, 30, 0.65)",
    textSubtle: "rgba(44, 36, 30, 0.45)",
    border: "rgba(44, 36, 30, 0.08)",
    borderStrong: "rgba(44, 36, 30, 0.15)",
  },
  status: {
    success: "#B36B3C",      // Muted orange-brown for success (e.g., vegetarian tag)
    warning: "#D98A4A",      // Warm golden-orange for spice / new items
    danger: "#C4521B",       // Same as primary for consistency
  },
},

  story:
    "Ziggy's Burger Joint opened on Imam Haron Road in Lansdowne, Cape Town, with one mission - serve proper, hearty food without breaking the bank. From juicy smash burgers to fall-off-the-bone ribs and life-changing milkshakes, Ziggy's quickly became a go-to spot for families and food lovers across Cape Town. The vibe is casual, the portions are generous, and the passion behind every plate is real. Whether it's your first visit or your tenth, you'll leave full, happy, and already planning your next order.",

  chef: {
    name: "Glen",
    title: "Front of House",
    bio: "Glen is the face of Ziggy's - known for his warm hospitality and spot-on recommendations. Whether it's your first time or a regular Tuesday, he'll steer you right every time.",
    quote: "Let me help you find your new favourite.",
    image: "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/472817538_584965984287542_341855816063596691_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WZQvlhkmT3MQ7kNvwGCo2zP&_nc_oc=AdqofPZj_FwnVX9Rw4qpuAsos0jNsvezYIHe99SPuG-cXSpw_P_E_Ml0C_gZfh32vxk&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=q4ngXkzfICI04VEoeII6zQ&_nc_ss=7b289&oh=00_Af8NHVfqjjKsEUzPx2L6pbUzxzInatS7n70SqSMyOrNIMw&oe=6A246C5E",
    signatureDish: "Rib Box",
  },

  heroImage: "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/641443431_1545591187568782_7144585783010805637_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Q7JcJx9GOmwQ7kNvwG-ZKId&_nc_oc=AdoSGN3yMuIq7AgxRsiJgchnvGWVbIndkfuSF6Js2A1DN7jZRALIaB5EVqmhGFStvUo&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=g5_z-xpAOu5yrnqfE4bCew&_nc_ss=79289&oh=00_Af8gctsdujfYDvbhZ1xtnZUdguNpRPaHy45w7yQuWQF2jA&oe=6A27511E",
  interiorImage: "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/481990407_623775607073246_9101643582111009020_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mouVvXzSQtMQ7kNvwGPt90L&_nc_oc=Adr9zMkTqkXY0srCoPsNMrYNqagtyQsB8J_UL8bPGqXEinTJ1iJFML2io-TAYYW14Sc&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=1EsF7E40EP5NKKSD9vhLLg&_nc_ss=7b289&oh=00_Af8anyxjJkML84YjyajZOpADnGLB1lLFl3YdqyQRdtBWkQ&oe=6A247A9B",

  stats: [
    { label: "Established", value: "2022" },
    { label: "Rating", value: "5 Stars on Google" },
    { label: "Location", value: "Lansdowne, Cape Town" },
  ],

  hours: [
    { day: "Monday", dayIndex: 1, isOpen: true, openTime: "13:00", closeTime: "21:00" },
    { day: "Tuesday", dayIndex: 2, isOpen: true, openTime: "11:00", closeTime: "21:00" },
    { day: "Wednesday", dayIndex: 3, isOpen: true, openTime: "11:00", closeTime: "21:00" },
    { day: "Thursday", dayIndex: 4, isOpen: true, openTime: "11:00", closeTime: "21:00" },
    { day: "Friday", dayIndex: 5, isOpen: true, openTime: "11:00", closeTime: "22:00" },
    { day: "Saturday", dayIndex: 6, isOpen: true, openTime: "11:00", closeTime: "22:00" },
    { day: "Sunday", dayIndex: 0, isOpen: true, openTime: "11:00", closeTime: "21:00" },
  ] as WeeklyHours[],

  location: {
    address: "495 Imam Haron Rd, Lansdowne, Cape Town, 7780",
    googleMapsUrl: "https://maps.app.goo.gl/A85GcSkX2NhZHvHz5",
    mapEmbedUrl: "https://www.google.com/maps?q=-33.9892698,18.5001025&output=embed",
    parkingNote: "Street parking available on Imam Haron Rd.",
    accessibilityNote: "",
    paymentMethods: ["Cash", "Visa", "Mastercard", "Tap", "EFT"],
  },

  reservations: {
    note: "We'll confirm your booking as soon as we can.",
    privateDiningNote: "Hosting a group? Get in touch and we'll sort you out.",
    largeGroupNote: "For groups of 8+, please contact us directly via WhatsApp.",
    timeslots: [
      "11:00", "11:30", "12:00", "12:30", "13:00",
      "13:30", "14:00", "17:00", "17:30", "18:00",
      "18:30", "19:00", "19:30", "20:00",
    ],
  },

  menuFilters: {
  categories: [
    "All",
    "Burgers",
    "Pizzas",
    "Combos",
    "Grills",
    "Starters",
    "Light Meals",
    "Extras"
  ] as const,
  tags: ["Vegetarian", "Spicy", "Signature", "Seafood", "Halal", "New"] as MenuTag[],
},

  todaysSpecial: {
    name: "The Rib Box",
    description: "1kg beef ribs, BBQ sausage, 6 full sticky wings, fries and onion rings. The full experience.",
    price: "R600",
    image: "",
    tags: ["Signature", "Chef's Pick"] as MenuTag[],
    note: "Best shared - or not. We don't judge.",
  },

  tastingMenu: {
    name: "The Ziggy's Experience",
    courses: 4,
    price: "R450 per person",
    winePairing: "",
    note: "Ask us about group packages and special occasions.",
  },

  menu: [
    // ===== BURGERS =====
    { name: "ORIGINAL SINGLE", description: "100% Beef burger with cheese & garnish", price: "R90", category: "Burgers", tags: [], image: "" },
    { name: "ORIGINAL DOUBLE", description: "200% Beef burger with cheese & garnish", price: "R115", category: "Burgers", tags: [], image: "" },
    { name: "CHILLI CHEESE SINGLE", description: "100% Beef burger, cheese, jalapeno topped with PF spicy sauce", price: "R100", category: "Burgers", tags: ["Spicy"], image: "" },
    { name: "CHILLI CHEESE DOUBLE", description: "200% Beef burger, cheese, jalapeno topped with PF spicy sauce", price: "R125", category: "Burgers", tags: ["Spicy"], image: "" },
    { name: "FUNGHI BURGER", description: "100% Beef burger with mushroom sauce, braised onion & cheese", price: "R110", category: "Burgers", tags: [], image: "" },
    { name: "BOMBO BURGER", description: "Tikka chicken fillet, braised mushroom, peppadew & avo", price: "R110", category: "Burgers", tags: [], image: "" },
    { name: "KOREAN CRUNCH", description: "Lite & crispy chicken fillet dipped in Korean sauce with coleslaw & dressing", price: "R115", category: "Burgers", tags: [], image: "" },
    { name: "HOT HONEY CRUNCH", description: "Lite & crispy chicken fillet, dipped in Hot Honey topped with pickles", price: "R125", category: "Burgers", tags: [], image: "" },
    { name: "MASALA STEAK BURGER", description: "Chopped Masala steak, fresh garnish with special PF sauce", price: "R135", category: "Burgers", tags: [], image: "" },
    { name: "GOURMET RIB BURGER", description: "Pulled beef ribs with braised onion, sticky BBQ sauce & avo", price: "R145", category: "Burgers", tags: [], image: "" },
    { name: "RIB BEEF EATER", description: "100% Beef patty, chopped ribs, topped with caramelized onions", price: "R165", category: "Burgers", tags: [], image: "" },

    // ===== PIZZAS =====
    { name: "GARLIC PITA (MED)", description: "Freshly crushed garlic, oil, spread on a medium pizza base", price: "R42", category: "Pizzas", tags: ["Vegetarian"], image: "" },
    { name: "MARGHERITA", description: "Pomodoro base, mozzarella & herb", price: "R88 / R98", category: "Pizzas", tags: ["Vegetarian"], image: "" },
    { name: "GARLIC CHITA", description: "Garlic base, mozzarella & herb", price: "R88 / R98", category: "Pizzas", tags: ["Vegetarian"], image: "" },
    { name: "PEPPERONI", description: "Pomodoro base, salami & mozzarella", price: "R126 / R136", category: "Pizzas", tags: [], image: "" },
    { name: "HOT HONEY FETARONI", description: "Pomodoro base, salami, feta, chilli topped with Hot Honey", price: "R142 / R162", category: "Pizzas", tags: ["Spicy"], image: "" },
    { name: "FOREST GUMP", description: "Mushroom, olive, spinach & feta", price: "R126 / R136", category: "Pizzas", tags: ["Vegetarian"], image: "" },
    { name: "MANHATTAN", description: "BBQ chicken & mushrooms", price: "R132 / R152", category: "Pizzas", tags: [], image: "" },
    { name: "CALIFORNIAN", description: "Portuguese chicken, pineapple & feta", price: "R138 / R158", category: "Pizzas", tags: [], image: "" },
    { name: "YING YANG", description: "Portuguese chicken, peppadew, chilli & feta", price: "R154 / R172", category: "Pizzas", tags: ["Spicy"], image: "" },
    { name: "FRANGO", description: "Portuguese chicken, mushroom, red onion & green pepper", price: "R144 / R158", category: "Pizzas", tags: [], image: "" },
    { name: "BOMBAY", description: "Tilda chicken, mushroom, peppadew & avo", price: "R164 / R180", category: "Pizzas", tags: [], image: "" },
    { name: "MEXICANA", description: "Spicy mince, jalapeno, peppadew & red onion", price: "R142 / R158", category: "Pizzas", tags: ["Spicy"], image: "" },
    { name: "INDONESIAN", description: "Masala steak, red and green peppers & coriander", price: "R164 / R186", category: "Pizzas", tags: [], image: "" },
    { name: "STICKY STEAK", description: "Sticky BBQ steak, caramelized onion & avo", price: "R164 / R186", category: "Pizzas", tags: [], image: "" },
    { name: "SEAFOOD PIZZA", description: "Seafood mix, crab sticks, mussels, calamari & shrimp topped with chilli", price: "R158 / R182", category: "Pizzas", tags: ["Seafood"], image: "" },
    { name: "KING PRAWN", description: "Grilled garlic prawns, peppadew & avo", price: "R186 / R206", category: "Pizzas", tags: ["Signature", "Seafood"], image: "" },

    // ===== STARTERS =====
    { name: "CRUNCHY TENDERS", description: "Light & crispy chicken tenders with chips and PF dip", price: "R69", category: "Starters", tags: [], image: "" },
    { name: "ULTIMATE WINGS", description: "5x Full wings BBQ or tikka with chips", price: "R98", category: "Starters", tags: [], image: "" },
    { name: "KEBAABS", description: "4x Chicken kebaabs BBQ or tikka with chips", price: "R98", category: "Starters", tags: [], image: "" },

    // ===== GRILLS =====
    { name: "RIBS 400g 'Fall of The Bone'", description: "400g fall of the bone ribs with large chips", price: "R210", category: "Grills", tags: [], image: "" },
    { name: "RIBS 800g 'Fall of The Bone'", description: "800g fall of the bone ribs with large chips", price: "R405", category: "Grills", tags: ["Signature"], image: "" },

    // ===== LIGHT MEALS =====
    { name: "PF SALAD", description: "Chicken fillet strips on a bed of freshly made salad", price: "R85", category: "Light Meals", tags: [], image: "" },

    // ===== COMBOS =====
    { name: "BURGER WING COMBO", description: "Original burger, 5x full wings & chips", price: "R175", category: "Combos", tags: [], image: "" },
    { name: "COMBO 1", description: "400g ribs, 5x full wings, nippai sausage & chips", price: "R305", category: "Combos", tags: [], image: "" },
    { name: "COMBO 2", description: "Garlic pita, 400g ribs, 4x kebaabs & large chips", price: "R305", category: "Combos", tags: [], image: "" },
    { name: "COMBO 3", description: "400g ribs, garlic pita, 6x crispy chicken strips with a spicy or sweet dip", price: "R305", category: "Combos", tags: [], image: "" },
    { name: "ULTIMATE COMBO", description: "800g ribs, 10x wings, 4x skewers, 2x danhia sausage & 1x garlic pita", price: "R680", category: "Combos", tags: ["Signature"], image: "" },

    // ===== EXTRAS (from the XTRAS table) =====
    { name: "Chopped Chilli", description: "Fresh chopped chilli", price: "R10", category: "Extras", tags: ["Spicy"], image: "" },
    { name: "Fried Egg", description: "Fried egg", price: "R18", category: "Extras", tags: [], image: "" },
    { name: "Sliced Avo", description: "Fresh sliced avocado", price: "R18", category: "Extras", tags: [], image: "" },
    { name: "Chips", description: "Side of chips", price: "R25", category: "Extras", tags: [], image: "" },
    { name: "Cheese Slice", description: "Slice of cheese", price: "R16", category: "Extras", tags: [], image: "" },
    { name: "Mushroom Sauce", description: "Creamy mushroom sauce", price: "R28", category: "Extras", tags: [], image: "" },
    { name: "Danhai Nippi", description: "Danhai nippi (spicy sausage)", price: "R25", category: "Extras", tags: ["Spicy"], image: "" },
    { name: "Free Range Chicken Fillet", description: "Grilled free range chicken fillet", price: "R35", category: "Extras", tags: [], image: "" },
    { name: "Crispy Chicken Fillet", description: "Crispy fried chicken fillet", price: "R40", category: "Extras", tags: [], image: "" },
    { name: "100% Beef Patty", description: "Beef patty", price: "R35", category: "Extras", tags: [], image: "" },
  ] as MenuEntry[],

  events: [] as EventListing[],

  gallery: [
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/641283763_1545591180902116_4668162461911570044_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_2tgzyzOYw8Q7kNvwE8_4rN&_nc_oc=Adp2_gZ6F-Dvmoi_3URl9w1cN7mxVgFkgJbnHK8ConzjINlxHWOz5DaTcvWEKZpkzhc&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=1Xy3tiqBcLE2MtwoUYFJnQ&_nc_ss=79289&oh=00_Af_xmMZaj6GAp47Wrc2aJFdIgzfCoNnaNO-pUQUFr2d0oQ&oe=6A277054",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/640922769_1545591170902117_3965257682204357457_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BK4zvGL0i2UQ7kNvwFPQLr-&_nc_oc=AdrAbyZQu9G30PBhiObJXSaV60LgCwOTMnMiNzpDEhAzqTm1YbuwbX98FLQ63OT_fos&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=BeMnmPYasCbenTh2ymiM1w&_nc_ss=79289&oh=00_Af-fkHOgmIViZX1egqVb_LDFJij83jBB8mTKLKzsrBZfSw&oe=6A277A4B",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/625003270_1524045743056660_1084960176279511790_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aH-i365jmW0Q7kNvwFGYTDT&_nc_oc=AdqnzQGvC8eYZ8ScOhg0p6Ib_bSuLI_fTMo3RpF0x4J2sIDYuULY-T06F9ypwpRfJaY&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=a0F4pU4H2qwfTLF435z60w&_nc_ss=79289&oh=00_Af_JhYAAgppG3L6xXCAFrsE-igbVYeMGpaoYYTo6wvIx9w&oe=6A2775C8",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/622792707_1520453933415841_480797047736333375_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-JGNIqoiOswQ7kNvwGQVIAN&_nc_oc=AdqoJPhPFMTqmnYrbodjCHkRFAsRpsWDUephrFYfS75khgfEXU4BNzANybDVW38W_CI&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=yA5DTY1U4NSKOH09PWwVGw&_nc_ss=79289&oh=00_Af-nhsYFIu1YbAjGDwLLmta0vb7HuzmfPiKOpyjByD-pIg&oe=6A27753D",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/622801797_1520453923415842_702769200983164966_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ucCmxjjNLzoQ7kNvwH2n3KU&_nc_oc=AdrCd4bLGHaBj3tZesVO6bGNZqWp-TqoPC2Cr1YGvG6AHGMMHhxBit56O98SJxmja-A&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=5ZTS6XOkbhNzZ0Rz4f4ADg&_nc_ss=79289&oh=00_Af-Z0BeD2utZKODrVjSIX3x6lIt395wRaOO5DFuvVf14IA&oe=6A27733A",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/605972673_1492746029519965_1001325332393708440_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xOpNT769nzIQ7kNvwFslCtc&_nc_oc=Adra79x9El5McwA0_qrYzc5c-_eHxS2ApUwi9NWBrraJA8PqE8sVUmhBE7xGbkdACVk&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=dnVzLHlgl1qXvU3wWSvXlA&_nc_ss=79289&oh=00_Af_ZdZLl2v7jDZEy0skKZccxfRg922hOS6ftNN4BsYpsRQ&oe=6A276E19",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/605711389_1492745982853303_4353673147947474009_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7p1QKW_nL24Q7kNvwFBu6PC&_nc_oc=AdpquiycwY9EIQY3hED62hzODFroNizaoOSZ-7wbjFEFaYhJfbtG0xLkL9vKcgoeNlA&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=Apk3s5KfX5Wt4tv48D7qQA&_nc_ss=79289&oh=00_Af-UD4FiwQCNOaPUK8LRu02AaWloe1UobVkiGT7tOuFLjA&oe=6A2755EE",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/605564745_1492746002853301_8342202110893597844_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LruEiimyBHkQ7kNvwHM2WDp&_nc_oc=Adq3-JCmRbhsixqXHNgZCFunQ6eOg2NYeFS6iM5YA-xStC6ThrEUNq-Gk05lNEWy5qU&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=pvkWSNW4-P_Ifl-VY2iaWg&_nc_ss=79289&oh=00_Af_0j5aZ2_HQP9BXzscPJ2vvnz3ZOCN8q-yzjtroJS5zOg&oe=6A277753",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/607198907_1492745986186636_3579470218406296968_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i1CEAiQ--UAQ7kNvwEVEj5D&_nc_oc=AdoGjChsxVZv0QVkkFY19f39dVIfRhwutHASsi3cBxHZ0l5II2VmYbQtz6i-md_sQs8&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=YFiFq9O68_NUdtT8zx71zQ&_nc_ss=79289&oh=00_Af9HbHL2aTmlyOBd5yaC6wkeDD328cOK6KbeQHoeuZ0WrQ&oe=6A277930",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/605808641_1492746006186634_972742256606910145_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hNRQbTnc53sQ7kNvwE0RvIP&_nc_oc=Adpf2bQbIh5-vaKsDyfk5CNTUG7dlZCVDY5YWS9ZOArOjtidZ_7dClwx9bBH1rSDQX8&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=FIgF-AV2Q4jm8XWs2BiyRA&_nc_ss=79289&oh=00_Af8hTk002EPvUa-y2xXEpX23bEEmebqtgqXY6BQFS7kMsg&oe=6A275EE7",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/605720338_1492745992853302_6980270250551285461_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=niuRQ2Muo_UQ7kNvwGfHJvI&_nc_oc=AdoI0OjQchvA6ZkP4KP6Xvj_07ZVWSbfrrVFUZh70tyyVeJTxih80Ia2Gi5wsGANnzw&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=5j4rSminQY2uGLwrIzECrg&_nc_ss=79289&oh=00_Af85Nd5LqMEtSaInlwLT55P-a5VXxaowPVLe5aW0Le9FUw&oe=6A27807C",
    "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/606012438_1492745996186635_3098080510748781145_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=boh4XazebB4Q7kNvwHc-qEA&_nc_oc=Adplpj3MB9J1eVuQpmhaaQJ8_btAUcQJOaFQI5qf9Z6lTBLnZDwobNt1A_TLDO0mOBg&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=wQTxJuR2r3_60lEw5NUqHw&_nc_ss=79289&oh=00_Af-bJ4X1qHxUvqKU8-oD7eKeFaKjJkzc1AU2Nl6uCXU5yA&oe=6A275ADD",
  ],

  reviews: [
    { name: "Amatullah H.", location: "Cape Town", stars: 5, quote: "All I can say is YOH!! Amazing, honestly well done. A huge variety of options - like Spur on steroids. Try the Turkish Delight gourmet shake. LIFE CHANGING!" },
    { name: "Faaeze D.", location: "Cape Town", stars: 5, quote: "Our waiter Glen was so helpful with his suggestions. The rib box was way too much for 2 people but our kids enjoyed the leftovers. Food was delicious, so was the custard dream milkshake. We will definitely be back." },
    { name: "Rafee'ah A.", location: "Cape Town", stars: 5, quote: "I had the 500g ribs and a mango crush which I absolutely loved. First time coming here but will definitely not be my last." },
    { name: "Kauthar I.", location: "Cape Town", stars: 5, quote: "Tender and flavorful steak, top-notch service, great ambiance - and the best part? It's affordable. Exceptional quality without breaking the bank." },
    { name: "Shanny H.", location: "Cape Town", stars: 5, quote: "Tried the ribs and wings combo for the first time - I honestly enjoyed the whole meal. Will definitely be back for the smash burgers." },
  ],

  ratings: {
    googleRating: 3.9,
    reviewCount: 90,
    tripAdvisorUrl: "",
    leaveReviewUrl: "https://maps.app.goo.gl/A85GcSkX2NhZHvHz5",
  },

  pressFeatures: [
    { publication: "Google Reviews", quote: "Like Spur on steroids - a huge variety with real quality at prices that make sense." },
    { publication: "Cape Town Locals", quote: "Generous portions, friendly faces, and food that hits every single time." },
    { publication: "Lansdowne Community", quote: "Ziggy's is the kind of spot you tell everyone about after your very first visit." },
  ],

  gifts: {
    voucherNote: "Gift vouchers available. Perfect for birthdays and special occasions.",
    voucherUrl: "#",
    loyaltyNote: "Regular at Ziggy's? Ask your server about our loyalty perks.",
  },

  delivery: [
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/za/store/ziggys-burger-joint/EZd4Eng1U5ibO6LxaNoB_w?srsltid=AfmBOoqpVidOEg-gzIYpnC_Ti67XXNPBja5GWzrg_6cctYpmBERCYUX8",
      icon: uberEatsIcon,
      iconBlack: uberEatsIconBlack,
      iconAlt: "Uber Eats logo",
    },
    {
      name: "Mr D Food",
      url: "https://www.mrd.com/delivery/restaurant/ziggys-burger-joint-lansdowne/29171",
      icon: mrdFoodIcon,
      iconBlack: mrdFoodIconBlack,
      iconAlt: "Mr D Food logo",
    },
  ],

  contact: {
    phone: "+27 76 992 5473",
    whatsapp: "+27769925473",
    email: "",
    responseTimeNote: "We'll get back to you as soon as we can.",
    cateringResponseNote: "Group bookings and private enquiries answered within 24 hours.",
  },

  socials: {
    instagram: "https://www.instagram.com/ziggys_burger/",
    tiktok: "https://www.tiktok.com/@ziggys_burger_joint",
    facebook: "https://www.facebook.com/ziggysburgerjoint/",
    handle: "@ziggysburgerjoint",
    whatsappChannelUrl: "https://wa.me/27769925473",
  },
};

export type MenuItem = (typeof siteConfig.menu)[number];
export const data = siteConfig;

