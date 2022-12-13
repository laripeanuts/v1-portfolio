import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { ProfileBackground } from "../ProfileBackground";

type ProfileProps = {};

export const Profile = ({}: ProfileProps) => {
  const [text, count] = useTypewriter({
    words: [
      "<h1>Olá, me chamo Larissa</h1>",
      "<h2>Sou dev Javascript/TypeScript</h2>",
      "<strong>Estudante de ciências da computação</strong>",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 50,
    deleteSpeed: 30,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-8 overflow-hidden">
      <ProfileBackground />
      <Image
        src="https://github.com/laripeanuts.png"
        width={400}
        height={400}
        alt="Profile Pic"
        className="relative rounded-full w-32 y-32 mx-auto object-cover"
      />
      <div className="flex flex-col items-center justify-center pb-2 z-10">
        <h2 className="uppercase text-sm text-zinc-500 pb-2 tracking-[12px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold scroll-px-10 align-center px-4">
          <span>{text}</span>
          <Cursor cursorColor="#523db2" />
        </h1>
        <div className="pt-4 flex w-100">
          <Link href="#about">
            <div className="btnNav">Sobre</div>
          </Link>
          <Link href="#experience">
            <div className="btnNav">Experiências</div>
          </Link>
          <Link href="#skills">
            <div className="btnNav">Conhecimento</div>
          </Link>
          <Link href="#projects">
            <div className="btnNav">Projetos</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
