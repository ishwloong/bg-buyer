import CollectionList from "@/components/theme-configs/collection-list/CollectionList";
import FeaturedCollection from "@/components/theme-configs/featured-collection/FeaturedCollection";
import PromotionBox from "@/components/theme-configs/promotion-box/PromotionBox";
import SlideShow from "@/components/theme-configs/slide-show/SlideShow";
import { getThemeConfig } from "@/lib/api";
import React from "react";
// import "@/app/styles/home.module.css";

const HomePage = async () => {
  const {
    data,
    data: {
      object_config: { pages, theme_settings },
    },
  } = await getThemeConfig();

  const pageConfig = pages.find((page) => page.page_id === "bg_home_page");

  return (
    <div className="flex flex-col gap-20 px-4 lg:px-0 pb-20">
      {pageConfig?.components.map(
        (item) =>
          (item.visible &&
            ((item.id.includes("home_slideshow") && (
              <SlideShow
                key={item.id}
                compConfig={item}
                themeSetting={theme_settings}
              />
            )) ||
              (item.id.includes("home_collection") && (
                <CollectionList
                  key={item.id}
                  compConfig={item}
                  themeSetting={theme_settings}
                />
              )) ||
              (item.id.includes("home_promotion_box") && (
                <PromotionBox
                  key={item.id}
                  compConfig={item}
                  themeSetting={theme_settings}
                />
              )))) ||
          (item.id.includes("home_feature_collection") && (
            <FeaturedCollection
              key={item.id}
              compConfig={item}
              themeSetting={theme_settings}
            />
          ))
      )}
    </div>
  );
};

export default HomePage;
