import { motion } from "framer-motion";
import Image from "next/image";
import { ProfileType } from "../../@types/api";
import { urlFor } from "../../sanity";

type AboutProps = {
  profile: ProfileType;
};

export const About = ({ profile }: AboutProps) => {
  const aboutTexts = profile?.backgroundInfo?.split(" *** ");
  return (
    <motion.div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl sm:px-4 justify-evenly">
      <h3 className="absolute top-24 md:top-20 uppercase tracking-[15px] text-zinc-500 text-xl">
        Sobre
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-between gap-2 mt-20 md:mt-10 md:flex-row md:p-10 md:gap-10"
      >
        <Image
          src={urlFor(profile?.profileImage).url()}
          width={400}
          height={400}
          alt="Profile Pic"
          className="flex-shrink-0 rounded-full w-32 y-32 object-cover md:rounded-lg md:min-w-[320px] md:h-[320px]"
          priority
        />
        <div className="flex flex-col justify-between gap-2 md:gap-4">
          <h2 className="text-2xl font-bold text-zinc-100 lg:text-4xl">
            Alguns{" "}
            <span className="underline decoration-primary de">detalhes</span> de
            como cheguei até aqui
          </h2>
          <p className="text-xs md:text-sm leading-normal overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary max-h-[50vh] md:max-h-[280px]">
            {aboutTexts.map((text, index) => (
              <span key={index}>
                {text}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
