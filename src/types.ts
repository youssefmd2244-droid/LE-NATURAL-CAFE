export type Language = "en" | "ar";

export interface TranslatedText {
  en: string;
  ar: string;
}

export interface Product {
  id: string;
  name: TranslatedText;
  description: TranslatedText;
  price: TranslatedText;
  category: "coffee" | "matcha" | "dessert" | "mocktail";
  image: string;
  isPopular?: boolean;
  calories?: string;
  tags?: TranslatedText[];
}

