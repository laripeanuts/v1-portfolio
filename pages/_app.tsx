import { NextIntlClientProvider } from "next-intl";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { SEO } from "../next-seo-config";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      messages={pageProps.messages}
      locale={router.locale}
    >
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
