interface SanityResponse {
  _createdAt: Date;
  _rev: string;
  _type: string;
  _updatedAt: Date;
}

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface SanitySocial {
  _key: string;
  _ref: string;
  _type: string;
}

export interface SocialType extends SanityResponse {
  _id: string;
  link: string;
  title: string;
}

export interface SkillType extends SanityResponse {
  _id: string;
  image: SanityImage;
  progress: number;
  title: string;
}

export interface ProfileType extends SanityResponse {
  _id: string;
  address: string;
  backgroundInfo: string;
  email: string;
  name: string;
  phone: string;
  profileImage: SanityImage;
  role: string;
  social: SanitySocial[];
  subtitles: string[];
}

export interface ProjectType extends SanityResponse {
  _id: string;
  image: SanityImage;
  linkToBuild: string;
  summary: string;
  technologies: SkillType[];
  title: string;
}

export interface ExperienceType extends SanityResponse {
  _id: string;
  companyImage: SanityImage;
  companyName: string;
  dateStarted: string;
  isCurrentJob: boolean;
  job: string;
  points: string[];
  technologies: SkillType[];
}
