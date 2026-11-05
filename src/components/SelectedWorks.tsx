import React, { useState } from 'react';
import { ArrowUpRight, Plus, Eye, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { INITIAL_PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { AddProjectModal } from './AddProjectModal';

export const SelectedWorks: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('nova_portfolio_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_PROJECTS;
      }
    }
    return INITIAL_PROJECTS;
  });

  const [filter, setFilter] = useState<string>('Semua');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddProject = (newProj: Project) => {
    const updated = [...projects, newProj];
    setProjects(updated);
    localStorage.setItem('nova_portfolio_projects', JSON.stringify(updated));
  };

  const filteredProjects = filter === 'Semua'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="karya" className="py-14 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Stars */}
        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
          <span className="text-[#692329] text-base leading-none">✦</span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-[0.2em] uppercase text-[#34221F]">
            KARYA PILIHAN
          </h2>
          <span className="text-[#692329] text-base leading-none">✦</span>
        </div>

        {/* Filter Controls & Add Project Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#34221F]/10">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {['Semua', 'Desain Web', 'Desain UI/UX'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  filter === cat
                    ? 'bg-[#692329] text-[#F5EEE5] shadow-xs'
                    : 'bg-[#B97C7C]/15 text-[#34221F]/80 hover:bg-[#B97C7C]/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Add Project Action */}
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#692329] bg-white/70 border border-[#B97C7C]/40 rounded-full hover:bg-white active:scale-95 transition-all shadow-2xs"
            title="Tambah proyek karya baru"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Proyek</span>
          </button>
        </div>

        {/* Projects 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer flex flex-col justify-between bg-transparent transition-all duration-300"
            >
              {/* Image Container with subtle framing and hover zoom */}
              <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-[#34221F]/5 border border-[#34221F]/15 shadow-sm group-hover:shadow-md transition-all">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#692329]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5EEE5] text-[#692329] text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Detail</span>
                  </span>
                </div>
              </div>

              {/* Project Card Meta & Title */}
              <div className="pt-4 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  {/* Number & Category */}
                  <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#692329] uppercase">
                    <span>{project.number}</span>
                    <span className="mx-1.5 text-[#B97C7C]">•</span>
                    <span>{project.category}</span>
                  </div>

                  {/* Project Name */}
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#34221F] group-hover:text-[#692329] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#34221F]/75 line-clamp-2 leading-relaxed">
                    {project.subtitle || project.description}
                  </p>
                </div>

                {/* Circle Arrow Button (as seen in poster reference) */}
                <div
                  className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#34221F]/30 flex items-center justify-center text-[#34221F] group-hover:border-[#692329] group-hover:bg-[#692329] group-hover:text-white transition-all duration-300 mt-1 shadow-2xs"
                  aria-label={`Lihat detail ${project.title}`}
                >
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when filtering */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center text-sm text-[#34221F]/60">
            Tidak ada proyek pada kategori ini.
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
        currentCount={projects.length}
      />
    </section>
  );
};
