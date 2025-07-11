type ProjectCardProps = {
  title: string;
  imgSrc: string;
  overview: string;
  skills?: string[];
};

export default function ProjectCard({
  title,
  imgSrc,
  overview,
  skills = [],
}: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col md:flex-row p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full flex items-center justify-center">
        <img
          width={400}
          height={200}
          src={imgSrc}
          alt={title}
          className="border border-cyan-400"
        />
      </div>
      <div className="p-4 w-full flex flex-col justify-between gap-2">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{overview}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-cyan-400 text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-500 transition-colors duration-200"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
}
