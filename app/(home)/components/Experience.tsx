import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import Title from "./Title";

const content = [
  {
    title: "Frontend Developer Intern",
    companyName: "Turning Cloud Solution  ( June 2022 - September 2022)",
    description:
      "Developed and maintained several React-based web applications using Redux for state management and Axios for HTTP requests. Collaborated with cross-functional teams to design and implement UI features that improved the user experience and increased engagement. Participated in code reviews and contributed to improving the overall quality and maintainability of the codebase.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        TURNING CLOUD SOLUTION (SUPPLYMINT)
      </div>
    ),
  },
  {
    title: "Frontend Developer (Freelancing)",
    companyName: "TrueVisory  (January 2024 - March 2024)",
    description:
      "Developed and maintained several React-based web applications using Redux for state management and Axios for HTTP requests. Collaborated with cross-functional teams to design and implement UI features that improved the user experience and increased engagement. Participated in code reviews and contributed to improving the overall quality and maintainability of the codebase.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        TrueVisory
      </div>
    ),
  },
];

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      {" "}
      <Title
        text="Experience"
        className="flex items-center flex-col justify-center -rotate-6"
      />{" "}
      <StickyScroll content={content} />
    </div>
  );
};

export default Experience;
