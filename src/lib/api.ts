import http from "./http";

export const getThemeConfig = () =>
  http.get<any>(`/app/themes?store_id=${process.env.STORE_ID}`);

export const getFeaturedCollection = (
  id: string,
  pageSize: number,
  baseUrl: string = ""
) =>
  http.get<any>(
    `/public/products?collection_id=all&page=1&page_size=8&is_aggrs=false`,
    {
      headers: { "X-Store-Domain": "store-check-shipping.30usd.com" },
      baseUrl: baseUrl,
    }
  );

export const getThemeMenu = async (menuId: string) =>
  http.get<any>(`/app/themes/menus/${menuId}?store_id=${process.env.STORE_ID}`);
