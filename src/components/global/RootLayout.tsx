/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Header from "../theme-configs/header/Header";
import Footer from "../theme-configs/footer/Footer";
import Announcement from "../theme-configs/announcement/Announcement";
import { getThemeConfig } from "@/lib/api";
import { find } from "lodash";
import Head from "next/head";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const {
    data,
    data: {
      object_config: {
        root,
        theme_settings: { children_items },
      },
    },
  } = await getThemeConfig();

  const color = find(children_items, { id: "color" });

  const typographyConfig = find(children_items, {
    id: "typography",
  }).children_items;

  const headingStyle = find(typographyConfig, {
    id: "style_heading",
  }).settings;

  const bodyStyle = find(typographyConfig, { id: "style_body" }).settings;

  const btnNLinkStyle = find(typographyConfig, {
    id: "style_button_link",
  }).settings;

  return (
    <main>
      <style>{`
        ${root}
        :root {
          --font-family-heading: ${bodyStyle.font_family.value};
          --primary-color: ${color.settings.primary_color.value};
          --font-family-body: ${bodyStyle.font_family.value}
          --font-family-button-link: ${btnNLinkStyle.font_family.value}
        }
        `}</style>
      <Announcement />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
