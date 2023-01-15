import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import { SkillType } from "../../@types/api";

const query = groq`
  *[_type == "skill"] | order(_createdAt)
`;

type DataType = {
  skills: SkillType[];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<DataType>,
) {
  const skills: SkillType[] = await sanityClient.fetch(query);
  response.status(200).json({ skills });
}
