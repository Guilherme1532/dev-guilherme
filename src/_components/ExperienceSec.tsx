import Image from "next/image";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

export default function ExperienceSec() {
  return (
    <div className="w-full animate-fade animate-duration-1000 flex flex-col items-center gap-15">
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h2 className="text-4xl z-1 text-cyan-400">Experiência</h2>
        <span className="absolute bottom-3 flex items-center gap-2">
          <MdOutlineWork className="text-5xl text-cyan-400 opacity-30" />
          <span className="text-5xl truncate bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-10">
            Experience
          </span>
        </span>
      </div>
      <section className="w-full flex flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-start gap-4 p-3 bg-[#16171a4c] border-b-4 border-r-2 border-cyan-400 rounded-md">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold">Desenvolvedor Autônomo</h2>
              <p className="text-gray-500">Freelancer</p>
              <p className="text-gray-400">Jan 2023 - Atual</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Atuo como desenvolvedor autônomo, criando soluções simples para
                clientes, como automação de mensagens utilizando Python, além de
                comercializar essas soluções para pequenas empresas e
                profissionais autônomos.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 p-3 bg-[#16171a4c] border-b-4 border-r-2 border-cyan-400 rounded-md">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold">Desenvolvedor Freelancer</h2>
              <p className="text-gray-500">Oliver</p>
              <p className="text-gray-400">Maio 2022 - Junho 2022</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Trabalhei no desevolvimento de email resposinvos para os
                clientes da Oliver, utilizando HTML e CSS, garantindo
                compatibilidade com diversos clientes de email e dispositivos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h2 className="text-4xl z-1 text-cyan-400">Educação</h2>
        <span className="absolute bottom-3 flex items-center gap-2">
          <FaBookOpen className="text-5xl text-cyan-400 opacity-30" />
          <span className="text-5xl truncate bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-10">
            Education
          </span>
        </span>
      </div>
      <section className="w-full flex flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-start gap-4 p-3 bg-[#16171a4c] border-b-4 border-r-2 border-cyan-400 rounded-md">
            <div className="w-full flex flex-col gap-2 md:w-1/3">
              <h2 className="text-2xl font-bold">
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </h2>
              <div className="flex gap-2 items-center text-gray-400">
                <Image
                  width={48}
                  height={48}
                  src="/ufbra-logo.png"
                  alt="UFBRA Logo"
                />
                <p>UFBRA</p>
              </div>
              <p className="text-gray-400">2025 - Presente</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Retornando a minha jornada acadêmica, atualmente estou cursando
                o curso de Tecnólogo em Análise e Desenvolvimento de Sistemas.
                Estou focado em aprimorar minhas habilidades em desenvolvimento
                de software, com ênfase em tecnologias web e mobile.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 p-3 bg-[#16171a4c] border-b-4 border-r-2 border-cyan-400 rounded-md">
            <div className="w-full flex flex-col gap-2 md:w-1/3">
              <h2 className="text-2xl font-bold">
                Bacharelado em Ciência da Computação
              </h2>
              <div className="flex gap-2 items-center text-gray-400">
                <Image
                  width={48}
                  height={48}
                  src="/unip-logo.png"
                  alt="Unip Logo"
                />
                <p>Unip</p>
              </div>
              <p className="text-gray-400">2018 - 2022</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Entre 2018 e 2022, cursei Ciência da Computação na UNIP,
                finalizando todas as disciplinas com dedicação especial ao
                desenvolvimento de software. Nesse período, fortaleci meus
                conhecimentos em lógica de programação, engenharia de sistemas e
                bancos de dados, habilidades que sigo aprimorando em projetos
                práticos e profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
