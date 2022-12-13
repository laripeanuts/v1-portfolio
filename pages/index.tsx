import Head from "next/head";

import { Header } from "../components/Header";
import { Profile } from "../components/Profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Larissa Rabelo</title>
      </Head>
      <main className="bg-zinc-800 text-zinc-100 color-zinc-100 h-screen snap snap-y snap-mandatory overflow-scroll z-0">
        <Header />

        <section id="profile" className="snap-center">
          <Profile />
        </section>
      </main>
    </>
  );
}
