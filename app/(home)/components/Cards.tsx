"use client"
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGit } from "react-icons/si";
import { SiPostman } from "react-icons/si";





export const projects = [
  {
    text: "REACT",
    Icon:SiReact
  },
  {
    text: "NEXT.JS",
    Icon:RiNextjsFill
  },
  {
    text: "JAVASCRIPT",
    Icon:SiJavascript
  },
  {
    text: "HTML",
    Icon:FaHtml5
  },
  {
    text: "CSS",
    Icon:SiCss3
  },
  {
    text: "NODE.JS",
    Icon:FaNodeJs
  },
  {
    text: "SQL",
    Icon:BiLogoPostgresql
  },
  {
    text: "GIT",
    Icon:SiGit
  },
  {
    text: "POSTMAN",
    Icon:SiPostman
  },
];

export function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

