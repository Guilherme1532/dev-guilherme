import ExperienceSec from "@/_components/ExperienceSec";

export const metadata = {
  title: "Experiência | Guilherme Ataide",
  description:
    "Meu nome é Guilherme Ataide, sou um aspirante a desenvolvedor fullstack do Brasil.",
};

export default function Experience() {
  return (
    <section className="mt-10 flex flex-col container md:max-w-[1000px] p-4 mx-auto items-center gap-10">
      <ExperienceSec />
    </section>
  );
}
