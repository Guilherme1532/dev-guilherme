"use client"; // necessário se estiver usando Next.js App Router

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <h2 className="h-16 text-xl md:text-2xl font-bold text-gray-300 animate-fade-up animate-duration-1000">
      <Typewriter
        words={["Desenvolvedor Fullstack"]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1000}
      />
    </h2>
  );
}
