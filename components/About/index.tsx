import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { urlFor } from "../../sanity";
import { localeAdapter } from "../../utils/locales";

import { ProfileType } from "../../@types/api";

type AboutProps = {
  profile: ProfileType;
};

export const About = ({ profile }: AboutProps) => {
  const t = useTranslations("home.about");
  const { locale } = useRouter();
  const localeProfile = useMemo(
    () =>
      localeAdapter(profile, locale, ["backgroundInfo"]),
    [profile, locale],
  );
  const aboutTexts = localeProfile?.backgroundInfo?.split(" *** ");

  return (
    <div className="flex flex-col items-center justify-between gap-2 mt-20 md:mt-10 md:flex-row md:p-10 md:gap-10">
      <Image
        src={urlFor(localeProfile?.profileImage).url()}
        width={400}
        height={400}
        alt="Larissa's Profile Pic"
        className="flex-shrink-0 rounded-full w-32 y-32 object-cover md:rounded-lg md:min-w-[320px] md:h-[320px]"
        priority
      />
      <div className="flex flex-col justify-between gap-2 md:gap-4">
        <h2 className="text-2xl font-bold text-zinc-100 lg:text-4xl">
          {t("subtitle.first")}
          <span className="underline decoration-primary de">
            {t("subtitle.main")}
          </span>
          {t("subtitle.last")}
        </h2>
        <p className="text-xs md:text-sm leading-normal overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-primary max-h-[50vh] md:max-h-[280px]">
          {aboutTexts.map((text, index) => (
            <span key={index}>
              {text}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
