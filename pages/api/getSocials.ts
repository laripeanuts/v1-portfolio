import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import { SocialType } from "../../@types/api";

const query = groq`
  *[_type == "social"]
`;

type DataType = {
  socials: SocialType[];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<DataType>,
) {
  const socials: SocialType[] = await sanityClient.fetch(query);
  response.status(200).json({ socials });
}
