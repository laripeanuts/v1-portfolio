import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverGithub, setHoverGithub] = useState(false);
  const [hoverTwitter, setHoverTwitter] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);

  return (
    <header className="sticky top-0 p-4 flex flex-row items-center justify-between z-50 max-w-7xl mx-auto hover:">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/larissarabelolf/"
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
          url="https://github.com/laripeanuts"
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
        <SocialIcon
          url="https://twitter.com/laripeanuts"
          target={"_blank"}
          bgColor="transparent"
          fgColor={hoverTwitter ? "#523db2" : "lightgray"}
          onMouseEnter={() => {
            setHoverTwitter(true);
          }}
          onMouseLeave={() => {
            setHoverTwitter(false);
          }}
          style={{
            transform: hoverTwitter ? "scale(1.2)" : "scale(1)",
            transition: "all 0.2s ease-in-out",
          }}
        />
      </motion.div>

      <div className="uppercase text-sm flex flex-row items-center cursor-pointer hover:text-primary">
        <Link href="mailto:larissarabelolf@gmail.com">
          <SocialIcon
            network="email"
            bgColor="transparent"
            target={"_blank"}
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
        </Link>
      </div>
    </header>
  );
};
