export type newsType = {
  page: number;
  totalPages: number;
  totalItems: number;
  news: newsItemType[];
};

export type newsItemType = {
  _id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
  category: string;
  image: string;
  slug: string;
  author: string | null;
  __v: 0;
};
