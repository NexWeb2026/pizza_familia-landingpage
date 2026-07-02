import logoPng from "@/assets/images/Logo.png";

import facebookIconBlack from "@/assets/svg/facebook_black.svg";
import heroImage from "@/assets/images/hero_image.jpg";
import interiorImage from "@/assets/images/in_image.jpg";
import specialOneImage from "@/assets/images/special_1.jpg";
import specialTwoImage from "@/assets/images/special_2.jpg";
import specialThreeImage from "@/assets/images/special_3.jpg";
import galleryOneImage from "@/assets/images/1.jpg";
import galleryTwoImage from "@/assets/images/2.jpg";
import galleryThreeImage from "@/assets/images/3.jpg";
import galleryFourImage from "@/assets/images/4.jpg";
import galleryFiveImage from "@/assets/images/5.jpg";
import gallerySixImage from "@/assets/images/6.jpg";
import gallerySevenImage from "@/assets/images/7.jpg";
import galleryEightImage from "@/assets/images/8.jpg";
import galleryNineImage from "@/assets/images/9.jpg";
import galleryTenImage from "@/assets/images/10.jpg";
import galleryElevenImage from "@/assets/images/11.jpg";
import galleryTwelveImage from "@/assets/images/12.jpg";
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
  | "Kaapstad"
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
  locationId?: string;
  badge?: string;
  tags?: MenuTag[];
  availableDays?: number[];
  availableHours?: { start: string; end: string };
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
    "Walking into Pizza Familia in Lansdowne, you sense an easygoing neighborhood retreat where the familiar buzz of chatter blends with the mouthwatering scent of wood-fired pizza and tender ribs. It's a space that invites you to slow down, whether you're grabbing a takeaway or settling into a casual meal surrounded by friendly faces. The pace here strikes a comforting balance — lively enough to feel alive, yet unhurried so you can enjoy being genuinely looked after. Staff move with natural rhythm, often sharing a smile or a few words, making the experience feel less transactional and more like visiting a neighbor's home kitchen. At Pizza Familia, ribs arrive richly basted and effortlessly tender, burgers satisfy a hearty craving, and chips are golden and well-seasoned. There's a genuine feeling of care behind every order, turning every visit into a tasty pause in the rhythm of life at Turf Hall, Cape Town.",

  chef: {
    name: "Prudence & Rodney",
    title: "Front of House Team",
    bio: "The friendly faces that make Pizza Familia feel like home. Known for engaging with kids, explaining the cooking process, and making every guest feel special.",
    quote: "We'll make sure you leave happy.",
    image: interiorImage,
    signatureDish: "Fall-off-the-Bone Ribs",
  },

  heroImage,
  interiorImage,

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
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9411251442584!2d18.505772375714017!3d-33.994045973179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4397e9cf9959%3A0x9c0ae8fca105e49e!2sPizza%20Familia%20-%20Lansdowne!5e0!3m2!1sen!2sza!4v1780902344119!5m2!1sen!2sza",
      parkingNote: "Free parking lot and free street parking available.",
      accessibilityNote: "",
      paymentMethods: ["Cash", "Visa", "Mastercard", "Tap", "EFT", "NFC mobile payments"],
      phone: "+27 72 445 1273",
      whatsapp: "+27724451273",
      delivery: {
        uberEatsUrl: "https://www.ubereats.com/za/store/pizza-familia-landsdowne/9Ozbf5gNUUKVU4JkxVR3oQ?srsltid=AfmBOoqyA2V4jwWHKPG9cgesuJlda6aysuETQBJx8qJOzXl9m87-v65W",
        mrdFoodUrl: "https://www.mrd.com/delivery/restaurant/pizza-familia-lansdowne-lansdowne/27036",
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
      image: specialOneImage,
      isNew: true,
      locationId: "lansdowne",
      badge: "EXCLUSIVE TO LANSDOWNE",
      tags: ["New"] as MenuTag[],
      // available every day (optional, omit if always)
    },
    {
      id: "ribnroll",
      name: "RIBnROLL",
      tagline: "Happy HUMP Day!",
      description: "200g ribs, 4x winglets, OG burger, fries",
      price: "R169",
      image: specialTwoImage,
      isNew: false,
      locationId: undefined,
      badge: "WEDNESDAY SPECIAL",
      tags: [] as MenuTag[],
      availableDays: [3], // Wednesday only
    },
    {
      id: "triple-fix",
      name: "THE THURSDAY TRIPLE FIX",
      tagline: "2+1 = 3 … this trio for only R240, in this economy!",
      description: "1x Large Margherita or Garlic Chita pizza + 2x Original Single burgers (beef or chicken) + fries",
      price: "R240",
      image: specialThreeImage,
      isNew: true,
      locationId: undefined,
      badge: "THURSDAY SPECIAL",
      tags: ["New"] as MenuTag[],
      availableDays: [4], // Thursday only
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
    tags: ["Vegetarian", "Spicy", "Signature", "Seafood", "Halal", "Kaapstad", "New"] as MenuTag[],
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
    { name: "MARGHERITA", description: "Pomodoro base, mozzarella & herb", price: "R88", category: "Pizzas", tags: ["Vegetarian"], image: "" },
    { name: "MARGHERITA ( KAAPSTAD )", description: "Pomodoro base, mozzarella & herb. Fully loaded", price: "R98", category: "Pizzas", tags: ["Vegetarian", "Kaapstad"], image: "" },
    { name: "GARLIC CHITA", description: "Garlic base, mozzarella & herb", price: "R88", category: "Pizzas", tags: ["Vegetarian"], image: "" },
    { name: "GARLIC CHITA ( KAAPSTAD )", description: "Garlic base, mozzarella & herb. Fully loaded", price: "R98", category: "Pizzas", tags: ["Vegetarian", "Kaapstad"], image: "" },
    { name: "PEPPERONI", description: "Pomodoro base, salami & mozzarella", price: "R126", category: "Pizzas", tags: [], image: "" },
    { name: "PEPPERONI ( KAAPSTAD )", description: "Pomodoro base, salami & mozzarella. Fully loaded", price: "R136", category: "Pizzas", tags: ["Kaapstad"], image: "" },
    { name: "HOT HONEY FETARONI", description: "Pomodoro base, salami, feta, chilli topped with Hot Honey", price: "R142", category: "Pizzas", tags: ["Spicy"], image: "" },
    { name: "HOT HONEY FETARONI ( KAAPSTAD )", description: "Pomodoro base, salami, feta, chilli topped with Hot Honey. Fully loaded", price: "R162", category: "Pizzas", tags: ["Spicy", "Kaapstad"], image: "" },
    { name: "FOREST GUMP", description: "Mushroom, olive, spinach & feta", price: "R126", category: "Pizzas", tags: ["Vegetarian"], image: "" },
    { name: "FOREST GUMP ( KAAPSTAD )", description: "Mushroom, olive, spinach & feta. Fully loaded", price: "R136", category: "Pizzas", tags: ["Vegetarian", "Kaapstad"], image: "" },
    { name: "MANHATTAN", description: "BBQ chicken & mushrooms", price: "R132", category: "Pizzas", tags: [], image: "" },
    { name: "MANHATTAN ( KAAPSTAD )", description: "BBQ chicken & mushrooms. Fully loaded", price: "R152", category: "Pizzas", tags: ["Kaapstad"], image: "" },
    { name: "CALIFORNIAN", description: "Portuguese chicken, pineapple & feta", price: "R138", category: "Pizzas", tags: [], image: "" },
    { name: "CALIFORNIAN ( KAAPSTAD )", description: "Portuguese chicken, pineapple & feta. Fully loaded", price: "R158", category: "Pizzas", tags: ["Kaapstad"], image: "" },
    { name: "YING YANG", description: "Portuguese chicken, peppadew, chilli & feta", price: "R154", category: "Pizzas", tags: ["Spicy"], image: "" },
    { name: "YING YANG ( KAAPSTAD )", description: "Portuguese chicken, peppadew, chilli & feta. Fully loaded", price: "R172", category: "Pizzas", tags: ["Spicy", "Kaapstad"], image: "" },
    { name: "FRANGO", description: "Portuguese chicken, mushroom, red onion & green pepper", price: "R144", category: "Pizzas", tags: [], image: "" },
    { name: "FRANGO ( KAAPSTAD )", description: "Portuguese chicken, mushroom, red onion & green pepper. Fully loaded", price: "R158", category: "Pizzas", tags: ["Kaapstad"], image: "" },
    { name: "BOMBAY", description: "Tilda chicken, mushroom, peppadew & avo", price: "R164", category: "Pizzas", tags: [], image: "" },
    { name: "BOMBAY ( KAAPSTAD )", description: "Tilda chicken, mushroom, peppadew & avo. Fully loaded", price: "R180", category: "Pizzas", tags: ["Kaapstad"], image: "" },
    { name: "MEXICANA", description: "Spicy mince, jalapeno, peppadew & red onion", price: "R142", category: "Pizzas", tags: ["Spicy"], image: "" },
    { name: "MEXICANA ( KAAPSTAD )", description: "Spicy mince, jalapeno, peppadew & red onion. Fully loaded", price: "R158", category: "Pizzas", tags: ["Spicy", "Kaapstad"], image: "" },
    { name: "INDONESIAN", description: "Masala steak, red and green peppers & coriander", price: "R164", category: "Pizzas", tags: [], image: "" },
    { name: "INDONESIAN ( KAAPSTAD )", description: "Masala steak, red and green peppers & coriander. Fully loaded", price: "R186", category: "Pizzas", tags: ["Kaapstad"], image: "" },
    { name: "STICKY STEAK", description: "Sticky BBQ steak, caramelized onion & avo", price: "R164", category: "Pizzas", tags: [], image: "" },
    { name: "STICKY STEAK ( KAAPSTAD )", description: "Sticky BBQ steak, caramelized onion & avo. Fully loaded", price: "R186", category: "Pizzas", tags: ["Kaapstad"], image: "" },
    { name: "SEAFOOD PIZZA", description: "Seafood mix, crab sticks, mussels, calamari & shrimp topped with chilli", price: "R158", category: "Pizzas", tags: ["Seafood"], image: "" },
    { name: "SEAFOOD PIZZA ( KAAPSTAD )", description: "Seafood mix, crab sticks, mussels, calamari & shrimp topped with chilli. Fully loaded", price: "R182", category: "Pizzas", tags: ["Seafood", "Kaapstad"], image: "" },
    { name: "KING PRAWN", description: "Grilled garlic prawns, peppadew & avo", price: "R186", category: "Pizzas", tags: ["Signature", "Seafood"], image: "" },
    { name: "KING PRAWN ( KAAPSTAD )", description: "Grilled garlic prawns, peppadew & avo. Fully loaded", price: "R206", category: "Pizzas", tags: ["Signature", "Seafood", "Kaapstad"], image: "" },
    { name: "GARLIC PITA (MED)", description: "Freshly crushed garlic, oil, spread on a medium pizza base", price: "R42", category: "Pizzas", tags: ["Vegetarian"], image: "" },

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
    galleryOneImage,
    galleryTwoImage,
    galleryThreeImage,
    galleryFourImage,
    galleryFiveImage,
    gallerySixImage,
    gallerySevenImage,
    galleryEightImage,
    galleryNineImage,
    galleryTenImage,
    galleryElevenImage,
    galleryTwelveImage,
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
    leaveReviewUrl: "https://maps.app.goo.gl/8RZTkRqyeFUnwTy98",
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
    tiktok: "",
    facebook: "https://www.facebook.com/pizzafamiliagb/",
    handle: "@pizza_fam_gb",
    whatsappChannelUrl: "https://wa.me/27724451273",
  },
};

export type MenuItem = (typeof siteConfig.menu)[number];
export type Special = (typeof siteConfig.specials)[number];
export type Location = (typeof siteConfig.locations)[number];
export const data = siteConfig;
