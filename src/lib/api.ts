import { TResponse, TThemeConfig } from "@/lib/types";
import axios from "axios";
import axiosInstance from "./axios";

export const getThemeConfig = async () => {
  const res = await axiosInstance("bgp").get(
    `/app/themes?store_id=${process.env.STORE_ID}`
  );
  return res.data;
};

export const getThemeMenu = async (menuId: string) => {
  const res = await axiosInstance("bgp").get(
    `/app/themes/menus/${menuId}?store_id=${process.env.STORE_ID}`
  );
  return res.data;
};

export const getFeaturedCollection = async (
  collection_id: string,
  page_size: number,
  page: number = 1,
  is_aggrs: boolean = false
) => {
  // const params = { collection_id, page, page_size, is_aggrs };
  const res = await axiosInstance("bgp").get(
    `/public/products?collection_id=${collection_id}&page=${page}&page_size=${page_size}&is_aggrs=${is_aggrs}`
    // { params }
  );
  return res.data;
};
