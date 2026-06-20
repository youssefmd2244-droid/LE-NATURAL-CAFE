import React from "react";
import { useLanguage } from "./LanguageContext";
import { Compass, Clock, MapPin, ExternalLink, Instagram } from "lucide-react";
import { motion } from "motion/react";

export const LocationSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="location" className="py-24 bg-forest-dark border-b border-luxgold/10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="glass-panel p-8 md:p-12 rounded-md border border-luxgold/20 bg-forest/40 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Copy Details */}
            <div className="space-y-6 flex flex-col items-start text-start">
              <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-luxgold">
                {lang === "en" ? "PHYSICAL RESIDENCE" : "موقع المقهى"}
              </span>

              <h2 className="text-3xl font-black text-white uppercase tracking-wider">
                {t.location.title}
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-luxgold flex-shrink-0" />
                  <span className="text-sm font-light text-[#f3e5ab]">
                    {t.location.subtitle}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-luxgold flex-shrink-0" />
                  <span className="text-sm font-light text-[#f3e5ab]">
                    {t.location.workingHours}
                  </span>
                </div>
              </div>

              {/* In the Heart of the Page: Integrated Action Portal (Formerly floating buttons) */}
              <div className="pt-6 w-full space-y-4">
                <h4 className="text-[10px] font-mono tracking-[0.25em] text-[#f3e5ab]/60 uppercase border-b border-luxgold/10 pb-2 w-full">
                  {lang === "en" ? "DIRECT CONNECTIVITY PORTAL" : "بوابة التواصل والخرائط المباشرة"}
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    href="https://maps.app.goo.gl/2JBHuFdTf6ByTuBWA"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex-1 px-5 py-3.5 rounded-sm bg-luxgold text-forest-dark font-bold text-xs tracking-[0.15em] hover:bg-transparent hover:text-luxgold border border-luxgold flex items-center justify-center gap-2 transition-all duration-300 uppercase shadow-lg text-center"
                  >
                    <Compass className="w-4 h-4 flex-shrink-0" />
                    <span>{t.location.getDirections}</span>
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    href="https://www.instagram.com/lenatural.qa"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex-1 px-5 py-3.5 rounded-sm border border-luxgold/30 text-luxgold font-semibold text-xs tracking-[0.15em] hover:border-luxgold hover:bg-[#071310] flex items-center justify-center gap-2 transition-all duration-300 uppercase text-center bg-forest-dark/30 animate-pulse-slow"
                  >
                    <Instagram className="w-4 h-4 text-luxgold flex-shrink-0" />
                    <span>{lang === "en" ? "Instagram Life @lenatural.qa" : "إنستغرام @lenatural.qa"}</span>
                  </motion.a>
                </div>

                <div className="w-full">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://maps.app.goo.gl/2JBHuFdTf6ByTuBWA"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-full px-5 py-3.5 rounded-sm border border-luxgold/20 text-[#f3e5ab]/80 font-mono text-[10px] tracking-[0.15em] hover:border-luxgold/50 flex items-center justify-center gap-2 transition-all duration-300 uppercase bg-[#030807]/50"
                  >
                    <MapPin className="w-4 h-4 text-luxgold" />
                    <span>{lang === "en" ? "Interactive Marina Location Map" : "خريطة موقع مارينا التفاعلية"}</span>
                  </motion.a>
                </div>
              </div>

            </div>

            {/* Simulated Clean Map / Artwork interface */}
            <div className="relative h-64 w-full rounded-md overflow-hidden bg-forest/90 border border-luxgold/20 flex items-center justify-center p-6 group">
              {/* Luxury aesthetic background */}
              <div className="absolute inset-0 bg-[#071310] opacity-80 z-0"></div>
              {/* Radial gradient line radar scan */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxgold/15 via-transparent to-transparent pointer-events-none"></div>

              {/* Location marker visual */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="relative mb-3 flex items-center justify-center">
                  <div className="absolute w-12 h-12 rounded-full bg-luxgold/20 animate-ping"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-luxgold/30 animate-pulse"></div>
                  <div className="w-6 h-6 rounded-full bg-luxgold flex items-center justify-center shadow-lg border border-white/20">
                    <MapPin className="w-3.5 h-3.5 text-forest-dark" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                  LE NATURAL
                </h3>
                <p className="text-[10px] text-luxgold font-mono tracking-widest uppercase mt-1">
                  Marina Waterfront
                </p>
                <span className="text-[9px] text-[#f3e5ab]/60 uppercase tracking-widest mt-0.5">
                  Lusail, Doha, Qatar
                </span>
                
                <a
                  href="https://maps.app.goo.gl/2JBHuFdTf6ByTuBWA"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="mt-6 text-[10px] font-bold tracking-widest text-luxgold hover:text-[#f3e5ab] underline uppercase transition-all duration-200"
                >
                  {lang === "en" ? "Open Google Maps" : "افتح خرائط جوجل"}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
