import useGetHook from "./useGetHook";

export const useLatestNews = () => {
  const url = "/news/latest-news";
  return useGetHook(url);
};

export const useEntertainmentNews = () => {
  const url = "/news/entertainment-news";
  return useGetHook(url);
};

export const useNaijaNews = () => {
  const url = "/news/naija-news";
  return useGetHook(url);
};
