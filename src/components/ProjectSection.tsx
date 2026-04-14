import { PROJECTS } from "@/content/projects"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14">
      {PROJECTS.map(({ image, title, description, creator, links, tools}) => (
        <ProjectCard
          key={title}
          image={image}
          title={title}
          description={description}
          creator={creator}
          tools={tools}
          links={links}
        />
      ))}
    </div>
  )
}

export default ProjectSection
