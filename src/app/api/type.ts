export type Description = {
  paragraph?: string;
  images?: string[];
};

export type Post = {
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
    image?: string;
    content: string;
  }[];
};
