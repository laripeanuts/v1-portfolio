import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import { ProfileType } from "../../@types/api";

const query = groq`
  *[_type == "profile"][0]
`;

type DataType = {
  profile: ProfileType;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<DataType>,
) {
  const profile: ProfileType = await sanityClient.fetch(query);
  response.status(200).json({ profile });
}
