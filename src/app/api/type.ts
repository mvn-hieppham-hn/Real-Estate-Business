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
