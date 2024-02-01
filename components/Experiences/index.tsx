import { ExperienceType } from "../../@types/api";
import { ExperienceCard } from "../ExperienceCard";

type ExperienceProps = {
  experiences: ExperienceType[];
};

export const Experiences = ({ experiences }: ExperienceProps) => (
  <div className="flex w-full space-x-5 overflow-x-scroll snap-mandatory scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary">
    {experiences.map((experience: ExperienceType) => (
      <ExperienceCard key={experience._id} experience={experience} />
    ))}
  </div>
);
