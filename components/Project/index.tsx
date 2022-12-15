import { motion } from "framer-motion";
import Image from "next/image";

type ProjectProps = {};

export const Project = ({}: ProjectProps) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="w-full flex-shrink-0 snap-center flex flex-col items-center mx-auto justify-center gap-4 p-20 mt-10"
    >
      <Image
        src="https://github.com/laripeanuts/raro-academy-videos/raw/develop/.github/temalight.jpg"
        alt="HTML"
        width={500}
        height={0}
        className="w-[200px] lg:w-[300px]"
      />
      <div className="max-w-6xl">
        <h4 className="text-2xl font-bold lg:text-4xl underline decoration-primary">
          Raro Academy Videos
        </h4>
        <p className="text-sm md:text-base mt-2">
          Projeto final do curso de React da Raro Academy que visa melhorar o
          modelo de distribuição do conteúdo dos cursos, criando um portal de
          acesso aos materiais de vídeo, onde os usuários poderão visualizar o
          conteúdo disponibilizados na plataforma, juntamente com um sistema de
          comentário com likes e dislikes. Desenvolvido com Typescript, React,
          Material Ui, Styled components. Acesse o{" "}
          <a
            className="hover:text-primary"
            href="https://rarolabs.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            repositório
          </a>{" "}
          pra ver mais detalhes.
        </p>
      </div>
    </motion.div>
  );
};
