import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { productsData } from "../i18n";
import { Product } from "../types";
import { ProductCard } from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { Filter, Coffee } from "lucide-react";

// Import generated premium culinary assets
import icedMatchaImg from "../assets/images/iced_matcha_1781909194299.jpg";
import spanishLatteImg from "../assets/images/spanish_latte_1781909208413.jpg";
import saffronCakeImg from "../assets/images/saffron_milk_cake_1781909222501.jpg";
import pistachioCroissantImg from "../assets/images/pistachio_croissant_1781909237729.jpg";
import doubleEspressoImg from "../assets/images/double_espresso_1781911081844.jpg";
import goldRoseElixirImg from "../assets/images/gold_rose_elixir_1781911098909.jpg";

export const MenuSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const menuItems = productsData(
    icedMatchaImg,
    spanishLatteImg,
    saffronCakeImg,
    pistachioCroissantImg,
    doubleEspressoImg,
    goldRoseElixirImg
  );

  const categories = [
    { id: "all", label: t.menu.all },
    { id: "coffee", label: t.menu.coffee },
    { id: "matcha", label: t.menu.matcha },
    { id: "dessert", label: t.menu.dessert },
    { id: "mocktail", label: t.menu.mocktail },
  ];

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-forest-dark relative">
      {/* Decorative vector grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3 bg-luxgold/10 px-4 py-1.5 rounded-full border border-luxgold/20">
            <Coffee className="w-3.5 h-3.5 text-luxgold" />
            <span className="text-[10px] uppercase font-semibold tracking-[0.3em] font-sans text-[#f3e5ab]">
              {t.menu.badge}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-wider mb-4 uppercase">
            {t.menu.title}
          </h2>
          <p className="text-sm md:text-base text-[#f3e5ab]/80 font-light max-w-lg mx-auto">
            {t.menu.subtitle}
          </p>
          
          <div className="w-12 h-[1.5px] bg-luxgold mx-auto mt-6"></div>
        </motion.div>

        {/* Categorical Filtering Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-sm text-xs font-semibold tracking-widest transition-all duration-300 uppercase shadow-md ${
                  isActive
                    ? "bg-luxgold text-forest-dark border border-luxgold font-extrabold"
                    : "bg-forest-light/60 hover:bg-forest text-luxgold border border-luxgold/20 hover:border-luxgold/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Grid Container */}
        <motion.div
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <ProductCard product={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Empty State if something went wrong */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-[#f3e5ab]/70">
            {lang === "en" ? "Curating soon..." : "قيد التقييم قريباً..."}
          </div>
        )}

      </div>
    </section>
  );
};
