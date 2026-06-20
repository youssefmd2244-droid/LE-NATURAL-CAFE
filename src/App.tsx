/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { LanguageProvider } from "./components/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/MenuSection";
import { AmbianceSection } from "./components/AmbianceSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { FABs } from "./components/FABs";
import { FantasyParticles } from "./components/FantasyParticles";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-forest-dark flex flex-col justify-between selection:bg-luxgold selection:text-forest-dark antialiased relative overflow-x-hidden">
        {/* Dreamy golden fantasy stars background */}
        <FantasyParticles />

        {/* Top bar header */}
        <Header />

        {/* Home hero viewport */}
        <main className="flex-grow relative z-10">
          {/* Main Visual landing with background */}
          <Hero />

          {/* Section 1: The Gourmet Menu Catalog with category filters */}
          <MenuSection />

          {/* Section 2: Immersive story & luxurious statistics */}
          <AmbianceSection />

          {/* Section 3: Physical directions & times */}
          <LocationSection />
        </main>

        {/* Floating action items */}
        <FABs />

        {/* Global footer representing ICON CODE */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
