import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <header className="sticky top-0 p-4 flex flex-row items-center justify-between z-50 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/larissarabelolf/"
          bgColor="transparent"
          fgColor="lightgray"
          target={"_blank"}
        />
        <SocialIcon
          url="https://github.com/laripeanuts"
          bgColor="transparent"
          fgColor="lightgray"
          target={"_blank"}
        />
        <SocialIcon
          url="https://twitter.com/laripeanuts"
          bgColor="transparent"
          fgColor="lightgray"
          target={"_blank"}
        />
      </motion.div>

      <div className="uppercase text-sm flex flex-row items-center">
        <SocialIcon
          network="email"
          className="cursor-pointer"
          url="mailto:larissarabelolf@gmail.com"
          bgColor="transparent"
          fgColor="lightgray"
          target={"_blank"}
        />
        <span className="hidden md:inline-flex">Entre em contato</span>
      </div>
    </header>
  );
};
