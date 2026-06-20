import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export const FantasyParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate steady gold sparkling particles
    const pts = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.2, // 1.2px to 3.2px
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * -20 // negative delay so they start pre-warmed
    }));
    setParticles(pts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-radial-gradient">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-luxgold/50"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 5px rgba(212, 175, 55, 0.6)",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(p.id) * 30, 0],
            scale: [0.9, 1.4, 0.9],
            opacity: [0.15, 0.55, 0.15]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
