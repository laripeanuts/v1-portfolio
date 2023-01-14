import { SocialType } from "../api";

export const fetchSocials = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSocials`,
  );

  const data = await response.json();
  const sociais: SocialType[] = data.socials;

  return sociais;
};
