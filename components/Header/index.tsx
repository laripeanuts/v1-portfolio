import { useState } from "react";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

import { SocialType } from "../../@types/api";

type HeaderProps = {
  socials: SocialType[];
};

export const Header = ({ socials }: HeaderProps) => {
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverGithub, setHoverGithub] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);

  return (
    <header className="sticky top-0 p-3 flex flex-row items-center justify-between z-50 lg:px-[200px] mx-auto bg-zinc-800 bg-opacity-50 bg-blend bg-clip-padding backdrop-filter backdrop-blur-sm ">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url={socials[1].link}
          target={"_blank"}
          bgColor="transparent"
          fgColor={hoverLinkedin ? "#523db2" : "lightgray"}
          onMouseEnter={() => {
            setHoverLinkedin(true);
          }}
          onMouseLeave={() => {
            setHoverLinkedin(false);
          }}
          style={{
            transform: hoverLinkedin ? "scale(1.2)" : "scale(1)",
            transition: "all 0.2s ease-in-out",
          }}
        />
        <SocialIcon
          url={socials[0].link}
          target={"_blank"}
          bgColor="transparent"
          fgColor={hoverGithub ? "#523db2" : "lightgray"}
          onMouseEnter={() => {
            setHoverGithub(true);
          }}
          onMouseLeave={() => {
            setHoverGithub(false);
          }}
          style={{
            transform: hoverGithub ? "scale(1.2)" : "scale(1)",
            transition: "all 0.2s ease-in-out",
          }}
        />
      </motion.div>

      <div className="flex flex-row items-center text-sm uppercase cursor-pointer hover:text-primary">
        <SocialIcon
          url="#contact"
          network="email"
          bgColor="transparent"
          fgColor={hoverMail ? "#523db2" : "lightgray"}
          onMouseEnter={() => {
            setHoverMail(true);
          }}
          onMouseLeave={() => {
            setHoverMail(false);
          }}
          style={{
            transform: hoverMail ? "scale(1.2)" : "scale(1)",
            transition: "all 0.2s ease-in-out",
          }}
        />
        <span className="hidden md:inline-flex">Entre em contato</span>
      </div>
    </header>
  );
};
