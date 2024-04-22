import { headers } from "next/headers";
import http from "./http";
import { NavigationResponse } from "@/types/header";
import { BgsResponse } from "@/types/respone-common";

const host = headers().get("host");

export const getDomainInfo = async () =>
  http.get<any>("/public/domains/info", {
    headers: {
      "x-host": !host?.includes("localhost") ? host! : process.env.X_HOST!,
    },
  });

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
      baseUrl: baseUrl,
    }
  );
};

export const getThemeMenu = async (menuId: string) =>
  http.get<BgsResponse<NavigationResponse>>(
    `/app/themes/menus/${menuId}?store_id=${process.env.STORE_ID}`
  );
