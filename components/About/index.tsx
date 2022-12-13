import { motion } from "framer-motion";
import Image from "next/image";

type AboutProps = {};

export const About = ({}: AboutProps) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-zinc-500 text-2xl">
        Sobre
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="https://github.com/laripeanuts.png"
          width={400}
          height={400}
          alt="Profile Pic"
          className="-mb-20 md:mb-0 flex-shrink-0 rounded-full mt-14 w-32 y-32 object-cover md:rounded-lg md:min-w-[300px] md:h-[300px]"
        />
      </motion.div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-5 px-0 md:px-10 mt-4"
      >
        <h2 className="text-3xl font-bold text-zinc-100 lg:text-4xl">
          Alguns{" "}
          <span className="underline decoration-primary de">detalhes</span> de
          como cheguei até aqui
        </h2>
        <p className="text-xs md:text-sm">
          Desenvolvo aplicações, principalmente para web. Consigo, através do
          frontend, solucionar problemas, explorar minha criatividade e
          aproveitar as noções de design que adquiri trabalhando dez anos com
          arquitetura e modelagem 3D. Atualmente, além de trabalhar como
          desenvolvedora na{" "}
          <a
            className="hover:text-primary"
            href="https://rarolabs.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            Raro Labs
          </a>
          , estou estudando e me especializando cada vez mais no frontend,
          design systems, UI/UX design, apesar de sempre estar adquirindo também
          conhecimentos em âmbitos de backend e mobile. Utilizando o ecossistema
          JavaScript + TypeScript como tecnologias principais para
          desenvolvimento. O que acredito ser meus pontos fortes em softs kill
          são: senso de responsabilidade, facilidade em adaptação, trabalho em
          equipe, autonomia na resolução de problemas e principalmente interesse
          de aprender e estudar para contribuir no desenvolvimento pessoal e
          profissional.
        </p>
      </motion.div>
    </div>
  );
};
