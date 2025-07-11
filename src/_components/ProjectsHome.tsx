import ProjectsList from "@/_components/ProjectsList";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

export default function ProjectsHome() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h2 className="text-4xl z-1 text-cyan-400">Projetos</h2>
        <span className="absolute bottom-3 flex items-center gap-2">
          <FaLaptopCode className="text-5xl text-cyan-400 opacity-30" />
          <span className="text-5xl truncate bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-10">
            Projects
          </span>
        </span>
      </div>
      <section className="w-full flex flex-col">
        <ProjectsList limit={3}/>
        <div className="w-full flex justify-center mt-6">
          <Link 
            href="/projects" 
            className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
          >
            Ver todos os projetos
          </Link>
        </div>
      </section>
    </div>
  );
}
