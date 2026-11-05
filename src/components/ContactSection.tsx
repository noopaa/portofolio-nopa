import React, { useState } from 'react';
import {
  Mail,
  Globe,
  MapPin,
  Instagram,
  Linkedin,
  ArrowRight,
  MessageCircle,
  Send,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, createWhatsAppLink } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [projectTopic, setProjectTopic] = useState('Desain Web');
  const [userNote, setUserNote] = useState('');

  const handleCustomWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Halo Nova, nama saya ${clientName || 'Calon Klien'}. Saya tertarik berdiskusi mengenai ${projectTopic}.${userNote ? ` Catatan: "${userNote}"` : ''}`;
    window.open(createWhatsAppLink(formatted), '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="kontak" className="bg-[#692329] text-[#F5EEE5] pt-14 pb-12 sm:pt-20 sm:pb-16 relative overflow-hidden">
      
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content Grid (Matching Reference Poster) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start pb-12 border-b border-[#F5EEE5]/15">
          
          {/* LEFT COLUMN: Decorative Editorial Headline */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <p className="font-script text-3xl sm:text-4xl text-[#F5EEE5] leading-tight select-none">
                Mari berkolaborasi
              </p>
              <p className="font-script text-2xl sm:text-3xl text-[#F5EEE5]/90 leading-relaxed select-none">
                untuk menciptakan sesuatu yang luar biasa ✦
              </p>
            </div>
            <p className="font-body text-xs sm:text-sm text-[#F5EEE5]/75 leading-relaxed pt-2">
              Siap mewujudkan ide dan meningkatkan standar visual proyek Anda dengan desain yang dipikirkan matang dan berorientasi hasil.
            </p>
          </div>

          {/* MIDDLE COLUMN: Contact Info, Socials, & QR Code */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* HUBUNGI SAYA */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F5EEE5]">
                  HUBUNGI SAYA
                </span>
                <div className="h-px bg-[#F5EEE5]/20 grow" />
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#F5EEE5]/90">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#F5EEE5]" />
                  </div>
                  <span className="font-medium">{PERSONAL_INFO.email}</span>
                </a>

                <a
                  href={`https://${PERSONAL_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <Globe className="w-3.5 h-3.5 text-[#F5EEE5]" />
                  </div>
                  <span className="font-medium">{PERSONAL_INFO.website}</span>
                </a>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#F5EEE5]" />
                  </div>
                  <span className="font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* IKUTI SAYA & QR CODE */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F5EEE5]">
                  IKUTI SAYA
                </span>
                <div className="h-px bg-[#F5EEE5]/20 grow" />
              </div>

              <div className="flex items-center gap-4">
                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Nova Sugesti"
                    className="w-8 h-8 rounded-full border border-[#F5EEE5]/30 flex items-center justify-center text-[#F5EEE5] hover:bg-[#F5EEE5] hover:text-[#692329] transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dribbble Nova Sugesti"
                    className="w-8 h-8 rounded-full border border-[#F5EEE5]/30 flex items-center justify-center text-[#F5EEE5] hover:bg-[#F5EEE5] hover:text-[#692329] transition-all"
                  >
                    <Globe className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Nova Sugesti"
                    className="w-8 h-8 rounded-full border border-[#F5EEE5]/30 flex items-center justify-center text-[#F5EEE5] hover:bg-[#F5EEE5] hover:text-[#692329] transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest Nova Sugesti"
                    className="w-8 h-8 rounded-full border border-[#F5EEE5]/30 flex items-center justify-center text-[#F5EEE5] hover:bg-[#F5EEE5] hover:text-[#692329] transition-all"
                  >
                    <span className="font-serif font-bold text-xs">P</span>
                  </a>
                </div>

                {/* QR Code Card from reference poster */}
                <div className="flex items-center gap-2.5 pl-2 border-l border-[#F5EEE5]/20">
                  <div className="w-12 h-12 bg-white rounded-md p-1 shadow-xs flex items-center justify-center shrink-0">
                    <img
                      src="/assets/portfolio/qr_code.png"
                      alt="QR Code Portofolio"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-[10px] text-[#F5EEE5]/80 leading-tight">
                    <span>Lihat karya lebih banyak</span>
                    <span className="block text-base leading-none text-[#F5EEE5] pt-0.5">↴</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: WHATSAPP CTA — PRIORITAS UTAMA */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Authentic Poster WhatsApp Pill Card */}
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-white text-[#34221F] rounded-2xl p-4 sm:p-5 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 border-2 border-transparent hover:border-[#25D366]/40"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#34221F]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-[#34221F]">
                    Chat via WhatsApp
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#692329] group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Prominent Phone Number */}
              <div className="pt-3 text-center sm:text-left">
                <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-wider text-[#692329]">
                  {PERSONAL_INFO.phoneDisplay}
                </span>
                <span className="block text-[11px] text-[#34221F]/60 font-medium">
                  Klik untuk membuka chat langsung
                </span>
              </div>
            </a>

            {/* Quick Interactive WhatsApp Message Composer */}
            <form
              onSubmit={handleCustomWhatsAppSend}
              className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2.5 text-xs"
            >
              <span className="font-semibold text-[#F5EEE5] block tracking-wide">
                Kirim Pesan Cepat:
              </span>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Nama Anda"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-md bg-white/20 placeholder:text-[#F5EEE5]/60 text-white border border-white/20 focus:outline-hidden focus:bg-white/30 text-xs"
                />

                <select
                  value={projectTopic}
                  onChange={(e) => setProjectTopic(e.target.value)}
                  className="w-full px-2 py-1.5 rounded-md bg-[#521b20] text-white border border-white/20 focus:outline-hidden text-xs"
                >
                  <option value="Desain Web">Desain Web</option>
                  <option value="Desain UI/UX">Desain UI/UX</option>
                  <option value="Branding">Branding</option>
                  <option value="Sistem Desain">Sistem Desain</option>
                  <option value="Konsultasi">Konsultasi</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Rencana proyek singkat (opsional)"
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-md bg-white/20 placeholder:text-[#F5EEE5]/60 text-white border border-white/20 focus:outline-hidden focus:bg-white/30 text-xs"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold tracking-wide transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EEE5]/70">
          <div>
            © {PERSONAL_INFO.year} {PERSONAL_INFO.name}. All rights reserved. Personal Creative Portfolio.
          </div>
          <div className="flex items-center gap-4">
            <span>Serang, Banten, Indonesia</span>
            <span>•</span>
            <a
              href="#beranda"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Kembali ke Atas ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
