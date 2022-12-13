import Head from "next/head";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Larissa Rabelo</title>
        <meta name="Portfolio Desenvolvedora Javascript/TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
}
