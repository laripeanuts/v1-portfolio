import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import { ExperienceType } from "../../@types/api";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

type DataType = {
  experiences: ExperienceType[];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<DataType>,
) {
  const experiences: ExperienceType[] = await sanityClient.fetch(query);
  response.status(200).json({ experiences });
}
