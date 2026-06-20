import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { Sparkles, Compass, Eye, VolumeX, ShieldCheck } from "lucide-react";

export const AmbianceSection: React.FC = () => {
  const { t, lang } = useLanguage();

  const luxuryTraits = [
    {
      icon: <VolumeX className="w-5 h-5 text-luxgold" />,
      titleEn: "Acoustic Silence",
      titleAr: "هدوء صوتي مخصص",
      descEn: "Engineered physical sound buffers for private business or intimate conversation.",
      descAr: "عوازل مادية مخصصة للاجتماعات الهادئة والخصوصية المطلقة."
    },
    {
      icon: <Eye className="w-5 h-5 text-luxgold" />,
      titleEn: "Eye-Safe Luminescence",
      titleAr: "إضاءة صحية مريحة",
      descEn: "Carefully calibrated 2200K warm gold lights to prevent retinal fatigue.",
      descAr: "إضاءة ذهبية تمت معايرتها بدقة ٢٢٠٠ كلفن مريحة للعين وتحمي الرؤية."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-luxgold" />,
      titleEn: "Sartorial Baristas",
      titleAr: "باريستا ذوو مظهر ملكي",
      descEn: "Baristas clad in elite designer darkwear, serving with extreme elegance.",
      descAr: "طاقم عمل يرتدي ملابس سوداء فاخرة، يقدمون الخدمة برقي لا مثيل له."
    }
  ];

  return (
    <section id="ambiance" className="py-24 bg-forest relative overflow-hidden border-t border-b border-luxgold/10">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-luxgold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 flex flex-col items-start text-start"
          >
            <div className="inline-flex items-center gap-2 bg-luxgold/10 px-4 py-1.5 rounded-full border border-luxgold/20">
              <Sparkles className="w-3.5 h-3.5 text-luxgold" />
              <span className="text-[10px] uppercase font-semibold tracking-[0.3em] font-sans text-[#f3e5ab]">
                {t.ambiance.badge}
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider">
                {t.ambiance.title}
              </h2>
              <p className="text-luxgold text-xs sm:text-sm font-bold tracking-widest font-sans uppercase">
                {t.ambiance.subtitle}
              </p>
            </div>

            <p className="text-[#f3e5ab]/80 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              {t.ambiance.description1}
            </p>

            <p className="text-[#f3e5ab]/70 text-sm font-light leading-relaxed max-w-2xl">
              {t.ambiance.description2}
            </p>

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-luxgold/15 w-full">
              {t.ambiance.stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-luxgold font-mono gold-glow">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#f3e5ab]/70 uppercase tracking-widest font-sans mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Architecture Highlights Column */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-md border border-luxgold/20 flex flex-col gap-6 bg-forest-dark/45 animate-pulse-slow">
              <h4 className="text-[#f3e5ab] text-sm font-bold uppercase tracking-[0.2em] pb-3 border-b border-luxgold/15">
                {lang === "en" ? "PHYSICAL SANCTUARY DETAILS" : "تفاصيل الملاذ المادي الراقي"}
              </h4>

              {luxuryTraits.map((trait, index) => (
                <div key={index} className="flex gap-4 items-start text-start">
                  <div className="p-2.5 rounded-sm bg-forest border border-luxgold/10 flex-shrink-0">
                    {trait.icon}
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-bold tracking-wide">
                      {lang === "en" ? trait.titleEn : trait.titleAr}
                    </h5>
                    <p className="text-xs text-[#f3e5ab]/70 font-light mt-1">
                      {lang === "en" ? trait.descEn : trait.descAr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
