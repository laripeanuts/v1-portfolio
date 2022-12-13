import { motion } from "framer-motion";

type ProfileBackgroundProps = {};

export const ProfileBackground = ({}: ProfileBackgroundProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.3, 0.6, 0.6, 0.2, 0.2],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2000,
        delay: 0.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-zinc-600 rounded-full w-[200px] h-[200px] animate-ping mt-52" />
      <div className="absolute border border-zinc-600 rounded-full w-[300px] h-[300px] animate-ping mt-52" />
      <div className="absolute border border-zinc-600 rounded-full w-[500px] h-[500px] animate-ping mt-52" />
      <div className="absolute border border-primary rounded-full w-[650px] h-[650px] animate-pulse mt-52 opacity-20" />
      <div className="absolute border border-zinc-600 rounded-full w-[800px] h-[800px] animate-ping mt-52" />
    </motion.div>
  );
};
