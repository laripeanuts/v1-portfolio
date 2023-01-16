import { Head, Html, Main, NextScript } from "next/document";

type DocumentProps = {
  Html: React.FC;
  Head: React.FC;
  Body: React.FC;
  children: React.ReactNode;
};

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <body className="bg-zinc-800 min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
