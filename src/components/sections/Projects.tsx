"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Layers,
  ArrowRight,
  ExternalLink,
  Target,
  Sparkles,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { ProjectItem } from "@/types/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ProjectModal } from "../ui/ProjectModal";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Content Strategy", "Social Media Design"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setActiveProject(projectsData[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!activeProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === activeProject.id);
    const prevIndex =
      currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1;
    setActiveProject(projectsData[prevIndex]);
  };

  return (
    <>
      <section
        id="projects"
        aria-label="Client Projects and Case Studies"
        className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-neutral-900/30 border-y border-neutral-200/60 dark:border-neutral-800/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="Selected Client Work"
              title="Featured Projects"
              subtitle="Real client deliverables across brand positioning, content strategies, and medical social media design."
              className="mb-0"
            />

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-neutral-200/60 dark:bg-neutral-800/60 border border-neutral-300/60 dark:border-neutral-700/60 self-start md:self-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-amber-500 text-black shadow-sm"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-soft hover:shadow-card hover:border-amber-500/40 transition-all duration-300"
              >
                {/* Visual Thumbnail with Overlay */}
                <div
                  className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <Badge variant="yellow" size="sm">
                      {project.category}
                    </Badge>
                    {project.slides && project.slides.length > 1 && (
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[11px] font-medium text-white border border-white/10">
                        {project.slides.length} Slides
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-lg bg-amber-500 text-black text-xs font-bold shadow-lg flex items-center gap-1.5">
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3
                      onClick={() => setActiveProject(project)}
                      className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Goal Snapshot */}
                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                    <div className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <Target className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">
                        {project.goals[0]}
                      </span>
                    </div>
                  </div>

                  {/* Footer Tools & Action */}
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-[11px] text-neutral-500 truncate">
                      <span>Tools:</span>
                      <span className="truncate">{project.tools.slice(0, 3).join(", ")}</span>
                    </div>

                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-semibold text-amber-500 hover:text-amber-400 flex items-center gap-1 flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
      />
    </>
  );
};
