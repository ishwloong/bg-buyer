import CollectionList from "@/components/theme-configs/collection-list/CollectionList";
import FeaturedCollection from "@/components/theme-configs/featured-collection/FeaturedCollection";
import Gallery from "@/components/theme-configs/gallery/Gallery";
import ImgNText from "@/components/theme-configs/img-n-text/ImgNText";
import Newsletter from "@/components/theme-configs/newsletter/Newsletter";
import PromotionBox from "@/components/theme-configs/promotion-box/PromotionBox";
import RichText from "@/components/theme-configs/rich-text/RichText";
import SlideShow from "@/components/theme-configs/slide-show/SlideShow";
import { getThemeConfig } from "@/lib/api";
import { ComponentType } from "@/types/comp-type";
import { find } from "lodash";
import React from "react";

const HomePage = async () => {
  const {
    data,
    data: {
      object_config: { pages, theme_settings },
    },
  } = await getThemeConfig();

  const pageConfig = find(pages, { page_id: "bg_home_page" });

  const getComponentSettings = (id: string) => {
    return find(pageConfig.components, { id: id }).settings;
  };

  const getChildrenItems = (id: string) => {
    return find(pageConfig.components, { id: id }).children_items;
  };

  return (
    <div className="flex flex-col px-4 lg:px-0">
      {pageConfig?.components.map(
        (item: ComponentType) =>
          item.visible &&
          ((item.id.includes("home_slideshow") && (
            <SlideShow
              key={item.id}
              {...getComponentSettings(item.id)}
              children_items={getChildrenItems(item.id)}
            />
          )) ||
            (item.id.includes("home_collection") && (
              <CollectionList
                key={item.id}
                {...getComponentSettings(item.id)}
                children_items={getChildrenItems(item.id)}
              />
            )) ||
            (item.id.includes("home_promotion_box") && (
              <PromotionBox
                key={item.id}
                compConfig={item}
                themeSetting={theme_settings}
              />
            )) ||
            (item.id.includes("home_feature_collection") && (
              <FeaturedCollection
                key={item.id}
                {...getComponentSettings(item.id)}
                template_type={item.template_type}
              />
            )) ||
            (item.id.includes("home_rich_text") && (
              <RichText key={item.id} {...getComponentSettings(item.id)} />
            )) ||
            (item.id.includes("h_esu") && (
              <Newsletter key={item.id} {...getComponentSettings(item.id)} />
            )) ||
            (item.id.includes("home_image_n_text") && (
              <ImgNText
                key={item.id}
                {...getComponentSettings(item.id)}
                template_type={item.template_type}
              />
            )) ||
            (item.id.includes("home_gallery") && (
              <Gallery
                key={item.id}
                {...getComponentSettings(item.id)}
                children_items={item.children_items}
                template_type={item.template_type}
              />
            )) ||
            (item.id.includes("home_gap_section") && (
              <div className="h-5"></div>
            )))
      )}
    </div>
  );
};

export default HomePage;
