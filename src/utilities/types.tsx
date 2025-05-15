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
  video?: string;
  __v: 0;
};

export type queryObjectType = { [key: string]: string | number };

export type requestType = {
  isLoading: boolean;
  data: any;
  error: any;
  id?: string;
};

export type commentType = {
  id: string;
  comment: string;
  newsId: string;
  name: string;
};
