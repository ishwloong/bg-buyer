import { headers } from "next/headers";
import http from "./http";
import { BgsResponse, PagingResponse } from "@/types/respone-common";
import { Collection } from "@/types/collection";
import { Aggregation, Product } from "@/types/product";

export const getDomainInfo = async () => {
  const host = headers().get("host");
  return http.get<any>("/public/domains/info", {
    headers: {
      "x-host": !host?.includes("localhost") ? host! : process.env.X_HOST!,
    },
  });
};

export const getThemeConfig = async () => {
  const { data } = await getDomainInfo();
  return http.get<any>(`/app/themes?store_id=${data.store_id}`);
};

export const getFeaturedCollection = async (
  id: string,
  pageSize: number,
  baseUrl: string = ""
) => {
  const { data } = await getDomainInfo();
  return http.get<any>(
    `/public/products?collection_id=all&page=1&page_size=8&is_aggrs=false`,
    {
      headers: { "X-Store-Domain": data.store_domain },
    }
  );
};

export const getThemeMenu = async (menuId: string) => {
  const { data } = await getDomainInfo();
  return http.get<any>(`/app/themes/menus/${menuId}?store_id=${data.store_id}`);
};

export const getCollections = async (
  page: number | string,
  pageSize: number | string
) => {
  const { data } = await getDomainInfo();
  return http.get<BgsResponse<PagingResponse<Collection[]>>>(
    `/public/collections?page=${page}&page_size=${pageSize}`,
    {
      headers: { "X-Store-Domain": data.store_domain },
    }
  );
};

export const getProducts = async () => {
  const { data } = await getDomainInfo();
  return http.get<
    BgsResponse<{ aggregations: Aggregation[] } & PagingResponse<Product[]>>
  >(`/public/products`, {
    headers: { "X-Store-Domain": data.store_domain },
  });
};
