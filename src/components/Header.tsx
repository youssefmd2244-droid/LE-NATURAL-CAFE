import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Globe, Menu, X, Instagram, MapPin } from "lucide-react";

export const Header: React.FC = () => {
  const { lang, setLang, t, dir } = useLanguage();
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.ambiance, href: "#ambiance" },
    { label: t.nav.location, href: "#location" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrollActive
            ? "glass-panel py-3 shadow-lg border-b border-luxgold/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand Logo with 3D rotation & continuous dynamic RGB glow */}
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="relative flex items-center justify-center w-11 h-11 rounded-full border-2 bg-forest-dark animate-rgb-glow transition-all duration-500"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <Coffee className="w-5.5 h-5.5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] group-hover:scale-110 transition-transform duration-300" />
              {/* Backing visual depth */}
              <div className="absolute inset-0 rounded-full bg-luxgold/5 scale-110 blur-[2px] -z-1"></div>
            </motion.div>
            <div className="flex flex-col leading-none" dir="ltr">
              <span
                className="font-script text-3xl text-white gold-glow"
                style={{ lineHeight: 1 }}
              >
                Le Natural
              </span>
              <span className="text-[9px] tracking-[0.4em] text-luxgold font-medium uppercase font-sans mt-1">
                CAFÉ • LUSAIL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-sm font-medium tracking-widest text-[#f3e5ab]/80 hover:text-white transition-colors duration-300 py-1 group uppercase"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxgold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Localization Toggle and CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="lang-toggle-desktop"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3 py-1.5 rounded-full border border-luxgold/20 hover:border-luxgold/60 text-xs font-semibold tracking-widest text-luxgold flex items-center gap-2 bg-forest/40 hover:bg-forest-light transition-all duration-300"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "العربية" : "ENGLISH"}</span>
            </button>
            
            <a
              href="https://wa.me/97460086886"
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-5 py-2 rounded-sm bg-luxgold border border-luxgold text-forest-dark text-xs font-bold tracking-widest hover:bg-transparent hover:text-luxgold transition-all duration-300 font-sans uppercase"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile controllers */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="lang-toggle-mobile"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="p-2 rounded-full border border-luxgold/20 text-luxgold bg-forest-dark"
              aria-label="Toggle Language"
            >
              <Globe className="w-4 h-4" />
            </button>

            <button
              id="mobile-main-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#f3e5ab] hover:text-luxgold focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 w-full h-screen bg-forest-dark/95 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden border-b border-luxgold/25"
          >
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-widest text-[#f3e5ab] hover:text-luxgold transition-colors duration-300 uppercase py-2"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-4 items-center"
              >
                <a
                  href="https://wa.me/97460086886"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full max-w-xs py-3 rounded-md bg-luxgold text-forest-dark font-extrabold uppercase text-sm tracking-widest text-center"
                >
                  {lang === "en" ? "Private Reservation" : "الحجز الخاص المباشر"}
                </a>
                
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://www.instagram.com/lenatural.qa"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 rounded-full border border-luxgold/20 text-[#f3e5ab]"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://maps.app.goo.gl/2JBHuFdTf6ByTuBWA"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 rounded-full border border-luxgold/20 text-[#f3e5ab]"
                  >
                    <MapPin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
