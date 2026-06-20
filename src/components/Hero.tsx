import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { Compass, Sparkles, MapPin } from "lucide-react";
import heroBg from "../assets/images/hero_cafe_bg_1781909179526.jpg";

export const Hero: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with parallax scale and dark filter overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Le Natural Cafe Ambiance"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05] scale-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-[#030807]/60 to-[#030807]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-transparent to-forest-dark/80"></div>
      </div>

      {/* Floating indicators showing specialty roastery tagline */}
      <div className="absolute top-28 left-6 md:left-12 z-10 hidden sm:flex items-center gap-2 font-mono text-[10px] text-luxgold/60 tracking-[0.2em] uppercase">
        <MapPin className="w-3.5 h-3.5 text-luxgold" />
        <span>Lusail Marina, QR • Specialty Roastery</span>
      </div>

      <div className="absolute top-28 right-6 md:right-12 z-10 hidden sm:flex items-center gap-2 font-mono text-[10px] text-luxgold/60 tracking-[0.2em] uppercase">
        <Sparkles className="w-3.5 h-3.5 text-luxgold" />
        <span>Open Daily • 1:00 PM - 12:00 AM</span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
        {/* Animated Subtitle badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-luxgold/30 bg-forest/40 backdrop-blur-md flex items-center gap-2 shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-accent animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-[#f3e5ab] uppercase select-none">
            {t.hero.tagline}
          </span>
        </motion.div>

        {/* Dynamic Title with glowing effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-widest text-white cursor-default select-none"
        >
          <span className="block font-sans">{t.hero.titleLine1}</span>
          <span className="block text-luxgold gold-glow font-arabic mt-2">{t.hero.titleLine2}</span>
        </motion.h1>

        {/* Brand Divider line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "220px" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="h-[1.5px] bg-gradient-to-r from-transparent via-luxgold to-transparent my-6"
        ></motion.div>

        {/* Description Copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-lg max-w-2xl text-[#f3e5ab]/85 font-light leading-relaxed mb-10 text-center uppercase tracking-wide px-4"
        >
          {t.hero.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md px-4"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-luxgold border border-luxgold text-forest-dark font-bold text-xs tracking-[0.2em] hover:bg-transparent hover:text-luxgold text-center transition-all duration-300 transform hover:scale-[1.02] uppercase"
          >
            {t.hero.exploreMenu}
          </a>
          <a
            href="https://wa.me/97460086886"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto px-8 py-4 rounded-sm border border-luxgold/40 text-luxgold font-semibold text-xs tracking-[0.2em] bg-forest-dark/50 backdrop-blur-sm hover:border-luxgold hover:bg-forest transition-all text-center duration-300 transform hover:scale-[1.02] uppercase"
          >
            {t.hero.bookTable}
          </a>
        </motion.div>
      </div>

      {/* Ambient bottom golden glow */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-forest-dark to-transparent z-1"></div>
    </section>
  );
};
