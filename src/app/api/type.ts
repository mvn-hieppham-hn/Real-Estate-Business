export type ImageType = {
  imageUrl: string;
  caption?: string;
};
export type Description = {
  paragraph?: string;
  images?: ImageType[];
};

export type Overview = {
  id: number;
  title: string;
  type?: string;
  description: Description[];
};

export type Project = {
  id: number;
  title: string;
  description: Description[];
};

export type PostData = {
  title: string;
  description: Description[];
};

export type NewsData = {
  id: number;
  title: string;
  date: string;
  type: string;
  author: string;
  contents: {
    imageUrl?: string;
    content?: string;
    images?: ImageType[];
  }[];
};

export interface QueryParamsProps {
  params: Promise<{ id: string }>;
}
