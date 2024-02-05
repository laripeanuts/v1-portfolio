import { motion } from "framer-motion";

import { SocialType } from "../../@types/api";
import { IntlButton } from "./IntlButton";
import { SocialIconItem } from "./SocialIcon";

type HeaderProps = {
  socials: SocialType[];
};

export const Header = ({ socials }: HeaderProps) => (
  <header className="sticky top-0 p-3 flex flex-col md:flex-row items-center justify-between z-50 lg:px-[200px] mx-auto bg-zinc-800 bg-opacity-50 bg-blend bg-clip-padding backdrop-filter backdrop-blur-sm ">
    <motion.div
      initial={{ opacity: 0, x: -500, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.3 }}
      className="flex flex-row items-center"
    >
      {socials.map((social) => (
        <SocialIconItem
          key={social._id}
          url={social.link}
          network={social.title}
        />
      ))}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 500, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.3 }}
      className="flex flex-row items-center gap-4 mr-3 uppercase"
    >
      <IntlButton intl="pt-BR" label="Português" />
      <span>|</span>
      <IntlButton intl="en" label="English" />
    </motion.div>
  </header>
);
