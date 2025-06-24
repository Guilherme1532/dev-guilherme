import ContactForm from "@/_components/ContactForm";
import { FaWhatsapp, FaPaperPlane, FaVoicemail } from "react-icons/fa";
export const metadata = {
  title: "Contato | Guilherme Ataide",
  description:
    "Entre em contato para oportunidades de trabalho ou colaborações em projetos.",
};

export default function Contact() {
  return (
    <section className="mt-10 flex flex-col container md:max-w-[1000px] p-4 mx-auto items-center gap-10">
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h1 className="text-4xl z-1 text-cyan-400">Contato</h1>
        <span className="absolute bottom-3 flex items-center gap-2">
          <FaVoicemail className="text-5xl text-cyan-400 opacity-30" />
          <span className="text-5xl truncate bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-10">
            Contact
          </span>
        </span>
      </div>
      <div className="font-semibold text-center max-w-[32rem] flex flex-col items-center gap-4 p-4">
        <h4>
          Estou sempre aberto a novas oportunidades de trabalho ou colaborando
          em alguns novos projetos incríveis. Basta preencher o formulário que
          retornarei 💪
        </h4>
      </div>
      <div className="w-full flex flex-col items-center p-4 gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
          <div className="p-3 bg-[#16171a] rounded-md flex flex-col justify-center gap-4">
            <h4 className="font-bold text-3xl flex gap-3 items-start">
              <FaWhatsapp />
              WhatsApp
            </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5511977734114"
              className="font-extralight text-lg"
            >
              +55 (11) 97773-4114
            </a>
          </div>
          <div className="p-3 bg-[#16171a] rounded-md flex flex-col justify-center gap-4">
            <h4 className="font-bold text-3xl flex gap-3 items-start">
              <FaPaperPlane />
              Email
            </h4>
            <a
              href="mailto:guilhermeataide1532@gmail.com"
              className="font-extralight text-lg overflow-hidden text-ellipsis"
            >
              guilhermeataide1532@gmail.com
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
