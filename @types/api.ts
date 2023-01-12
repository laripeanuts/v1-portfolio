interface SanityResponse {
  _createdAt: Date;
  _rev: string;
  _type: string;
  _updatedAt: Date;
}

export interface SocialType extends SanityResponse {
  _id: string;
  link: string;
  title: string;
}
