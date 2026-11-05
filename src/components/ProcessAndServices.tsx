import React, { useState } from 'react';
import {
  Search,
  Lightbulb,
  PenTool,
  Rocket,
  Monitor,
  Smartphone,
  Feather,
  Layers,
  Image as ImageIcon,
  Compass,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { PROCESS_STEPS, SERVICES, createWhatsAppLink } from '../data/portfolioData';
import { Service } from '../types/portfolio';

export const ProcessAndServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Icon mapping for Process Steps (Deep Burgundy circles, white icon)
  const renderProcessIcon = (icon: string) => {
    switch (icon) {
      case 'search':
        return <Search className="w-5 h-5 text-[#F5EEE5]" />;
      case 'lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#F5EEE5]" />;
      case 'pencil':
        return <PenTool className="w-5 h-5 text-[#F5EEE5]" />;
      case 'rocket':
        return <Rocket className="w-5 h-5 text-[#F5EEE5]" />;
      default:
        return <Search className="w-5 h-5 text-[#F5EEE5]" />;
    }
  };

  // Icon mapping for Services (Dusty Rose circles, burgundy icon)
  const renderServiceIcon = (icon: string) => {
    switch (icon) {
      case 'laptop':
        return <Monitor className="w-5 h-5 text-[#692329]" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-[#692329]" />;
      case 'feather':
        return <Feather className="w-5 h-5 text-[#692329]" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#692329]" />;
      case 'image':
        return <ImageIcon className="w-5 h-5 text-[#692329]" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-[#692329]" />;
      default:
        return <Monitor className="w-5 h-5 text-[#692329]" />;
    }
  };

  return (
    <section id="layanan" className="py-14 sm:py-20 border-t border-[#34221F]/15 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout: PROSES KERJA (Left) & LAYANAN (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* LEFT: PROSES KERJA */}
          <div id="tentang" className="lg:col-span-5 relative">
            
            {/* Header with line */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-editorial text-2xl font-bold tracking-[0.18em] uppercase text-[#34221F] whitespace-nowrap">
                PROSES KERJA
              </h2>
              <div className="h-px bg-[#34221F]/25 grow" />
            </div>

            {/* Vertical Timeline Steps */}
            <div className="relative space-y-6 sm:space-y-7 z-10">
              
              {/* Connecting vertical line behind icons */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-[#692329]/25 -translate-x-1/2" />

              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="relative flex items-start gap-4 group">
                  
                  {/* Burgundy Circle Icon */}
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#692329] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#521b20] transition-all">
                    {renderProcessIcon(step.icon)}
                  </div>

                  {/* Step Description */}
                  <div className="pt-1 space-y-0.5">
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#34221F] group-hover:text-[#692329] transition-colors leading-tight">
                      {step.step}. {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#34221F]/75 leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botanical Floral Accent Illustration (as seen in poster) */}
            <div className="hidden sm:block absolute right-2 bottom-0 w-36 h-48 opacity-25 pointer-events-none select-none text-[#B97C7C]">
              <svg viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M50 140 C50 100 52 70 48 30" />
                <path d="M48 30 C45 20 50 12 55 20 C60 28 50 35 48 30" />
                <path d="M50 100 C65 95 72 85 68 80 C60 75 52 88 50 90" />
                <path d="M49 80 C35 75 28 65 32 60 C40 55 48 68 49 70" />
                <path d="M50 60 C62 55 68 45 65 40 C58 35 52 48 50 50" />
                <circle cx="55" cy="18" r="2" fill="currentColor" />
                <circle cx="68" cy="80" r="1.5" fill="currentColor" />
                <circle cx="32" cy="60" r="1.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Divider between sections on desktop */}
          <div className="hidden lg:block lg:col-span-1 border-r border-[#34221F]/15 h-full" />

          {/* RIGHT: LAYANAN */}
          <div className="lg:col-span-6 relative">
            
            {/* Header with line */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-editorial text-2xl font-bold tracking-[0.18em] uppercase text-[#34221F] whitespace-nowrap">
                LAYANAN
              </h2>
              <div className="h-px bg-[#34221F]/25 grow" />
            </div>

            {/* 6 Services Grid (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer flex items-start gap-3.5 p-2 rounded-xl hover:bg-[#B97C7C]/10 transition-colors"
                >
                  {/* Dusty Rose Circle Icon */}
                  <div className="shrink-0 w-11 h-11 rounded-full bg-[#DBB5AB] flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-[#cfa599] transition-all">
                    {renderServiceIcon(service.icon)}
                  </div>

                  {/* Service Text */}
                  <div className="space-y-1">
                    <h3 className="font-editorial text-base sm:text-lg font-bold text-[#34221F] group-hover:text-[#692329] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#34221F]/75 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#692329] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Detail & Konsultasi</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick banner below services */}
            <div className="mt-8 p-4 rounded-xl bg-[#DBB5AB]/30 border border-[#B97C7C]/30 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#34221F]">
                <span className="font-semibold block text-[#692329]">Butuh penyesuaian khusus?</span>
                <span>Konsultasikan lingkup proyek Anda secara fleksibel via WhatsApp.</span>
              </div>
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#692329] rounded-full hover:bg-[#521b20] transition-colors"
              >
                Tanya Nova
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div
            className="relative w-full max-w-lg bg-[#F5EEE5] text-[#34221F] rounded-2xl shadow-2xl p-6 border border-[#B97C7C]/30 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#34221F]/10 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DBB5AB] flex items-center justify-center">
                  {renderServiceIcon(selectedService.icon)}
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#692329]">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-1 rounded-full text-[#34221F]/70 hover:text-[#34221F]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#34221F]/85 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#692329] block">
                Deliverables Yang Anda Dapatkan:
              </span>
              <div className="space-y-1.5">
                {selectedService.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#34221F]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#692329] shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#34221F]/10">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-3.5 py-2 text-xs font-semibold text-[#34221F]/70 hover:text-[#34221F]"
              >
                Tutup
              </button>
              <a
                href={createWhatsAppLink(selectedService.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#692329] rounded-full hover:bg-[#521b20] transition-colors shadow-xs"
              >
                <span>Pesan Layanan via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
