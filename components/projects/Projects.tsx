import { projects } from "@/lib/projectData"
import ProjectCard from "./ProjectCard"
import ProjectTitleAnimate from "./ProjectTitleAnimate"
import ProjectButton from "./ProjectButton"
import { useLanguage } from "../providers/LanguageProvider"

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] z-[20] mt-24"
    >
      <ProjectTitleAnimate />
      <div className="mb-24 grid w-[90%] grid-cols-1 grid-rows-2 gap-x-6 gap-y-6 lg:max-w-[1200px] lg:grid-cols-1">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={t.projects[project.descKey as keyof typeof t.projects]}
            image={project.image}
            badge={project.badge}
            tech={project.tech}
            repo={project.repo}
            projectLink={project.linkProject}
          />
        ))}
      </div>
      <ProjectButton />
    </section>
  )
}
