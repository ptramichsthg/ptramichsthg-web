"use client"

import Nav from "@/components/navbar/Nav"
import ProjectCard from "@/components/projects/ProjectCard"
import { projects } from "@/lib/projectData"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const { t } = useLanguage()

  return (
    <>
      <Nav />
      <main className="flex min-h-screen w-full flex-col items-center pt-32 pb-24">
        <div className="mx-auto flex w-[90%] flex-col items-start lg:max-w-[1212.8px]">
          <Link 
            href="/#projects" 
            className="mb-8 flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-medium group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            {t.nav.home}
          </Link>
          
          <div className="mb-12 flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {t.projects.title || "Semua Proyek"}
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Arsip lengkap dari seluruh proyek, eksperimen, dan sistem aplikasi yang telah saya kembangkan.
            </p>
          </div>
          
          {/* Grid 2 Kolom Tanpa Gambar (Sesuai Ide Anda) */}
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {/* 
              Di sini kita me-map data proyek, tapi secara paksa kita berikan image="" 
              agar tampilannya menjadi card minimalis tanpa gambar yang muat banyak!
            */}
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={t.projects[project.descKey as keyof typeof t.projects]}
                image="" // Force imageless mode
                tech={project.tech}
                repo={project.repo}
                projectLink={project.linkProject}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
