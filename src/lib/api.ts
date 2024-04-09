import { TResponse, TThemeConfig } from "@/lib/types";

export const getThemeConfig = async (): Promise<TResponse<TThemeConfig>> => {
  const res = await fetch(
    `${process.env.API_URL_BGP}/app/themes?store_id=${process.env.STORE_ID}`
  );
  if (!res.ok) {
    throw Error("Failed to fetch data");
  }

  return res.json();
};

export const getThemeMenu = async (menuId: string) => {
  const res = await fetch(
    `${process.env.API_URL_BGP}/app/themes/menus/${menuId}?store_id=${process.env.STORE_ID}`
  );

  if (!res.ok) {
    throw Error("Failed to fetch data");
  }

  return res.json();
};
