import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Calendar, User, Layers, MessageCircle } from 'lucide-react';
import { Project } from '../types/portfolio';
import { createWhatsAppLink } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectWaMessage = `Halo Nova, saya melihat proyek "${project.title}" (${project.category}) di portofolio Anda dan tertarik untuk mendiskusikan proyek desain serupa.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#F5EEE5] text-[#34221F] rounded-2xl shadow-2xl overflow-hidden border border-[#B97C7C]/30 my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5EEE5]/95 backdrop-blur-xs border-b border-[#34221F]/10">
          <div className="flex items-center gap-3 text-xs tracking-wider font-semibold uppercase text-[#692329]">
            <span>{project.number}</span>
            <span aria-hidden="true">•</span>
            <span>{project.category}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#34221F]/70 hover:text-[#34221F] hover:bg-[#B97C7C]/20 transition-colors"
            aria-label="Tutup detail proyek"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Title & Subtitle */}
          <div>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#692329]">
              {project.title}
            </h3>
            <p className="text-base text-[#34221F]/80 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Project Image Showcase */}
          <div className="relative rounded-xl overflow-hidden bg-[#34221F]/5 border border-[#34221F]/10 aspect-video sm:aspect-16/9 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Meta Info Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#B97C7C]/10 border border-[#B97C7C]/20 text-xs sm:text-sm">
            {project.client && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#692329] shrink-0" />
                <div>
                  <span className="block text-[#34221F]/60 text-[11px] uppercase">Klien</span>
                  <span className="font-semibold text-[#34221F]">{project.client}</span>
                </div>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#692329] shrink-0" />
                <div>
                  <span className="block text-[#34221F]/60 text-[11px] uppercase">Tahun</span>
                  <span className="font-semibold text-[#34221F]">{project.year}</span>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#692329] shrink-0" />
              <div>
                <span className="block text-[#34221F]/60 text-[11px] uppercase">Kategori</span>
                <span className="font-semibold text-[#34221F]">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h4 className="font-editorial text-xl font-bold text-[#34221F]">
              Tentang Proyek
            </h4>
            <p className="text-sm sm:text-base text-[#34221F]/85 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Deliverables / Cakupan Pekerjaan */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-editorial text-lg font-bold text-[#34221F]">
                Cakupan Pekerjaan & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#34221F]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#692329] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights / Hasil Proyek */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="p-4 rounded-xl bg-white/70 border border-[#34221F]/10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#692329] block">
                Pencapaian & Dampak Desain
              </span>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#34221F]/80">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools & Tags */}
          {project.tools && project.tools.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-[#34221F]/70">
              <span className="font-semibold text-[#34221F]">Tools yang digunakan:</span>
              {project.tools.map((tool, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-[#34221F]/5 border border-[#34221F]/10">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#F5EEE5] border-t border-[#34221F]/10">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#34221F]/80 hover:text-[#34221F] rounded-lg transition-colors"
          >
            Tutup
          </button>

          <a
            href={createWhatsAppLink(projectWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#692329] rounded-full hover:bg-[#521b20] active:scale-95 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya Proyek Serupa via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
