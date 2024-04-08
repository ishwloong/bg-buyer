import { env } from "process";
import { TResponse, TThemeConfig } from "./types";

export const getThemeConfig = async (): Promise<TResponse<TThemeConfig>> => {
  const res = await fetch(
    `${env.API_URL_BGP}/app/themes?store_id=${env.STORE_ID}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
