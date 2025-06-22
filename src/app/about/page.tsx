import Image from "next/image";
import { FaLinkedinIn, FaDiscord, FaWhatsapp } from "react-icons/fa";
import LetsTalkSec from "@/_components/LetsTalkSec";
import { FaAlignJustify } from "react-icons/fa6";


export const metadata = {
  title: "Sobre mim | Guilherme Ataide",
  description:
    "Meu nome é Guilherme Ataide, sou um aspirante a desenvolvedor fullstack do Brasil.",
};

export default function About() {
  return (
    <section className="mt-10 flex flex-col container md:max-w-[1000px] p-4 mx-auto items-center gap-10">
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h1 className="text-4xl z-1 text-cyan-400">Sobre</h1>
        <span className="absolute bottom-3 flex items-center gap-2">
          <FaAlignJustify className="text-5xl text-cyan-400 opacity-30" />
          <span className="text-5xl truncate bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-10">
            About
          </span>
        </span>
      </div>
      <section className="w-full flex flex-col-reverse md:flex-row">
        <div className="sobre flex flex-col p-4 gap-4 w-full">
          <p>
            Olá, meu nome é Guilherme Ataide, tenho 24 anos, sou um estudante de
            Análise e desenvolvimento de sistemas na UFBRA, com previsão de
            conclusão em 2027.
          </p>
          <p>
            Tenho experiência como desenvolvedor autônomo, onde crio soluções
            simples para clientes, como automação de mensagens utilizando
            Python, além de comercializar essas soluções para pequenas empresas
            e profissionais autônomos.
          </p>
          <p>
            Estou atualmente em busca de uma oportunidade de estágio para
            aplicar meus conhecimentos e adquirir mais experiência prática na
            área de desenvolvimento de aplicações.
          </p>
          <p>
            Sempre em busca de novos desafios e oportunidades para aprimorar
            minhas habilidades e contribuir para projetos interessantes.
          </p>

          <LetsTalkSec />
        </div>
        <div className="md:max-w-[40%] w-full flex flex-col items-center gap-4 p-4 animate-fade animate-duration-2000">
          <Image
            width={260}
            height={180}
            src="/perfil.jpg"
            alt="Logo"
            className="rounded-sm"
            priority
          />
          <div className="links w-full">
            <ul className="animated-border">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/guilherme-aguiar-252626356/"
                >
                  <FaLinkedinIn size={25} className="inline-block mr-2" />
                  Guilherme Aguiar
                </a>
              </li>
              <li>
                <a href="https://discord.com/users/364513400350572548">
                  <FaDiscord size={25} className="inline-block mr-2" />
                  @6u1_1532
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5511977734114">
                  <FaWhatsapp size={25} className="inline-block mr-2" />
                  +55 (11) 97773-4114
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
