import Image from "next/image";

type ProjectCardProps = {
  id: string;
  title: string;
  imgSrc: string;
  link: string;
  overview: string;
};

export default function ProjectCard({
  id,
  title,
  imgSrc,
  overview,
}: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col md:flex-row p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full flex items-center justify-center">
        <img
          width={400}
          height={200}
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="p-4 w-full flex flex-col justify-between gap-2">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{overview}</p>
        <a
          href={`/projects/${id}`}
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-500 transition-colors duration-200"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
}
