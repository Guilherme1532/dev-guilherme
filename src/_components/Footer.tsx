import { FaLinkedinIn, FaGithub, FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-4 text-white border-t border-gray-700">
      <div className="flex gap-4 mb-4">
        <a href="https://www.linkedin.com/in/guilherme-aguiar-252626356/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={25} />
        </a>
        <a href="https://github.com/Guilherme1532" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} />
        </a>
        <a href="https://discord.com/users/364513400350572548" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={25} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5511977734114" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={25} />
        </a>
        </div>
        <p className="text-sm text-center">
            &copy; 2025 Guilherme Ataide.
        </p>
    </footer>
    );
}