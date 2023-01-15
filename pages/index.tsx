import Head from "next/head";

import { GetStaticProps } from "next";

import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProfile } from "../utils/fetchProfile";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

import {
  ExperienceType,
  ProfileType,
  ProjectType,
  SkillType,
  SocialType,
} from "../@types/api";

type Props = {
  experiences: ExperienceType[];
  profile: ProfileType;
  projects: ProjectType[];
  skills: SkillType[];
  socials: SocialType[];
};

function Home({ experiences, projects, profile, skills, socials }: Props) {
  fetchExperiences();
  return (
    <>
      <Head>
        <title>Larissa Rabelo</title>
      </Head>

      <main className="bg-zinc-800 text-zinc-100 color-zinc-100 h-screen snap snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary">
        <Header socials={socials} />
        <section id="profile" className="snap-start">
          <Profile profile={profile} />
        </section>
        <section id="about" className="snap-center">
          <About profile={profile} />
        </section>
        <section id="experiences" className="snap-center">
          <Experience experiences={experiences} />
        </section>
        <section id="skills" className="snap-center">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-center">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-center">
          <Contact profile={profile} />
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
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
    },
    revalidate: 100,
  };
};
