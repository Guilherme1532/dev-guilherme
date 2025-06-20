"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`${
        !open
          ? "bg-gradient-to-b from-[#000b10] via-[#000b10dc] to-transparent"
          : "bg-[#000b10]"
      } 
     w-full flex items-center justify-between max-w-[1000px] p-4 z-10 animate-fade-down animate-duration-200"`}
    >
      <Link href={"/"} className="flex items-center">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="flex">
          <span className="logoname">G</span>
          <span className="logoname">u</span>
          <span className="logoname">i</span>
          {/* <span className="logoname">l</span>
          <span className="logoname">h</span>
          <span className="logoname">e</span>
          <span className="logoname">r</span>
          <span className="logoname">m</span>
          <span className="logoname">e</span> */}
        </div>
      </Link>

      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        <span
          className={`block h-1 w-6 bg-white mb-1 transition-all ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-white mb-1 transition-all ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-white transition-all ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Menu de navegação */}
      <nav
        className={`${
          open
            ? "block min-h-[100%] bg-[#000b10]  animate-fade-down animate-duration-100"
            : "hidden"
        } md:block absolute md:static top-16 left-0 w-full md:w-auto z-50`}
      >
        <ul
          className={`linkpages bg-background animated-border flex flex-col md:flex-row items-center md:items-start
      ${open ? "space-y-4 my-4 gap-6" : ""}
      md:space-y-0 md:border-0 md:pb-0 md:space-x-4`}
        >
          <li>
            <Link href={"/"} onClick={handleCloseMenu} title="Início">
              Início
            </Link>
          </li>
          <li>
            <Link href={"/about"} onClick={handleCloseMenu} title="Sobre">
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href={"/experience"}
              onClick={handleCloseMenu}
              title="Experiência"
            >
              Experiência
            </Link>
          </li>
          <li>
            <Link title="Projetos" onClick={handleCloseMenu} href={"/projects"}>
              Projetos
            </Link>
          </li>
          <li>
            <Link title="Contato" onClick={handleCloseMenu} href={"/contact"}>
              Contato
            </Link>
          </li>
          <li className="md:hidden flex gap-5">
            <a
              href="https://www.linkedin.com/in/guilherme-aguiar-252626356/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href="https://github.com/Guilherme1532"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://discord.com/users/364513400350572548"
              target="_blank"
              rel="noopener noreferrer"
              title="Discord"
            >
              <FaDiscord size={25} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511977734114"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <FaWhatsapp size={25} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
