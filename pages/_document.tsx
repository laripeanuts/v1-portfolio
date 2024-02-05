import { DefaultSeo } from "next-seo";
import { Head, Html, Main, NextScript } from "next/document";

import Analytics from "../components/Analytics";
import { SEO } from "../next-seo-config";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content="Ksfhb3RS2u8s-IuuhHf44i-Oboke5fsp5bTfTWkCw0E"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <DefaultSeo {...SEO} />
      <body className="min-h-screen bg-zinc-800">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
