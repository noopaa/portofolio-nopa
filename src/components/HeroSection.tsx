import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, createWhatsAppLink } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="beranda" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Strip (from reference poster) */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-widest text-[#34221F]/80 pb-4 border-b border-[#34221F]/20 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[#692329] text-base leading-none">✦</span>
            <span className="uppercase">{PERSONAL_INFO.profession}</span>
          </div>
          <div className="font-editorial text-base sm:text-lg font-bold text-[#692329]">
            {PERSONAL_INFO.year}
          </div>
        </div>

        {/* Giant PORTOFOLIO Heading */}
        <div className="w-full text-center my-2 select-none">
          <h1 className="font-bebas text-[clamp(4.5rem,15vw,13rem)] leading-[0.88] tracking-wider text-[#692329] drop-shadow-xs transition-all">
            PORTOFOLIO
          </h1>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mt-6 lg:mt-10">
          
          {/* Left Column: Editorial Statement & Signature */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#34221F] mb-1 leading-none">
                Desain yang
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#34221F] tracking-tight leading-tight">
                Menghubungkan. Menginspirasi.
              </h2>
            </div>

            <p className="font-body text-base sm:text-lg text-[#34221F]/85 leading-relaxed max-w-xl">
              {PERSONAL_INFO.bio}
            </p>

            <div className="pt-2">
              <div className="inline-block">
                <span className="font-signature text-5xl sm:text-6xl text-[#692329] block -rotate-3 select-none leading-none">
                  Nova Sugesti
                </span>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#34221F]/70 block mt-2 border-t border-[#34221F]/20 pt-1">
                  {PERSONAL_INFO.profession}
                </span>
              </div>
            </div>

            {/* Quick Interactive Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#karya"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-[#692329] rounded-full hover:bg-[#521b20] active:scale-98 transition-all shadow-md group"
              >
                <span>Lihat Karya Pilihan</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide text-[#692329] bg-[#B97C7C]/20 border border-[#B97C7C]/40 rounded-full hover:bg-[#B97C7C]/30 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#692329]" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>

            {/* Location & Availability Tag */}
            <div className="flex items-center gap-2 text-xs text-[#34221F]/70 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#692329]" />
              <span>Berbasis di {PERSONAL_INFO.location} • Tersedia untuk proyek baru</span>
            </div>
          </div>

          {/* Right Column: Arch Portrait with Rotating Badge */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              
              {/* Vertical fine editorial guideline behind arch */}
              <div className="absolute -top-6 right-8 w-px h-24 bg-[#34221F]/30 hidden sm:block" />
              <div className="absolute -bottom-8 right-8 w-px h-24 bg-[#34221F]/30 hidden sm:block" />

              {/* Arch Container */}
              <div className="relative rounded-t-[180px] sm:rounded-t-[210px] rounded-b-2xl overflow-hidden bg-[#DBB5AB] shadow-xl border border-[#B97C7C]/30 aspect-[3.6/5] flex items-end justify-center">
                
                {/* Subtle gradient light inside arch */}
                <div className="absolute inset-0 bg-radial from-white/20 via-transparent to-black/10 pointer-events-none" />
                
                {/* Exact preserved photo of Nova Sugesti */}
                <img
                  src="/assets/portfolio/nova_face_clean.png"
                  alt="Nova Sugesti - Web & UI Designer"
                  className="w-[90%] sm:w-[86%] h-auto max-h-[92%] object-contain object-bottom select-none drop-shadow-md z-10"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Soft bottom vignette */}
                <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#DBB5AB] to-transparent z-15 pointer-events-none" />
              </div>

              {/* Circular Rotating Badge: THOUGHTFUL DESIGN • MEANINGFUL IMPACT */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#692329] text-[#F5EEE5] shadow-lg flex items-center justify-center p-1 group cursor-pointer transition-transform hover:scale-105">
                  
                  {/* Rotating SVG circular text */}
                  <svg
                    className="w-full h-full animate-spin-slow"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <path
                      id="badgeCirclePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[9.5px] uppercase font-bold tracking-[0.19em] fill-[#F5EEE5]">
                      <textPath href="#badgeCirclePath" startOffset="0%">
                        THOUGHTFUL DESIGN • MEANINGFUL IMPACT •
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Star ✦ */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[#F5EEE5] text-lg sm:text-xl leading-none">✦</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
