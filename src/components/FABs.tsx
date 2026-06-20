import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Instagram, MapPin } from "lucide-react";

export const FABs: React.FC = () => {
  const { lang, t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollBottom = scrollY + windowHeight;

      // Only show after scrolling down 120px
      if (scrollY > 120) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Slightly fade out near footer to keep layout pristine
      const footerThreshold = totalHeight - 450;
      if (scrollBottom >= footerThreshold) {
        setOpacity(0.35);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rightFabs = [
    {
      id: "whatsapp",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.973L2 22l5.233-1.371a9.927 9.927 0 0 0 4.775 1.224h.005c5.505 0 9.99-4.478 9.99-9.985 0-2.67-1.037-5.18-2.92-7.062a9.94 9.94 0 0 0-7.084-2.922zm5.786 14.155c-.237.669-1.392 1.282-1.92 1.343-.482.056-.967.261-3.078-.574-2.538-1.002-4.14-3.585-4.266-3.753-.128-.167-1.036-1.373-1.036-2.622 0-1.25.64-1.862.868-2.115.228-.254.498-.318.663-.318l1.192.003c.182.001.428-.07.669.514.249.605.852 2.079.926 2.228.074.15.124.324.025.522s-.149.324-.298.497c-.15.174-.315.347-.45.492-.15.161-.307.337-.132.637.175.3.778 1.284 1.669 2.072.152.134.291.224.444.271.884.7 1.48.572 1.688.35.228-.243.852-1.001 1.08-1.343.228.343.149.324.428.433s1.777.838 2.083.992c.307.155.512.228.587.357s.075.922-.162 1.591z" />
        </svg>
      ),
      link: "https://wa.me/97460086886",
      labelEn: "WhatsApp Live Order",
      labelAr: "اطلب الآن عبر الواتساب",
    }
  ];

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* BOTTOM RIGHT CLUSTER (WhatsApp & Socials) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, x: 50 }}
            animate={{ opacity, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.7, x: 50 }}
            transition={{ duration: 0.5 }}
            style={{ transition: "opacity 0.4s ease" }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center"
          >
            {rightFabs.map((fab, i) => (
              <motion.div
                key={fab.id}
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }
                }}
                className="relative"
              >
                <a
                  href={fab.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="relative flex items-center justify-center w-13 h-13 rounded-full border-2 bg-gradient-to-b from-[#071310] to-[#030807] text-white animate-rgb-glow shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300 group"
                  title={lang === "en" ? fab.labelEn : fab.labelAr}
                  aria-label={lang === "en" ? fab.labelEn : fab.labelAr}
                >
                  {/* Inside Icon (counter-rotate slightly to remain readable on hover, but beautiful) */}
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {fab.icon}
                  </div>

                  {/* Bubble tooltip */}
                  <span className={`absolute ${lang === "ar" ? "right-16" : "right-16"} whitespace-nowrap bg-[#030807] border border-luxgold/30 text-[10px] font-mono tracking-widest uppercase text-luxgold px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 ${lang === "ar" ? "font-arabic" : ""}`}>
                    {lang === "en" ? fab.labelEn : fab.labelAr}
                  </span>
                  
                  {/* Glowing pulses */}
                  <span className="absolute -inset-1 rounded-full border border-luxgold/20 animate-ping opacity-60 pointer-events-none"></span>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* BOTTOM LEFT CLUSTERS - EXTREME LEFT CALL DIALER (أقصى شمال) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, x: -50 }}
            animate={{ opacity, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.7, x: -50 }}
            transition={{ duration: 0.5 }}
            style={{ transition: "opacity 0.4s ease" }}
            className="fixed bottom-6 left-6 z-50"
          >
            <motion.div
              animate={{
                y: [0, -6, 0]
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }
              }}
              className="relative"
            >
              <a
                href="tel:+97460086886"
                className="relative flex items-center justify-center w-13 h-13 rounded-full border-2 bg-gradient-to-b from-[#071310] to-[#030807] text-white animate-rgb-glow shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300 group"
                title={lang === "en" ? "Call Le Natural Cafe" : "اتصال مباشر بالمقهى"}
                aria-label={lang === "en" ? "Call Le Natural Cafe" : "اتصال مباشر بالمقهى"}
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5.5 h-5.5 text-white" />
                </div>

                {/* Left Bubble tooltip */}
                <span className={`absolute ${lang === "ar" ? "left-16" : "left-16"} whitespace-nowrap bg-[#030807] border border-luxgold/30 text-[10px] font-mono tracking-widest uppercase text-luxgold px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -translate-x-2 group-hover:translate-x-0 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {lang === "en" ? "Direct Call Center" : "لوحة الاتصال المباشر"}
                </span>

                {/* Glow ring */}
                <span className="absolute -inset-1.5 rounded-full border border-neon-accent/30 animate-pulse pointer-events-none"></span>
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
