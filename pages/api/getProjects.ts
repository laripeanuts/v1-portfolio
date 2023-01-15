import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import { ProjectType } from "../../@types/api";

const query = groq`
  *[_type == "project"] | order(_createdAt) {
    ...,
    technologies[]->
  }
`;

type DataType = {
  projects: ProjectType[];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<DataType>,
) {
  const projects: ProjectType[] = await sanityClient.fetch(query);
  response.status(200).json({ projects });
}
