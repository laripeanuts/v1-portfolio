import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      messages={pageProps.messages}
      locale={router.locale}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
