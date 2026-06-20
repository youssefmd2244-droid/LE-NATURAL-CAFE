import React from "react";
import { useLanguage } from "./LanguageContext";
import { iconCodeServices, iconCodeFootprint } from "../i18n";
import { Laptop, PhoneCall, Sparkles, MapPin, ExternalLink, Cpu } from "lucide-react";
import { motion } from "motion/react";

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer id="footer" className="bg-[#030807] text-white border-t border-luxgold/20 pt-20 pb-8 relative z-10">
      {/* Subtle aesthetic backdrop grid */}
      <div className="absolute inset-0 bg-[#071310]/30 -z-1 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-luxgold/15">
          
          {/* Section 1 & 2: Brand & Tagline Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-start text-start">
            
            {/* ICON CODE prominent & elegant logo element with dynamic moving & glowing neon orbit */}
            <div className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                {/* Dynamic Rotating Hexagon / Ring with custom RGB/Cyberpunk glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="absolute inset-0 rounded-lg border-2 border-dashed border-luxgold/40 animate-rgb-glow"
                />
                
                {/* Breathing glowing outer circle */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-lg bg-gradient-to-tr from-neon-accent/20 via-luxgold/20 to-transparent blur-md"
                />

                {/* Inner Core container that floats slightly */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="relative z-10 w-11 h-11 rounded-md bg-[#071310] border border-luxgold/60 flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                >
                  <span className="text-white font-mono font-black text-[15px] tracking-tight text-center drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
                    &lt;/&gt;
                  </span>
                  
                  {/* Small neon green pulsing data dot */}
                  <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-neon-accent animate-ping" />
                  <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-neon-accent" />
                </motion.div>
              </div>

              <div className="flex flex-col">
                <motion.span
                  animate={{ textShadow: ["0 0 4px rgba(255,255,255,0.1)", "0 0 12px rgba(212,175,55,0.5)", "0 0 4px rgba(255,255,255,0.1)"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="text-lg font-black tracking-[0.25em] text-white uppercase"
                >
                  ICON CODE
                </motion.span>
                <span className="text-[9px] tracking-[0.3em] text-luxgold font-bold uppercase flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-accent animate-pulse" />
                  DIGITAL UNION
                </span>
              </div>
            </div>

            {/* Tagline based on active locale */}
            <p className="text-sm text-[#f3e5ab]/85 font-light leading-relaxed max-w-sm">
              {t.footer.craftedBy}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-forest border border-luxgold/10 text-[10px] text-luxgold font-mono tracking-widest uppercase mt-4">
              <Cpu className="w-3.5 h-3.5 text-luxgold" />
              <span>Digital Frontier Systems</span>
            </div>

          </div>

          {/* Section 3: Services Grid Display as modern chips/tags (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col items-start">
            <h3 className="text-xs font-bold tracking-[0.25em] text-luxgold uppercase border-b border-luxgold/20 pb-2 w-full text-start">
              {t.footer.servicesTitle}
            </h3>

            <div className="flex flex-wrap gap-2.5 justify-start">
              {iconCodeServices.map((service, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-sm bg-forest-light/60 hover:bg-forest hover:text-white border border-luxgold/15 hover:border-luxgold/60 text-[10px] sm:text-xs font-mono text-[#f3e5ab]/90 tracking-wide cursor-default transition-all duration-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Section 5: Contact Info Hotlines (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-6 flex flex-col items-start text-start">
            <h3 className="text-xs font-bold tracking-[0.25em] text-luxgold uppercase border-b border-luxgold/20 pb-2 w-full">
              {t.footer.contactTitle}
            </h3>

            <div className="space-y-6 w-full">
              {/* Hotline 1 Item */}
              <div className="p-4 rounded-md border border-luxgold/10 bg-forest-dark/30 hover:border-luxgold/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-sm bg-luxgold/10 text-luxgold border border-luxgold/20">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-luxgold uppercase font-mono tracking-wider font-bold">HOTLINE 1</span>
                    <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-white">+20 1094555299</span>
                  </div>
                </div>
                
                {/* Micro Action Buttons under the number for dialing & whatsapp */}
                <div className="flex items-center gap-3 mt-3.5 pl-9">
                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/201094555299"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    animate={{ y: [0, -4, 0], rotate: [0, 360] }}
                    transition={{
                      y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 15, ease: "linear" }
                    }}
                    className="w-8 h-8 rounded-full border border-luxgold/30 flex items-center justify-center bg-[#071310] animate-rgb-glow text-white shadow-md hover:scale-110 transition-transform"
                    title="WhatsApp Hotline 1"
                  >
                    <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.973L2 22l5.233-1.371a9.927 9.927 0 0 0 4.775 1.224h.005c5.505 0 9.99-4.478 9.99-9.985 0-2.67-1.037-5.18-2.92-7.062a9.94 9.94 0 0 0-7.084-2.922zm5.786 14.155c-.237.669-1.392 1.282-1.92 1.343-.482.056-.967.261-3.078-.574-2.538-1.002-4.14-3.585-4.266-3.753-.128-.167-1.036-1.373-1.036-2.622 0-1.25.64-1.862.868-2.115.228-.254.498-.318.663-.318l1.192.003c.182.001.428-.07.669.514.249.605.852 2.079.926 2.228.074.15.124.324.025.522s-.149.324-.298.497c-.15.174-.315.347-.45.492-.15.161-.307.337-.132.637.175.3.778 1.284 1.669 2.072.152.134.291.224.444.271.884.7 1.48.572 1.688.35.228-.243.852-1.001 1.08-1.343.228.343.149.324.428.433s1.777.838 2.083.992c.307.155.512.228.587.357s.075.922-.162 1.591z" />
                    </svg>
                  </motion.a>
                  
                  {/* Dialer / Call */}
                  <motion.a
                    href="tel:+201094555299"
                    animate={{ y: [-4, 0, -4], rotate: [360, 0] }}
                    transition={{
                      y: { repeat: Infinity, duration: 2.2, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 15, ease: "linear" }
                    }}
                    className="w-8 h-8 rounded-full border border-luxgold/30 flex items-center justify-center bg-[#071310] animate-rgb-glow text-white shadow-md hover:scale-110 transition-transform"
                    title="Call Hotline 1"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-luxgold" />
                  </motion.a>
                </div>
              </div>

              {/* Hotline 2 Item */}
              <div className="p-4 rounded-md border border-luxgold/10 bg-forest-dark/30 hover:border-luxgold/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-sm bg-luxgold/10 text-luxgold border border-luxgold/20">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-luxgold uppercase font-mono tracking-wider font-bold">HOTLINE 2</span>
                    <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-white">+20 1102293350</span>
                  </div>
                </div>
                
                {/* Micro Action Buttons under the number for dialing & whatsapp */}
                <div className="flex items-center gap-3 mt-3.5 pl-9">
                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/201102293350"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    animate={{ y: [0, -4, 0], rotate: [0, 360] }}
                    transition={{
                      y: { repeat: Infinity, duration: 2.1, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 16, ease: "linear" }
                    }}
                    className="w-8 h-8 rounded-full border border-luxgold/30 flex items-center justify-center bg-[#071310] animate-rgb-glow text-white shadow-md hover:scale-110 transition-transform"
                    title="WhatsApp Hotline 2"
                  >
                    <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.973L2 22l5.233-1.371a9.927 9.927 0 0 0 4.775 1.224h.005c5.505 0 9.99-4.478 9.99-9.985 0-2.67-1.037-5.18-2.92-7.062a9.94 9.94 0 0 0-7.084-2.922zm5.786 14.155c-.237.669-1.392 1.282-1.92 1.343-.482.056-.967.261-3.078-.574-2.538-1.002-4.14-3.585-4.266-3.753-.128-.167-1.036-1.373-1.036-2.622 0-1.25.64-1.862.868-2.115.228-.254.498-.318.663-.318l1.192.003c.182.001.428-.07.669.514.249.605.852 2.079.926 2.228.074.15.124.324.025.522s-.149.324-.298.497c-.15.174-.315.347-.45.492-.15.161-.307.337-.132.637.175.3.778 1.284 1.669 2.072.152.134.291.224.444.271.884.7 1.48.572 1.688.35.228-.243.852-1.001 1.08-1.343.228.343.149.324.428.433s1.777.838 2.083.992c.307.155.512.228.587.357s.075.922-.162 1.591z" />
                    </svg>
                  </motion.a>
                  
                  {/* Dialer / Call */}
                  <motion.a
                    href="tel:+201102293350"
                    animate={{ y: [-4, 0, -4], rotate: [360, 0] }}
                    transition={{
                      y: { repeat: Infinity, duration: 1.9, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 14, ease: "linear" }
                    }}
                    className="w-8 h-8 rounded-full border border-luxgold/30 flex items-center justify-center bg-[#071310] animate-rgb-glow text-white shadow-md hover:scale-110 transition-transform"
                    title="Call Hotline 2"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-luxgold" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 4: Global Footprint List & Copyright banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Countries foot print */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-[10px] font-bold text-luxgold/60 tracking-[0.3em] uppercase">
              {t.footer.footprintTitle}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#f3e5ab]/80">
              {iconCodeFootprint.map((country, index) => {
                const isSaudi = country.name.en === "Saudi Arabia";
                return (
                  <div key={index} className="flex items-center gap-2 hover:text-white transition-colors cursor-default group/flag">
                    <motion.span
                      animate={isSaudi ? {} : { rotate: 360 }}
                      transition={
                        isSaudi
                          ? {}
                          : { repeat: Infinity, duration: 8, ease: "linear" }
                      }
                      className="inline-block text-base origin-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] cursor-pointer"
                    >
                      {country.flag}
                    </motion.span>
                    <span className="font-medium tracking-wide">{country.name[lang]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Copyright signature */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-[11px] font-mono tracking-widest text-luxgold/50">
              {t.footer.rights}
            </p>
            <p className="text-[10px] text-[#f3e5ab]/40">
              Designed with &hearts; in Doha & Cairo for Le Natural Cafe
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
