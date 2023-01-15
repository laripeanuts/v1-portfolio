import { ProfileType } from "../@types/api";

export const fetchProfile = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProfile`,
  );

  const data = await response.json();
  const profile: ProfileType = data.profile;

  return profile;
};
