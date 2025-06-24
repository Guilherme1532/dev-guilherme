import projects from "@/data/projects.json";
import skills from "@/data/skills.json";
import SkillCardProject from "@/_components/SkillCardProject";
import SwiperProjects from "@/_components/SwiperProjects";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const id = (await params).id;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projeto não encontrado",
      description: "O projeto solicitado não foi encontrado.",
    };
  }
  return {
    title: `${project.name}`,
    description: project.description.overview,
    openGraph: {
      title: project.name,
      description: project.description.overview,
      images: [project.images?.[0] || ""],
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({ params }: PageProps) {
  const id = (await params).id;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  const projectSkills = project.skills.map((skillName) =>
    skills.find((skill) => skill.name === skillName)
  );

  return (
    <section className="mt-10 flex flex-col container md:max-w-[1000px] p-4 mx-auto items-center gap-10">
      <SwiperProjects project={project} />
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="rounded-full p-2 flex items-center justify-center">
            <img
              width={100}
              height={100}
              src={project.logo}
              alt={project.name}
              className=""
            />
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2">
            {project.link !== "" && (
              <a
                href={project.link}
                className="rounded-full w-full flex border p-2 gap-1 hover:scale-105 transition-transform duration-300"
              >
                <FaGlobe size={25} />
                <span className="text-nowrap w-full text-center">
                  Visitar Site
                </span>
              </a>
            )}
            <a
              href={project.github}
              className="rounded-full w-full flex border p-2 gap-1 hover:scale-105 transition-transform duration-300"
            >
              <FaGithub size={25} />
              <span className="text-nowrap w-full text-center">
                Repositório Github
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 mt-4">
          <div className="flex justify-between gap-2 md:items-center w-full">
            <div className="flex flex-wrap gap-2">
              {projectSkills.map((skill, index) =>
                skill ? (
                  <SkillCardProject
                    key={index}
                    name={skill.name}
                    imgSrc={skill.imgSrc}
                    color={skill.color}
                  />
                ) : (
                  <div key={index}>Skill não encontrada</div>
                )
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full truncate text-sm font-medium ${
                    project.status === "Em construção"
                      ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50"
                      : project.status === "Concluído"
                      ? "bg-green-500/20 text-green-300 border border-green-500/50"
                      : "bg-gray-500/20 text-gray-300 border border-gray-500/50"
                  }`}
                >
                  {project.status}
                </span>
              </p>
              <p className="w-full text-center">Ano: {project.year}</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-10">
            {project.video !== "" && (
              <div className="w-full">
                <video
                  controls
                  loop
                  muted
                  autoPlay
                  className="w-full h-auto rounded-lg"
                  src={project.video}
                >
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              </div>
            )}
            <div className="w-full flex flex-col gap-3">
              <h1>{project.description.overview}</h1>
              <ul>
                {project.description.features.map((feature, index) => (
                  <li key={index} className="list-disc ml-4">
                    {feature}
                  </li>
                ))}
              </ul>
              <p>{project.description.learning}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
