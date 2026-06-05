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

export type LocationHours = WeeklyHours[];

export type RestaurantLocation = {
  id: string;
  name: string;
  address: string;
  googleMapsUrl: string;
  mapEmbedUrl: string;
  parkingNote?: string;
  accessibilityNote?: string;
  paymentMethods: string[];
  phone?: string;
  whatsapp?: string;
  hours: LocationHours;
  delivery?: {
    uberEatsUrl?: string;
    mrdFoodUrl?: string;
  };
  isComingSoon?: boolean;
};

export type LocationSpecial = {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  price?: string;
  image: string;
  isNew?: boolean;
  locationId?: string;   // undefined = available at all locations
  badge?: string;        // e.g. "EXCLUSIVE TO LANSDOWNE"
  tags?: MenuTag[];
};

export const siteConfig = {
  sections: {
    hero: true,
    about: true,
    todaysSpecial: true,
    tastingMenu: true,
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
    reservations: false,
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
    logoAlt: "Pizza Familia logo",
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

  restaurantName: "Pizza Familia",
  tagline: "Wood-fired Pizza & Fall-off-the-Bone Ribs",
  cuisineType: "Pizzeria & Grill House",
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
    "Walking into Pizza Familia in Lansdowne, you sense an easygoing neighborhood retreat where the familiar buzz of chatter blends with the mouthwatering scent of wood-fired pizza and tender ribs. It's a space that invites you to slow down, whether you're grabbing a takeaway or settling into a casual meal surrounded by friendly faces. The pace here strikes a comforting balance — lively enough to feel alive, yet unhurried so you can enjoy being genuinely looked after. Staff move with natural rhythm, often sharing a smile or a few words, making the experience feel less transactional and more like visiting a neighbor's home kitchen. At Pizza Familia, ribs arrive richly basted and effortlessly tender, burgers satisfy a hearty craving, and chips are golden and well‑seasoned. There's a genuine feeling of care behind every order, turning every visit into a tasty pause in the rhythm of life at Turf Hall, Cape Town.",

  chef: {
    name: "Prudence & Rodney",
    title: "Front of House Team",
    bio: "The friendly faces that make Pizza Familia feel like home. Known for engaging with kids, explaining the cooking process, and making every guest feel special.",
    quote: "We'll make sure you leave happy.",
    image: "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/472817538_584965984287542_341855816063596691_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WZQvlhkmT3MQ7kNvwGCo2zP&_nc_oc=AdqofPZj_FwnVX9Rw4qpuAsos0jNsvezYIHe99SPuG-cXSpw_P_E_Ml0C_gZfh32vxk&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=q4ngXkzfICI04VEoeII6zQ&_nc_ss=7b289&oh=00_Af8NHVfqjjKsEUzPx2L6pbUzxzInatS7n70SqSMyOrNIMw&oe=6A246C5E",
    signatureDish: "Fall-off-the-Bone Ribs",
  },

  heroImage: "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/641443431_1545591187568782_7144585783010805637_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Q7JcJx9GOmwQ7kNvwG-ZKId&_nc_oc=AdoSGN3yMuIq7AgxRsiJgchnvGWVbIndkfuSF6Js2A1DN7jZRALIaB5EVqmhGFStvUo&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=g5_z-xpAOu5yrnqfE4bCew&_nc_ss=79289&oh=00_Af8gctsdujfYDvbhZ1xtnZUdguNpRPaHy45w7yQuWQF2jA&oe=6A27511E",
  interiorImage: "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/605588629_1492746026186632_6383142529478895216_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o6wZlcDOxh4Q7kNvwEs3tvV&_nc_oc=Ado7Yuy26Q3Uiu-1Nor8HOiTBG_CTEdQuMGgWniATZSgvhZ20dFB14uPzoTIEIDOjqs&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=NR3DfqpuJyxbJKS7CzH1KQ&_nc_ss=7b289&oh=00_Af_UitTsMwKykzR50eE-K63bw3NKSdnz79kT85FnNs1Rag&oe=6A28759C",

  stats: [
    { label: "Established", value: "2022" },
    { label: "Rating", value: "4.5 Stars (229 reviews)" },
    { label: "Location", value: "Turf Hall, Lansdowne" },
  ],

  // ---------------------------------------------------------------------------
  // LOCATIONS
  // ---------------------------------------------------------------------------
  locations: [
    {
      id: "lansdowne",
      name: "Lansdowne",
      address: "1 Blomvlei Rd, Turf Hall, Cape Town, 7780, South Africa",
      googleMapsUrl: "https://maps.app.goo.gl/A85GcSkX2NhZHvHz5", // keep existing, user didn't provide new
      mapEmbedUrl: "https://www.google.com/maps?q=-33.9892698,18.5001025&output=embed",
      parkingNote: "Free parking lot and free street parking available.",
      accessibilityNote: "",
      paymentMethods: ["Cash", "Visa", "Mastercard", "Tap", "EFT", "NFC mobile payments"],
      phone: "+27 72 445 1273",
      whatsapp: "+27724451273",
      delivery: {
        uberEatsUrl: "https://www.ubereats.com/za/store/ziggys-burger-joint/EZd4Eng1U5ibO6LxaNoB_w?srsltid=AfmBOoqpVidOEg-gzIYpnC_Ti67XXNPBja5GWzrg_6cctYpmBERCYUX8",
        mrdFoodUrl: "https://www.mrd.com/delivery/restaurant/ziggys-burger-joint-lansdowne/29171",
      },
      hours: [
        { day: "Monday",    dayIndex: 1, isOpen: false, openTime: "", closeTime: "", note: "Closed" },
        { day: "Tuesday",   dayIndex: 2, isOpen: true, openTime: "12:00", closeTime: "21:00" },
        { day: "Wednesday", dayIndex: 3, isOpen: true, openTime: "12:00", closeTime: "21:00" },
        { day: "Thursday",  dayIndex: 4, isOpen: true, openTime: "12:00", closeTime: "21:00" },
        { day: "Friday",    dayIndex: 5, isOpen: true, openTime: "14:00", closeTime: "22:00" },
        { day: "Saturday",  dayIndex: 6, isOpen: true, openTime: "12:00", closeTime: "22:00" },
        { day: "Sunday",    dayIndex: 0, isOpen: true, openTime: "12:00", closeTime: "20:00" },
      ],
    },
  ] as RestaurantLocation[],

  // ---------------------------------------------------------------------------
  // SPECIALS
  // ---------------------------------------------------------------------------
  specials: [
    {
      id: "dunkd-tenders",
      name: "DUNK'D TENDERS",
      tagline: "keep it saucy",
      description: "Crispy chicken tenders dunked in our signature sauce, served with chips",
      price: "R89",
      image: "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/701173625_1621509426643624_907325665415166544_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tlxou6y4QDQQ7kNvwEsyqDw&_nc_oc=AdrAAoY4vc5Nh7kWZ0eVkIRGwuIrgtgnY1bD_3pd8tUljqa7HWBQ1TQXrfwxcBV3e4Y&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=5kAM3EzENKDOVms5cnEiMg&_nc_ss=7b289&oh=00_Af_gwmotvuzok01pVGpBJOLlb-M-9oBCVqF3dTqjzcBTzA&oe=6A287F72",
      isNew: true,
      locationId: "lansdowne",
      badge: "EXCLUSIVE TO LANSDOWNE",
      tags: ["New"] as MenuTag[],
    },
    {
      id: "ribnroll",
      name: "RIBnROLL",
      tagline: "Happy HUMP Day! 😍",
      description: "200g ribs, 4x winglets, OG burger, fries",
      price: "R169",
      image: "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/505891301_1310134061114497_5518064185976443497_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lu6fVh2jmrUQ7kNvwHEBP-L&_nc_oc=AdrMfF1IDXXrJkP1E5oKrSeTbIMUQNdyh9SK0pW8eBcgabeDxO1EixFvr_qyrHbv9oY&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=f7T_uzTxdMJY4bWYn5Uh_Q&_nc_ss=7b289&oh=00_Af-ausDKv0rv52DGggJ85t2ZGtc2WAAZoo-S8mY-8KqkPA&oe=6A285F00",
      isNew: false,
      locationId: undefined,
      badge: "WEDNESDAY SPECIAL",
      tags: [] as MenuTag[],
    },
    {
      id: "triple-fix",
      name: "THURSDAY THE TRIPLE FIX",
      tagline: "2+1 = 3 … this trio for only R240, in this economy!",
      description: "1x Large Margherita or Garlic Chita pizza + 2x Original Single burgers (beef or chicken) + fries",
      price: "R240",
      image: "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/506529016_1310880747706495_6334283291520103000_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PF_nzPlMK98Q7kNvwHzS8_b&_nc_oc=Adp_W7JQn0bP0XtouKONBlMi_B29eXbSzH4sd-6TAm99oQFTGsLfQBiF938Y75rBVfw&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=Igx4BOyMzjSlB6IumRKz7Q&_nc_ss=7b289&oh=00_Af9FPWlrXN7Pl46rgkiK25f5d9OSyZvS_rU7JTn9tOGrhA&oe=6A288F1A",
      isNew: true,
      locationId: undefined,
      badge: "THURSDAY SPECIAL",
      tags: ["New"] as MenuTag[],
    },
  ] as LocationSpecial[],

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

  tastingMenu: {
    name: "The Pizza Familia Experience",
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

    // ===== EXTRAS =====
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
    { name: "Thakirah Samsodien", location: "Cape Town", stars: 5, quote: "The absolute best, it's my go-to place if I don't feel like making food and especially if you have a craving for soft juicy ribs! The best burgers and the best customer service. I would recommend this place to everyone and anyone." },
    { name: "Afrika Lovers", location: "Cape Town", stars: 4, quote: "We had Combo 1. Amazing ribs - the best we had in Cape Town thus far. The chicken wings were average and also the braai sausage. Chips good 4 out of 5." },
    { name: "Roesdien Martin", location: "Cape Town", stars: 5, quote: "We were very disappointed going to your GB branch just to find out no Rib's meal available.. However went to Lansdowne and my oh my That RIB'S Combo and Original double burger meal was freaking divinely amazing. Shukran Pizza Familia." },
    { name: "Cookie Monster", location: "Cape Town", stars: 5, quote: "Pizza Familia has become a weekly norm for me... Their ribs are extremely well basted, soft and easily fall off the bone – definitely in my top five for best cooked and seasoned ribs in Cape Town. Consistency plays a huge role and they deliver great food every time. Highly recommended!" },
    { name: "Tracy Bee", location: "Cape Town", stars: 5, quote: "Such great staff that interact with you while waiting, entertaining our 2 year old and explaining the processes to her. Thanks so much Prudence, Africa, Rodney and Nkosi – you guys are very special and the pizza was absolutely delicious! 11/10." },
    { name: "Ielhaam Raziet", location: "Cape Town", stars: 5, quote: "Bought the Wednesday special last night, and tried the chicken tenders for the first time. By far the best chicken strips I ever had! Crunchy and tasty on the outside but soft and juicy on the inside. The ribs speak for themselves, always a winner." },
  ],

  ratings: {
    googleRating: 4.5,
    reviewCount: 229,
    tripAdvisorUrl: "",
    leaveReviewUrl: "https://maps.app.goo.gl/A85GcSkX2NhZHvHz5",
  },

  pressFeatures: [
    { publication: "Google Reviews", quote: "The absolute best – soft juicy ribs, best burgers, and best customer service." },
    { publication: "Cape Town Foodies", quote: "Pizza Familia serves up a great spin on Cape Malay flavours. Highly recommend." },
    { publication: "Lansdowne Locals", quote: "A weekly norm – consistently great food, especially the ribs and Wednesday special." },
  ],

  gifts: {
    voucherNote: "Gift vouchers available. Perfect for birthdays and special occasions.",
    voucherUrl: "#",
    loyaltyNote: "Regular at Pizza Familia? Ask your server about our loyalty perks.",
  },

  delivery: [
    {
      name: "Uber Eats",
      platformKey: "uberEatsUrl" as const,
      icon: uberEatsIcon,
      iconBlack: uberEatsIconBlack,
      iconAlt: "Uber Eats logo",
    },
    {
      name: "Mr D Food",
      platformKey: "mrdFoodUrl" as const,
      icon: mrdFoodIcon,
      iconBlack: mrdFoodIconBlack,
      iconAlt: "Mr D Food logo",
    },
  ],

  contact: {
    email: "info@pizzafamilia.co.za",
    responseTimeNote: "We'll get back to you as soon as we can.",
    cateringResponseNote: "Group bookings and private enquiries answered within 24 hours.",
  },

  socials: {
    instagram: "https://www.instagram.com/pizza_fam_gb/",
    tiktok: "https://www.tiktok.com/@pizza_fam_gb",
    facebook: "https://www.facebook.com/pizzafamiliagb/",
    handle: "@pizza_fam_gb",
    whatsappChannelUrl: "https://wa.me/27724451273",
  },
};

export type MenuItem = (typeof siteConfig.menu)[number];
export type Special = (typeof siteConfig.specials)[number];
export type Location = (typeof siteConfig.locations)[number];
export const data = siteConfig;