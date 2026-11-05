import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, createWhatsAppLink } from '../data/portfolioData';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Karya', href: '#karya' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5EEE5]/95 backdrop-blur-md border-b border-[#34221F]/10 shadow-xs py-3.5'
          : 'bg-[#F5EEE5] py-5 border-b border-[#34221F]/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark */}
          <a
            href="#beranda"
            className="group flex items-baseline gap-2 shrink-0 text-[#692329] focus:outline-hidden"
          >
            <span className="font-editorial text-2xl font-bold tracking-tight text-[#692329] group-hover:opacity-85 transition-opacity">
              Nova Sugesti
            </span>
            <span className="font-script text-xl text-[#B97C7C] hidden sm:inline">
              portfolio
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#34221F]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#692329] transition-colors relative py-1 hover:border-b-2 hover:border-[#692329] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action: WhatsApp Quick CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#692329] rounded-full hover:bg-[#521b20] active:scale-95 transition-all shadow-xs"
            >
              <span>Hubungi Nova</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#34221F] hover:bg-[#B97C7C]/15 transition-colors focus:outline-hidden"
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#34221F]/10 bg-[#F5EEE5] px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#34221F] hover:text-[#692329] hover:bg-[#B97C7C]/10 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#692329] rounded-lg hover:bg-[#521b20] transition-colors"
              >
                <span>Chat via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
