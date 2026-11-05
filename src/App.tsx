/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SelectedWorks } from './components/SelectedWorks';
import { ProcessAndServices } from './components/ProcessAndServices';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5EEE5] text-[#34221F] selection:bg-[#B97C7C] selection:text-white flex flex-col font-body">
      {/* Editorial Navigation */}
      <Header />

      {/* Main Content Flow */}
      <main className="grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Selected Works Gallery (3 Columns) */}
        <SelectedWorks />

        {/* Process & Services Combined Layout */}
        <ProcessAndServices />
      </main>

      {/* Footer / Contact Section */}
      <ContactSection />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
