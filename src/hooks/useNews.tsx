import { generateQueryString } from "@/helpers/generateQueryString";
import { queryObjectType } from "@/utilities/types";
import useGetHook from "./useGetHook";

export const useLatestNews = (params: queryObjectType) => {
  const baseUrl = "/news/latest-news";
  const url = generateQueryString(baseUrl, params);
  return useGetHook(url);
};

export const useEntertainmentNews = (params: queryObjectType) => {
  const baseUrl = "/news/entertainment-news";
  const url = generateQueryString(baseUrl, params);
  return useGetHook(url);
};

export const useNaijaNews = (params: queryObjectType) => {
  const baseUrl = "/news/naija-news";
  const url = generateQueryString(baseUrl, params);
  return useGetHook(url);
};

export const useSportNews = () => {
  const url = "/news/sport-news";
  return useGetHook(url);
};

export const useGeneralPoliticsNews = () => {
  const url = "/news/general-politics-news";
  return useGetHook(url);
};

export const useGossipNews = () => {
  const url = "/news/gossip-news";
  return useGetHook(url);
};

export const useDiasporaNews = (params: queryObjectType) => {
  const baseUrl = "/news/diaspora-news";
  const url = generateQueryString(baseUrl, params);
  return useGetHook(url);
};

export const useAfricanEconomyNews = () => {
  const url = "/news/african-economy-news";
  return useGetHook(url);
};

export const useVideoNews = () => {
  const url = "/news/video-news";
  return useGetHook(url);
};

export const usePoliticsNews = (params: queryObjectType) => {
  const baseUrl = "/news/politics-news";
  const url = generateQueryString(baseUrl, params);
  return useGetHook(url);
};

export const useCategoryNews = (params: queryObjectType, category: string) => {
  const baseUrl = `/news/${category}-news`;
  const url = generateQueryString(baseUrl, params);
  return useGetHook(url);
};

export const useAfricaNews = (params: queryObjectType) => {
  const baseUrl = "/news/africa-news";
  const url = generateQueryString(baseUrl, params);
  return useGetHook(url);
};

export const useEconomyNews = (params: queryObjectType) => {
  const baseUrl = "/news/economy-news";
  const url = generateQueryString(baseUrl, params);
  return useGetHook(url);
};

export const useSearchNews = (params: queryObjectType) => {
  const baseUrl = "/news/search";
  const url = generateQueryString(baseUrl, params);
  return useGetHook(url);
};

export const useNewsComments = (
  id: string | undefined,
  params: queryObjectType
) => {
  const baseUrl = `/comments/comments/${id}`;
  const url = id ? generateQueryString(baseUrl, params) : null;
  return useGetHook(url);
};
