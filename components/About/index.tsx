import { motion } from "framer-motion";
import Image from "next/image";
import { ProfileType } from "../../@types/api";
import { urlFor } from "../../sanity";

type AboutProps = {
  profile: ProfileType;
};

export const About = ({ profile }: AboutProps) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 sm:px-4 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-zinc-500 text-xl">
        Sobre
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-10"
      >
        <Image
          src={urlFor(profile?.profileImage).url()}
          width={400}
          height={400}
          alt="Profile Pic"
          className="-mb-10 md:mb-0 flex-shrink-0 rounded-full mt-14 w-32 y-32 object-cover md:rounded-lg md:min-w-[300px] md:h-[300px]"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-5 px-0 md:px-10 mt-4"
      >
        <h2 className="text-2xl font-bold text-zinc-100 lg:text-4xl">
          Alguns{" "}
          <span className="underline decoration-primary de">detalhes</span> de
          como cheguei até aqui
        </h2>
        <p className="text-xs md:text-sm leading-normal overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary max-h-[30vh]">
          {profile?.backgroundInfo}
        </p>
      </motion.div>
    </div>
  );
};
