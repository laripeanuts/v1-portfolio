import Head from "next/head";

import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Larissa Rabelo</title>
      </Head>
      <main className="bg-zinc-800 text-zinc-100 color-zinc-100 h-screen snap snap-y snap-mandatory overflow-scroll z-0">
        <Header />

        <section id="profile" className="snap-start">
          <Profile />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experiences" className="snap-center">
          <Experience />
        </section>
        <section id="skills" className="snap-center">
          <Skills />
        </section>
      </main>
    </>
  );
}
