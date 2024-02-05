import { NextSeoProps } from "next-seo";

const title = "Larissa Rabelo - Fullstack Developer";
const description = "Portfolio of Larissa Rabelo, Fullstack Developer";

export const SEO: NextSeoProps = {
  title,
  description,
  canonical: "https://larissarabelo.com.br",
  openGraph: {
    type: "website",
    url: "https://larissarabelo.com.br",
    locale: "en_US",
    siteName: "Larissa Rabelo's Portfolio",
    title,
    description,
    images: [
      {
        url: "https://cdn.sanity.io/images/1tginiq8/production/6ee1ec779183bc1536da5dccf80fdb266602e5bc-350x622.jpg",
        alt: title,
        width: 350,
        height: 622,
      },
    ],
  },
  titleTemplate: "%s | Larissa Rabelo",
  defaultTitle: title,
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.png",
    },
  ],
  languageAlternates: [
    {
      hrefLang: "pt-br",
      href: "https://larissarabelo.com.br/pt-br",
    },
  ],
  twitter: {
    handle: "@laripeanuts",
    site: "@laripeanuts",
    cardType: "summary_large_image",
  },
};
