import { Product } from "./types";

export const translations = {
  en: {
    nav: {
      home: "L'Heure",
      menu: "La Curation",
      ambiance: "L'Ambiance",
      about: "L'Espèce",
      location: "Lusail Marina",
    },
    hero: {
      tagline: "Sip with Mystique • Modern Luxury Darkwear Cafe",
      titleLine1: "LE NATURAL",
      titleLine2: "CAFÉ",
      description: "A convergence of high-fashion minimalist dark aesthetics, premium single-origin French roasts, and modern luxury lifestyle located in the heart of Lusail’s prestigious marina.",
      exploreMenu: "Explore La Curation",
      bookTable: "Private Reserve",
    },
    ambiance: {
      title: "The Architecture of Taste",
      badge: "L'Ambiance",
      subtitle: "Where Luxury Darkwear Meets Culinary Avant-Garde",
      description1: "Nestled in the architectural marvel of Lusail, LE NATURAL CAFE is designed with a dark, commanding aesthetic. Dark velvet, deep forest green leather, raw obsidian textures, and delicate brushed brass elements provide an eye-safe, sanctuary-like environment.",
      description2: "Every detail—from the custom physical acoustics to our designer-clad baristas—is orchestrated to elevate your coffee hour into a high-sensory ritual. Sip under ambient gold lights and experience the digital frontier of lifestyle design.",
      stats: [
        { value: "100%", label: "Single-Origin Arabic" },
        { value: "84°C", label: "Golden Extraction" },
        { value: "Lusail", label: "Waterfront Residence" },
      ]
    },
    menu: {
      badge: "La Curation",
      title: "Specialty Coffee & Premium Taste",
      subtitle: "A meticulous selection of rare extracts and golden pastry luxury.",
      all: "All Curations",
      coffee: "Specialty Espresso",
      matcha: "Premium Matcha",
      dessert: "French Pâtisserie",
      mocktail: "Botanical Elixirs",
      popular: "Signature Selection",
      orderNow: "Order Now via WhatsApp",
      quickOrder: "Quick Order",
      calories: "kcal",
    },
    location: {
      title: "Where to Find Us",
      subtitle: "Marina Waterfront, Lusail, Doha, Qatar",
      workingHours: "Daily: 1:00 PM - 12:00 AM",
      getDirections: "Launch Navigator",
    },
    footer: {
      craftedBy: "Crafted by ICON CODE – Elevating brands to the digital frontier.",
      servicesTitle: "OUR SERVICES & CREATIVE DISCIPLINES",
      footprintTitle: "GLOBAL FOOTPRINT",
      contactTitle: "CREATIVE & TECHNICAL HOTLINE",
      rights: "© 2026 LE NATURAL CAFE & ICON CODE. All Rights Reserved."
    }
  },
  ar: {
    nav: {
      home: "البداية",
      menu: "قائمة التقييم",
      ambiance: "الأجواء",
      about: "عن المقهى",
      location: "مارينا لوسيل",
    },
    hero: {
      tagline: "ارتشف الغموض الفاخر • مقهى عصري بلمسة داكنة راقية",
      titleLine1: "LE NATURAL",
      titleLine2: "CAFÉ",
      description: "نقطة التقاء الجماليات الداكنة البسيطة وراقية للغاية، ومحامص القهوة الفرنسية الفاخرة أحادية المصدر، في قلب منطقة مارينا لوسيل المرموقة.",
      exploreMenu: "استكشف القائمة الفريدة",
      bookTable: "الحجز الخاص",
    },
    ambiance: {
      title: "هندسة المذاق والمعمار",
      badge: "الأجواء الرائعة",
      subtitle: "حيث تجتمع الفخامة المعاصرة مع الريادة البصرية",
      description1: "يقع مقهى لو ناتشورال في قلب معالم لوسيل المعمارية، وتم تصميمه بطابع داكن آسر. مزيج من المخمل الأسود، والجلود الخضراء العميقة اللامعة، وتفاصيل النحاس المصقول لتوفير بيئة مريحة وحميمة للعين.",
      description2: "كل تفصيل—من الصوتيات الفيزيائية المخصصة إلى مقدمي القهوة ذوي المظهر الرياضي الأنيق والراقي—تم نسجه للارتقاء بساعة قهوتك إلى طقوس حسية مذهلة تحت ظلال الإضاءة الذهبية الخافتة.",
      stats: [
        { value: "١٠٠٪", label: "بن عربي أصيل" },
        { value: "٨٤°م", label: "الاستخلاص الذهبي" },
        { value: "لوسيل", label: "إطلالة المارينا" },
      ]
    },
    menu: {
      badge: "قائمة التقييم",
      title: "شغف القهوة والمذاق الفاخر",
      subtitle: "مجموعة منتقاة بعناية من المستخلصات النادرة والحلويات الذهبية الفاخرة.",
      all: "جميع الإبداعات",
      coffee: "إسبريسو مختص",
      matcha: "ماتشا بريميوم",
      dessert: "الحلويات الفرنسية",
      mocktail: "الجرعات النباتية",
      popular: "اختيار التوقيع",
      orderNow: "اطلب الآن عبر الواتساب",
      quickOrder: "طلب سريع",
      calories: "سعرة حرارية",
    },
    location: {
      title: "موقعنا المتميز",
      subtitle: "واجهة المارينا البحرية، لوسيل، الدوحة، قطر",
      workingHours: "يومياً: ١:٠٠ ظهراً - ١٢:٠٠ منتصف الليل",
      getDirections: "افتح الخريطة",
    },
    footer: {
      craftedBy: "بصمة إبداعية من ICON CODE – نصنع مستقبلك الرقمي اليوم.",
      servicesTitle: "خدماتنا وتخصصاتنا الإبداعية والتقنية",
      footprintTitle: "تأثيرنا العالمي وحضورنا",
      contactTitle: "الخط الساخن التقني والإبداعي المباشر",
      rights: "© ٢٠٢٦ لو ناتشورال كافيه و آيكون كود. جميع الحقوق محفوظة."
    }
  }
};

// Map generated images dynamically to corresponding products
export const productsData = (
  icedMatchaUrl: string,
  spanishLatteUrl: string,
  saffronCakeUrl: string,
  pistachioCroissantUrl: string,
  doubleEspressoUrl: string,
  goldRoseElixirUrl: string
): Product[] => [
  {
    id: "iced-matcha",
    name: {
      en: "Uji Cloud Iced Matcha",
      ar: "ماتشا أوجي السحابية المثلجة"
    },
    description: {
      en: "Premium cerimonial Uji Matcha whisked gracefully over chilled organic milk and a velvety, sweet house-infused cloud cream, layered perfectly with gold flake dustings.",
      ar: "ماتشا أوجي الاحتفالية الفاخرة، مخفوقة بلطف فوق حليب عضوي بارد، مغطاة بكريمة سحابية حريرية محلاة ومزينة ببرادة الذهب الصالحة للأكل."
    },
    price: {
      en: "45 QR",
      ar: "٤٥ ر.ق"
    },
    category: "matcha",
    image: icedMatchaUrl,
    isPopular: true,
    calories: "170",
    tags: [
      { en: "Organic", ar: "عضوي" },
      { en: "Signature", ar: "توقيع المقهى" }
    ]
  },
  {
    id: "spanish-latte",
    name: {
      en: "Velasquez Spanish Latte",
      ar: "سبانش لاتيه فيلازكيز"
    },
    description: {
      en: "Rich double shot of our French signature espresso blend, sweetened condensed milk, infused with a whisper of Madagascar vanilla pod extracts and garnished with gold leaf.",
      ar: "جرعة ثنائية غنية من خليط الإسبريسو الفرنسي الفاخر، والحليب المكثف المحلى، مع لمسة ناعمة من فانيليا مدغشقر مغطاة بريشة مذهبة."
    },
    price: {
      en: "38 QR",
      ar: "٣٨ ر.ق"
    },
    category: "coffee",
    image: spanishLatteUrl,
    isPopular: true,
    calories: "220",
    tags: [
      { en: "Bold Espresso", ar: "إسبريسو قوي" },
      { en: "Must Try", ar: "ينصح بتجربته" }
    ]
  },
  {
    id: "saffron-rose-cake",
    name: {
      en: "Saffron Rose Gold Milk Cake",
      ar: "كيكة الحليب بصبغة الزعفران والذهب"
    },
    description: {
      en: "French baked sponge cake saturated with rich organic saffron cardamon-infused milk, topped with cloud cream, delicate real rose essence, and glistening edible gold sheets.",
      ar: "كيكة إسفنجية مخبوزة على الطريقة الفرنسية مشبعة بحليب الزعفران والهيل العضوي الغني، تعلوها كريمة سحابية وقطع الذهب اللامع."
    },
    price: {
      en: "55 QR",
      ar: "٥٥ ر.ق"
    },
    category: "dessert",
    image: saffronCakeUrl,
    isPopular: true,
    calories: "340",
    tags: [
      { en: "Premium Dessert", ar: "حلوى فاخرة" },
      { en: "Award Winner", ar: "حائز على جوائز" }
    ]
  },
  {
    id: "pistachio-croissant",
    name: {
      en: "L'Ancien Pistachio Croissant",
      ar: "كرواسون الفستق الملكي القديم"
    },
    description: {
      en: "Flaky, buttery multi-layered puff pastry filled with real Sicilian pistachio cream, elegantly drizzled with pistachio dark coulis and chopped premium green crunch.",
      ar: "عجينة الكرواسون الهشة والزبدية المورقة المليئة بكريمة الفستق الصقلي الطبيعي، والمزينة بقطع الفستق الأخضر المحمص المقرمش."
    },
    price: {
      en: "32 QR",
      ar: "٣٢ ر.ق"
    },
    category: "dessert",
    image: pistachioCroissantUrl,
    isPopular: false,
    calories: "280",
    tags: [
      { en: "Freshly Baked", ar: "مخبوز طازجاً" },
      { en: "Crunchy", ar: "مقرمش" }
    ]
  },
  {
    id: "natural-double-espresso",
    name: {
      en: "Le Natural Double Reserve",
      ar: "إسبريسو لو ناتشورال دبل ريزيرف"
    },
    description: {
      en: "Pure concentrated double shot of our highly sought-after French-style signature espresso roast, revealing tasting notes of dark cocoa and sweet amber.",
      ar: "جرعة مزدوجة مركزة ونقية من تحميصتنا الفرنسية الشهيرة والمطلوبة، تكشف عن نكهات الكاكاو الداكن والعنبر الحلو."
    },
    price: {
      en: "24 QR",
      ar: "٢٤ ر.ق"
    },
    category: "coffee",
    image: doubleEspressoUrl,
    isPopular: false,
    calories: "5",
    tags: [
      { en: "Pure Coffee", ar: "قهوة نقية" },
      { en: "Strong", ar: "قوي جداً" }
    ]
  },
  {
    id: "gold-rose-elixir",
    name: {
      en: "Sparkling Rose Gold Elixir",
      ar: "إكسير الورد والذهب الفوار"
    },
    description: {
      en: "An aromatic sparkling mocktail crafted with Damascus rose petal hydrosol, sparkling water, cold-pressed limes, organic agave, and premium floating gold dust.",
      ar: "موكتيل فوار عطري مصنوع من مياه الورد الدمشقي المقشر، والمياه الفوارة، والليمون المعصور على البارد، ومحلى بالأغاف العضوي والبريق الذهبي العائم."
    },
    price: {
      en: "42 QR",
      ar: "٤٢ ر.ق"
    },
    category: "mocktail",
    image: goldRoseElixirUrl,
    isPopular: false,
    calories: "95",
    tags: [
      { en: "Refreshing", ar: "منعش" },
      { en: "Zero Alcohol", ar: "خالٍ من الكحول" }
    ]
  }
];

export const iconCodeServices = [
  "GRC",
  "Graphic Design",
  "Decor",
  "Branding",
  "Digital Signage",
  "Game Dev",
  "Web Development",
  "POS Systems",
  "E-commerce",
  "AI Video Production",
  "Photoshop"
];

export const iconCodeFootprint = [
  { name: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" }, flag: "🇸🇦" },
  { name: { en: "Qatar", ar: "دولة قطر" }, flag: "🇶🇦" },
  { name: { en: "Kuwait", ar: "دولة الكويت" }, flag: "🇰🇼" },
  { name: { en: "Greece", ar: "جمهورية اليونان" }, flag: "🇬🇷" },
  { name: { en: "Egypt", ar: "جمهورية مصر العربية" }, flag: "🇪🇬" }
];
