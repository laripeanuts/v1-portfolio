import { Head, Html, Main, NextScript } from "next/document";
import Analytics from "../components/Analytics";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <body className="min-h-screen bg-zinc-800">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
