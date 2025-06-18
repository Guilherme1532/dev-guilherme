import ProjectsList from "@/_components/ProjectsList";

export const metadata = {
  title: "Projetos | Guilherme Ataide",
  description:
    "Meu nome é Guilherme Ataide, sou um aspirante a desenvolvedor fullstack do Brasil.",
};

export default function Projects() {
  return (
    <section className="mt-10 flex flex-col container md:max-w-[1000px] p-4 mx-auto items-center gap-10">
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h1 className="text-5xl z-1 text-cyan-400">Projetos</h1>
        <span className="absolute text-6xl bottom-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-10">
          Projetos
        </span>
      </div>
      <ProjectsList />
    </section>
  );
}
