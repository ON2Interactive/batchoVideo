
import React, { useEffect, useState } from 'react';
import { ProjectMetadata } from '../../types';
import { dbHelpers, authHelpers } from '../../lib/supabase';
import { X, Clock, Trash2, FolderOpen, Search } from 'lucide-react';

interface Props {
  onClose: () => void;
  onLoadProject: (id: string) => void;
}

const ProjectGallery: React.FC<Props> = ({ onClose, onLoadProject }) => {
  const [projects, setProjects] = useState<ProjectMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const user = await authHelpers.getCurrentUser();
      if (!user) return; // Or show error

      const { data, error } = await dbHelpers.getUserProjects(user.id);
      if (error) throw error;

      if (data) {
        // Map Supabase rows to ProjectMetadata
        const mapped: ProjectMetadata[] = data.map((p: any) => ({
          id: p.id,
          name: p.name,
          thumbnail: p.thumbnail,
          updatedAt: new Date(p.updated_at).getTime(), // Supabase returns ISO string
          pages: p.editor_state?.pages || [] // Optional if needed for gallery
        }));
        setProjects(mapped);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this project?')) {
      const { error } = await dbHelpers.deleteProject(id);
      if (error) {
        console.error('Delete failed:', error);
        alert('Failed to delete project. You may not have permission or there was a network error.');
      } else {
        loadProjects();
      }
    }
  };

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#121214] border border-zinc-800 w-full max-w-5xl h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="px-8 py-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400">
              <FolderOpen size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Project Library</h2>
              <p className="text-xs text-zinc-500 font-medium">{projects.length} designs stored</p>
            </div>
          </div>

          {/* Completed missing search and close controls */}
          <div className="flex items-center gap-4 flex-1 max-w-md ml-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-800 border-zinc-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors ml-4">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-zinc-500">
              <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
              <p className="text-sm font-bold uppercase tracking-widest">Loading Library...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="w-20 h-20 bg-zinc-800/50 rounded-full flex items-center justify-center text-zinc-600">
                <FolderOpen size={40} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">No projects found</h3>
                <p className="text-sm text-zinc-500 max-w-[240px] mt-1">
                  {search ? `No results for "${search}"` : "You haven't saved any designs yet. Create something beautiful!"}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onLoadProject(project.id)}
                  className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="aspect-video bg-[#0a0a0b] relative overflow-hidden flex items-center justify-center group-hover:bg-black transition-colors">
                    {project.thumbnail ? (
                      <img src={project.thumbnail} alt={project.name} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-16 h-16 rounded-xl border-2 border-dashed border-zinc-800 flex items-center justify-center text-zinc-800">
                        <FolderOpen size={32} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors pointer-events-none" />
                  </div>

                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-sm text-white truncate group-hover:text-blue-400 transition-colors">{project.name}</h3>
                      <button
                        onClick={(e) => handleDelete(e, project.id)}
                        className="p-1.5 hover:bg-red-500/10 text-zinc-600 hover:text-red-500 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      <Clock size={12} />
                      {new Date(project.updatedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Fixed error in App.tsx by adding the required default export
export default ProjectGallery;
