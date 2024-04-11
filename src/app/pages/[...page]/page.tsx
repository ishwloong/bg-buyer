import SlideShow from "@/components/theme-configs/slide-show/SlideShow";
import { getThemeConfig } from "@/lib/api";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const pathname = headers().get("next-url");

  const {
    data: {
      object_config: { pages, theme_settings },
    },
  } = await getThemeConfig();

  const pageConfig = pages.find(
    (page) =>
      page.page_route === `${pathname}?review=${process.env.TEMPLATE_ID}`
  );

  const renderComp = (comp: any) => {
    switch (comp.id) {
      case "home_slideshow_banner":
        console.log(comp);
        return <SlideShow compConfig={comp} themeSetting={theme_settings} />;
      default:
        return <></>;
    }
  };

  if (pageConfig) {
    const { components } = pageConfig;
    return (
      <>
        {components.map((comp) => (
          <>{comp.visible && renderComp(comp)}</>
        ))}
      </>
    );
  } else {
    return <></>;
  }
};

export default page;
