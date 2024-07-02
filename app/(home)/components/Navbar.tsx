import Link from "next/link";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";


const Navbar = () => {
  const social = [
    {
      link: "https://www.linkedin.com/in/rahulbhati02/",
      label: "Linkdedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/rahul-7027",
      label: "Github",
      Icon: SiGithub,
    },
  ];
  return (
    <>
      <nav className="py-10 flex justify-between items-center animate-move-down">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
          Rahul Bhati 👨‍💻
        </h1>
        <div className="flex items-center gap-5">
          {social.map((item, i) => {
            const Icon = item.Icon;
            return (
              <Link href={item.link} target="
              _blank" key={i} aria-label={item.label}>
                <Icon className="w-5 h-4 hover:scale-125 transition-all" />
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
