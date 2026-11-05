import React, { useState } from 'react';
import { X, Plus, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types/portfolio';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
  currentCount: number;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
  currentCount
}) => {
  const nextNum = String(currentCount + 1).padStart(2, '0');

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Desain Web' | 'Desain UI/UX' | 'Branding' | 'Desain Grafis'>('Desain Web');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [year, setYear] = useState('2026');
  const [imageUrl, setImageUrl] = useState('');
  const [deliverablesInput, setDeliverablesInput] = useState('Responsive Web, UI Design, Design System');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProject: Project = {
      id: `project-${Date.now()}`,
      number: nextNum,
      title: title.trim().toUpperCase(),
      category,
      subtitle: subtitle.trim() || `${category} profesional`,
      description: description.trim(),
      fullDescription: description.trim(),
      image: imageUrl.trim() || '/assets/portfolio/project_aurora.png',
      client: client.trim() || 'Klien Privat',
      year: year.trim() || '2026',
      deliverables: deliverablesInput.split(',').map((s) => s.trim()).filter(Boolean),
      tools: ['Figma', 'React', 'Tailwind CSS'],
      tags: [category, 'Portfolio', 'Case Study']
    };

    onAddProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-[#F5EEE5] text-[#34221F] rounded-2xl shadow-2xl overflow-hidden border border-[#B97C7C]/30 my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#F5EEE5] border-b border-[#34221F]/10">
          <div className="flex items-center gap-2">
            <span className="font-editorial text-2xl font-bold text-[#692329]">
              Tambah Karya Baru
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#B97C7C]/20 text-[#692329] font-semibold">
              #{nextNum}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#34221F]/70 hover:text-[#34221F] hover:bg-[#B97C7C]/20 transition-colors"
            aria-label="Tutup formulir tambah karya"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[78vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#34221F]/80 mb-1">
              Nama Proyek *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: SERENE SPA & RESORT"
              className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-[#34221F]/20 text-[#34221F] placeholder:text-[#34221F]/40 focus:outline-hidden focus:border-[#692329] focus:ring-1 focus:ring-[#692329] text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#34221F]/80 mb-1">
                Kategori *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-[#34221F]/20 text-[#34221F] focus:outline-hidden focus:border-[#692329] focus:ring-1 focus:ring-[#692329] text-sm"
              >
                <option value="Desain Web">Desain Web</option>
                <option value="Desain UI/UX">Desain UI/UX</option>
                <option value="Branding">Branding</option>
                <option value="Desain Grafis">Desain Grafis</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#34221F]/80 mb-1">
                Tahun
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2026"
                className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-[#34221F]/20 text-[#34221F] focus:outline-hidden focus:border-[#692329] focus:ring-1 focus:ring-[#692329] text-sm"
              >
              </input>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#34221F]/80 mb-1">
              Subjudul / Keterangan Singkat *
            </label>
            <input
              type="text"
              required
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Contoh: Website klinik kesehatan dan relaksasi alami"
              className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-[#34221F]/20 text-[#34221F] placeholder:text-[#34221F]/40 focus:outline-hidden focus:border-[#692329] focus:ring-1 focus:ring-[#692329] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#34221F]/80 mb-1">
              Deskripsi Proyek *
            </label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Jelaskan tujuan desain, tantangan yang diselesaikan, dan solusi estetis yang dihadirkan..."
              className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-[#34221F]/20 text-[#34221F] placeholder:text-[#34221F]/40 focus:outline-hidden focus:border-[#692329] focus:ring-1 focus:ring-[#692329] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#34221F]/80 mb-1">
              Klien (Opsional)
            </label>
            <input
              type="text"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              placeholder="Contoh: Serene Wellness Studio"
              className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-[#34221F]/20 text-[#34221F] focus:outline-hidden focus:border-[#692329] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#34221F]/80 mb-1">
              URL Gambar Mockup / Preview
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="/assets/portfolio/project_aurora.png atau link gambar"
                className="grow px-3.5 py-2 rounded-lg bg-white/80 border border-[#34221F]/20 text-[#34221F] placeholder:text-[#34221F]/40 focus:outline-hidden focus:border-[#692329] text-sm"
              />
              <button
                type="button"
                onClick={() => setImageUrl('/assets/portfolio/project_aurora.png')}
                className="px-3 py-2 text-xs bg-[#B97C7C]/20 text-[#692329] rounded-lg hover:bg-[#B97C7C]/30 transition-colors shrink-0"
                title="Gunakan sampel interior"
              >
                <ImageIcon className="w-4 h-4 inline" />
              </button>
            </div>
            <p className="text-[11px] text-[#34221F]/60 mt-1">
              Kosongkan untuk memakai sampel mockup visual bawaan.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#34221F]/80 mb-1">
              Deliverables (Pisahkan dengan koma)
            </label>
            <input
              type="text"
              value={deliverablesInput}
              onChange={(e) => setDeliverablesInput(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-[#34221F]/20 text-[#34221F] focus:outline-hidden focus:border-[#692329] text-sm"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#34221F]/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#34221F]/70 hover:text-[#34221F] rounded-lg transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#692329] rounded-full hover:bg-[#521b20] active:scale-95 transition-all shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Simpan Karya</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
