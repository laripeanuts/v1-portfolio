import { TargetAndTransition, VariantLabels, motion } from "framer-motion";

type SectionProps = {
  title?: string;
  className: string;
  id: string;
  children: React.ReactNode;
  initialAnimation?: boolean | VariantLabels;
  finalAnimation?: TargetAndTransition | VariantLabels;
};

export const Section = ({
  title,
  className,
  id,
  children,
  initialAnimation,
  finalAnimation,
}: SectionProps) => {
  const initial = initialAnimation || { x: -200, opacity: 0 };
  const final = finalAnimation || { x: 0, opacity: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={final}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col items-center h-screen w-full px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl sm:px-4 justify-evenly ${className}`}
      id={id}
    >
      {title ? (
        <h3 className="absolute top-24 md:top-20 uppercase tracking-[15px] text-zinc-500 text-xl">
          {title}
        </h3>
      ) : null}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center w-full gap-2 mt-20 md:mt-10 md:flex-row md:p-10 md:gap-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
