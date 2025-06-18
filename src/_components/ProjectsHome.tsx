import ProjectsList from "@/_components/ProjectsList";


export default function ProjectsHome() {
  return (
    <div className="w-full animate-fade animate-duration-3000 flex flex-col items-center gap-10">
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h2 className="text-5xl z-1 text-cyan-400">Projetos</h2>
        <span className="absolute text-6xl bottom-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-10">
          Projetos
        </span>
      </div>
      <section className="w-full flex flex-col">
        <ProjectsList />
      </section>
    </div>
  );
}
