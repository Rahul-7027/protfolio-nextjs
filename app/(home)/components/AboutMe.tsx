import React from "react";
import Title from "./Title";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AboutMe = () => {
  const words = `My Proficient in ReactJS, HTML, CSS, and Next.js. Possesses expertise in designing and developing responsive and interactive user interfaces. Passionate Frontend Developer for building user-friendly and responsive web applications using Reactjs. Eager to contribute creativity and technical skills to a dynamic team and continue to grow
as a developer..
    `;
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="About Me"
        className="flex items-center flex-col justify-center -rotate-6"
      />
      <TextGenerateEffect words={words} />
    </div>
  );
};

export default AboutMe;
