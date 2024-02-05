import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { ProfileType } from "../../@types/api";
import { urlFor } from "../../sanity";
import { localeAdapter } from "../../utils/locales";
import { ProfileBackground } from "../ProfileBackground";

type ProfileProps = {
  profile: ProfileType;
};

export const Profile = ({ profile }: ProfileProps) => {
  const t = useTranslations("home");
  const { locale } = useRouter();
  const localeProfile = useMemo(
    () => localeAdapter(profile, locale, ["role", "subtitles"]),
    [profile, locale],
  );

  const menuItems = [
    {
      link: "#about",
      title: t("about.title"),
    },
    {
      link: "#experiences",
      title: t("experiences.title"),
    },
    {
      link: "#skills",
      title: t("skills.title"),
    },
    {
      link: "#projects",
      title: t("projects.title"),
    },
    {
      link: "#contact",
      title: t("contact.title"),
    },
  ];

  const [text, count] = useTypewriter({
    words: localeProfile.subtitles,
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 50,
    deleteSpeed: 30,
  });
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-8 overflow-hidden text-center">
      <ProfileBackground />
      <Image
        src={urlFor(profile?.profileImage).url()}
        priority
        width={400}
        height={400}
        alt="Profile Pic"
        className="relative object-cover w-32 mx-auto rounded-full y-32"
      />
      <div className="z-10 flex flex-col items-center justify-center w-full px-6 pb-2">
        <h2 className="uppercase text-sm text-zinc-500 pb-2 tracking-[12px] w-full">
          {localeProfile.role}
        </h2>
        <h1 className="px-4 text-4xl font-semibold lg:text-5xl scroll-px-10 align-center min-h-[17vh] w-full">
          <span>{text}</span>
          <Cursor cursorColor="#523db2" />
        </h1>
        <div className="flex flex-col flex-wrap items-center md:flex-row w-100 justify-evenly">
          {menuItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="btnNav">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
