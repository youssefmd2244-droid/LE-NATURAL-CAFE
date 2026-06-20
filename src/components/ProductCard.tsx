import React from "react";
import { Product } from "../types";
import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { Flame, Sparkles, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { lang, t } = useLanguage();

  const handleOrderWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const productName = product.name[lang];
    const price = product.price[lang];
    const textMsg = lang === "en"
      ? `Hello Le Natural Cafe, I would like to order: ${productName} (${price}).`
      : `مرحباً كافيه لو ناتشورال، أود طلب: ${productName} بسعر (${price}).`;
    const prefilledText = encodeURIComponent(textMsg);
    const orderUrl = `https://wa.me/97460086886?text=${prefilledText}`;
    window.open(orderUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.94 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ type: "spring", stiffness: 90, damping: 20 }}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.15)",
        borderColor: "rgba(212, 175, 55, 0.65)"
      }}
      whileTap={{ scale: 0.98 }}
      className="relative flex flex-col rounded-md overflow-hidden glass-panel border border-luxgold/20 hover:border-luxgold/60 gold-border-glow transition-all duration-500 bg-forest-dark/45 group h-full"
    >
      {/* Product Image Section */}
      <div className="relative aspect-square overflow-hidden bg-forest">
        <motion.img
          src={product.image}
          alt={product.name[lang]}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000"
        />
        {/* Dark Vignette Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-transparent to-black/40"></div>

        {/* Nutritional Calorie indicator if present */}
        {product.calories && (
          <div className="absolute top-3 left-3 bg-forest-dark/85 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-[#f3e5ab]/10 font-mono text-[10px] text-luxgold">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>{product.calories} {t.menu.calories}</span>
          </div>
        )}

        {/* Popular Tag */}
        {product.isPopular && (
          <div className="absolute top-3 right-3 bg-luxgold text-forest-dark px-3 py-1 rounded-sm flex items-center gap-1 font-sans text-[9px] font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-3 h-3 text-forest-dark" />
            <span>{t.menu.popular}</span>
          </div>
        )}

        {/* Micro-interactive floating effect */}
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {product.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-sm bg-forest-light/95 border border-luxgold/25 font-sans text-[9.5px] font-medium text-white tracking-wider uppercase"
            >
              {tag[lang]}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="mb-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-base sm:text-lg font-bold tracking-wide text-white group-hover:text-luxgold transition-colors duration-300">
              {product.name[lang]}
            </h3>
            <span className="text-sm font-mono font-bold text-luxgold whitespace-nowrap bg-luxgold/5 px-2.5 py-1 border border-luxgold/20 rounded-sm">
              {product.price[lang]}
            </span>
          </div>

          <p className="text-xs text-[#f3e5ab]/75 font-light leading-relaxed line-clamp-3">
            {product.description[lang]}
          </p>
        </div>

        {/* Strategic "Order Now" interactive trigger (WhatsApp prefilled direct connect) */}
        <div className="mt-auto w-full">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleOrderWhatsApp}
            className="w-full py-3 rounded-none bg-forest-light hover:bg-[#12312b] border border-luxgold/20 hover:border-luxgold/80 text-[#f3e5ab] hover:text-white text-xs font-bold tracking-[0.15em] flex items-center justify-center gap-2 transition-all duration-300 group/btn shadow-md uppercase cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-luxgold group-hover/btn:scale-110 transition-transform duration-300" />
            <span>{t.menu.quickOrder}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
