import Image from "next/image";
import ProjectsHome from "@/_components/ProjectsHome";
import ExperienceSec from "@/_components/ExperienceSec";
import SkillsHome from "@/_components/SkillsHome";
import LetsTalkSec from "@/_components/LetsTalkSec";
import Link from "next/link";
import WriterComponent from "@/_components/WriterComponent";

export default function Home() {
  return (
    <section className="mt-10 flex flex-col container md:max-w-[1000px] p-4 mx-auto items-center gap-14 ">
      <section className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <div className="w-full flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col items-start gap-4">
              <p className="font-semibold text-2xl">Olá, o meu nome é</p>
              <h1 className="animate-fade animate-duration-3000 font-bold text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Guilherme Ataide
              </h1>
              <WriterComponent />
              <div className="p-[2px] animate-fade animate-duration-3000 rounded-md bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 inline-block">
                <button className="bg-[#000b10] hover:cursor-pointer rounded-md px-6 py-3 transition-colors">
                  <Link href={"/projects"}>Conheça meu portifólio</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-full mx-auto animate-fade animate-duration-5000">
            <Image
              width={260}
              height={180}
              src="/home.png"
              alt="Logo"
              className="w-full animate-wiggle animate-infinite animate-duration-7500"
            />
          </div>
        </div>
      </section>
      <section className="w-full">
        <ProjectsHome />
      </section>
      <section className="w-full">
        <SkillsHome />
      </section>
      <section className="w-full">
        <ExperienceSec />
      </section>
      <section className="w-full">
        <LetsTalkSec />
      </section>
    </section>
  );
}
