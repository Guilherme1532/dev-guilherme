"use client"; // necessário se estiver usando Next.js App Router

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <h1 className="h-16 text-2xl font-bold text-gray-300 animate-fade-up animate-duration-1000">
      <Typewriter
        words={["Dev Fullstack."]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
}
