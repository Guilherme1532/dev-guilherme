import ProjectsList from "@/_components/ProjectsList";
import { FaLaptopCode } from "react-icons/fa";

export const metadata = {
  title: "Projetos | Guilherme Ataide",
  description:
    "Explore meus projetos de desenvolvimento web, incluindo aplicações frontend e backend.",
};

export default function Projects() {
  return (
    <section className="mt-10 flex flex-col container md:max-w-[1000px] p-4 mx-auto items-center gap-10">
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h1 className="text-4xl z-1 text-cyan-400">Projetos</h1>
        <span className="absolute bottom-3 flex items-center gap-2">
          <FaLaptopCode className="text-5xl text-cyan-400 opacity-30" />
          <span className="text-5xl truncate bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-10">
            Projects
          </span>
        </span>
      </div>
      <ProjectsList />
      <div className="w-full flex justify-center items-center mb-5">
        <p>Ei, quer ver mais projetos que estou desenvolvendo agora, tenho mais em <a href="https://github.com/Guilherme1532" target="_blank" className="underline text-cyan-400">meu Github</a>!</p>
      </div>
    </section>
  );
}
