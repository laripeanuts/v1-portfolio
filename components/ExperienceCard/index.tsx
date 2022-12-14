import Image from "next/image";

import iconCSS from "../../assets/icons/css3.svg";
import iconHtml from "../../assets/icons/html5.svg";
import iconJS from "../../assets/icons/javascript.svg";
import iconReact from "../../assets/icons/react.svg";
import iconTS from "../../assets/icons/typescript.svg";

type ExperienceCardProps = {};

export const ExperienceCard = ({}: ExperienceCardProps) => {
  return (
    <article className="bg-zinc-700 text-left rounded-lg flex flex-col space-y-4 flex-shrink-0 items-start p-4 mt-20 w-[300px] snap-center opacity-60 hover:opacity-100 transition-opacity overflow-hidden duration-500 ease-in-out">
      <Image
        src="https://github.com/laripeanuts.png"
        width={200}
        height={200}
        alt="Raro Labs"
        className="relative rounded-full w-28 h-28 mx-auto object-cover md:w-[100px] md:h-[100px]"
      />
      <div>
        <h4 className="text-2xl font-light">Raro Labs</h4>
        <p className="font-bold">Desenvolvedora Frontend</p>
        <p className="text-xs font-semibold">Maio/2022 - Atualmente</p>
        <div className="flex space-x-2 my-2">
          <Image src={iconHtml} alt="HTML" width={24} height={24} />
          <Image src={iconCSS} alt="CSS" width={24} height={24} />
          <Image src={iconJS} alt="Javascript" width={24} height={24} />
          <Image src={iconTS} alt="Typescript" width={24} height={24} />
          <Image src={iconReact} alt="React JS" width={24} height={24} />
        </div>
      </div>
      <ul className="space-y-2 list-disc ml-4 text-sm">
        <li>Desenvolvendo sistemas para web</li>
        <li>Utilizando principalmente React</li>
        <li>Gerenciadores de estados como Redux, Zustend, Context API</li>
        <li>Elaboração e desenvolvimento de telas no Figma</li>
        <li>Uso de varias libs como Bootstrap, Styled Components, SASS</li>
      </ul>
    </article>
  );
};
