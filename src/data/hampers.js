export const categories = [
  "Occasion Gift Hampers",
  "Personalized Gift Hampers",
  "Curated Gift Collections"
];

export const occasions = [
  { id: 'birthday', name: 'Birthday', icon: 'Cake' },
  { id: 'anniversary', name: 'Anniversary', icon: 'Heart' },
  { id: 'couple', name: 'Couple', icon: 'Users' },
  { id: 'graduation', name: 'Graduation', icon: 'GraduationCap' },
  { id: 'surprise', name: 'Surprise', icon: 'Gift' },
  { id: 'festival', name: 'Festival', icon: 'Sparkles' },
  { id: 'self-care', name: 'Self Care', icon: 'Smile' },
  { id: 'other', name: 'Other', icon: 'Star' }
];

export const hampers = [
  {
    id: "h-001",
    name: "Classic Birthday Romance",
    category: "Occasion Gift Hampers",
    occasion: "birthday",
    description: "A beautiful curated birthday hamper with polaroids and sweet treats to make them smile.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop"
    ],
    price: 1599,
    items: [
      "2 Customized Polaroids",
      "Gourmet Chocolate Bar",
      "Scented Candle (Vanilla)",
      "Handwritten Birthday Note"
    ],
    customizationOptions: ["Add more polaroids", "Change chocolate flavor", "Custom message"],
    featured: true,
    available: true
  },
  {
    id: "h-002",
    name: "Anniversary Love Box",
    category: "Occasion Gift Hampers",
    occasion: "anniversary",
    description: "Celebrate your milestone with our premium love box, packed with memories.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop"
    ],
    price: 2199,
    items: [
      "Mini Photo Album",
      "Couple Mugs",
      "Premium Chocolates",
      "Decorative Fairy Lights"
    ],
    customizationOptions: ["Custom mug printing", "Add a customized keychain"],
    featured: true,
    available: true
  },
  {
    id: "h-003",
    name: "Self-Care Essentials",
    category: "Personalized Gift Hampers",
    occasion: "self-care",
    description: "A soothing collection of self-care items perfect for a relaxing day at home.",
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=800&auto=format&fit=crop"
    ],
    price: 1899,
    items: [
      "Lavender Bath Salts",
      "Sheet Masks (x2)",
      "Aesthetic Scrunchie",
      "Herbal Tea Box"
    ],
    customizationOptions: ["Select tea flavor", "Choose scrunchie color"],
    featured: true,
    available: true
  },
  {
    id: "h-004",
    name: "Boyfriend / Husband Special",
    category: "Personalized Gift Hampers",
    occasion: "couple",
    description: "A thoughtful, curated box designed specifically for him.",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop"
    ],
    price: 2499,
    items: [
      "Premium Leather Wallet",
      "Classic Perfume (50ml)",
      "Dark Chocolate",
      "Customized 'Reasons Why I Love You' Cards"
    ],
    customizationOptions: ["Engrave name on wallet", "Add matching keychain"],
    featured: true,
    available: true
  },
  {
    id: "h-005",
    name: "Coffee Lover's Kit",
    category: "Curated Gift Collections",
    occasion: "surprise",
    description: "The ultimate hamper for those who can't start their day without coffee.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
    ],
    price: 1299,
    items: [
      "Artisan Coffee Beans",
      "Aesthetic Glass Mug",
      "Biscotti Pack",
      "Coffee Bean Scented Candle"
    ],
    customizationOptions: ["Select roast level", "Add french press"],
    featured: true,
    available: true
  },
  {
    id: "h-006",
    name: "Mini Cute Box",
    category: "Personalized Gift Hampers",
    occasion: "surprise",
    description: "A small, adorable hamper that says a lot without doing too much.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop"
    ],
    price: 899,
    items: [
      "Cute Enamel Pin",
      "Mini Chocolate Assortment",
      "Handwritten Card",
      "Small Succulent Plant"
    ],
    customizationOptions: ["Choose pin design", "Custom card message"],
    featured: true,
    available: true
  }
];
