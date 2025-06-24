import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

interface ProjectsListProps {
  limit?: number;
}

export default function ProjectsList({ limit }: ProjectsListProps) {
  //passando um limite opcional para exibir apenas um número específico de projetos
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="flex flex-col items-center gap-4 w-full">
      {displayedProjects.map((project) => (
        <div key={project.name} className="w-full">
          <div className="w-full bg-cyan-400 h-0.5 rounded-full mb-2"></div>
          <ProjectCard
            id={project.id}
            overview={project.description.overview}
            title={project.name}
            imgSrc={project.images[0]}
            link={project.link}
            skills={project.skills}
          />
        </div>
      ))}
    </section>
  );
}