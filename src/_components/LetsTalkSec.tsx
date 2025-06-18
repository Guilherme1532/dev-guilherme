import Image from "next/image";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

export default function LetsTalkSec() {
  return (
    <div className="w-full animate-fade animate-duration-3000 flex flex-col items-center gap-4">
      <Image src={"/talk.png"} width={300} alt="Vamos conversar" height={180} />
      <p className="text-center">
        Estou sempre aberto a novas oportunidades e colaborações. Se você tem
        alguma ideia ou projeto em mente, não hesite em entrar em contato!
      </p>
      <div className="flex justify-center mt-6">
        <Link
          href={"/contact"}
          className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded transition-colors flex gap-2 justify-center items-center"
        >
          <FaPaperPlane /><span>Enviar mensagem</span>
        </Link>
      </div>
    </div>
  );
}
