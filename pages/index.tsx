import Head from "next/head";

import { GetStaticProps } from "next";

import { fetchExperiences } from "../services/fetchExperiences";
import { fetchProfile } from "../services/fetchProfile";
import { fetchProjects } from "../services/fetchProjects";
import { fetchSkills } from "../services/fetchSkills";
import { fetchSocials } from "../services/fetchSocials";

import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experiences } from "../components/Experiences";
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

import { useTranslations } from "next-intl";
import {
  ExperienceType,
  ProfileType,
  ProjectType,
  SkillType,
  SocialType,
} from "../@types/api";
import { Section } from "../components/Section";

type Props = {
  experiences: ExperienceType[];
  profile: ProfileType;
  projects: ProjectType[];
  skills: SkillType[];
  socials: SocialType[];
  messages: string;
};

export default function Home({
  experiences,
  projects,
  profile,
  skills,
  socials,
}: Props) {
  const t = useTranslations("home");

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Larissa Rabelo - Fullstack Developer"
          content="Fullstack Developer Portfolio"
        />
        <title>Larissa Rabelo</title>
      </Head>

      <main className="z-0 h-screen overflow-x-hidden overflow-y-scroll bg-zinc-800 text-zinc-100 color-zinc-100 snap snap-y snap-mandatory scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary">
        <Header socials={socials} />
        <Section id="profile" className="snap-start">
          <Profile profile={profile} />
        </Section>
        <Section id="about" className="snap-center" title={t("about.title")}>
          <About profile={profile} />
        </Section>
        <Section
          id="experiences"
          className="snap-center"
          title={t("experiences.title")}
        >
          <Experiences experiences={experiences} />
        </Section>
        <Section id="skills" className="snap-center" title={t("skills.title")}>
          <Skills skills={skills} />
        </Section>
        <Section
          id="projects"
          className="snap-center"
          title={t("projects.title")}
        >
          <Projects projects={projects} />
        </Section>
        <Section
          id="contact"
          className="snap-center"
          title={t("contact.title")}
        >
          <Contact profile={profile} />
        </Section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const experiences: ExperienceType[] = await fetchExperiences();
  const profile: ProfileType = await fetchProfile();
  const projects: ProjectType[] = await fetchProjects();
  const skills: SkillType[] = await fetchSkills();
  const socials: SocialType[] = await fetchSocials();

  return {
    props: {
      experiences,
      profile,
      projects,
      skills,
      socials,
      messages: (await import(`../lang/${context.locale}.json`)).default,
    },
    revalidate: 60, // 60 seconds
  };
};
