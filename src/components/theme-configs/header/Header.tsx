import React from "react";
import { getThemeConfig, getThemeMenu } from "@/lib/api";
import Announcement from "./Announcement";
import HeaderMinimal from "./HeaderMinimal";
import HeaderInline from "./HeaderInline";
import HeaderRich from "./HeaderRich";
import {
  AnnouncementSettings,
  HeaderBarSettings,
  HeaderConfig,
  HeaderConfigObj,
} from "@/types/header";

const Header = async ({ announcement, header_bar }: HeaderConfig) => {
  const windowSize = { width: 1980 }; //useWindowSize();

  const { template_type, settings, visible, id } = header_bar;

  const {
    data: { items },
  } = await getThemeMenu(settings.header_navigation_items.value);

  return (
    <>
      <style>{`
        :root {
          --header-background: ${settings.header_bg.value};
          --color-main-menu-background: ${settings.menu_bg.value};
          --color-main-menu-text: ${settings.txt_color.value};
        }
      `}</style>
      <Announcement {...announcement} />
      {(template_type === "bg_header_bar_minimal" || windowSize.width < 1024) &&
      visible ? (
        <HeaderMinimal />
      ) : (
        (template_type === "bg_header_bar_rich" && (
          <HeaderRich {...header_bar} />
        )) ||
        (template_type === "bg_header_bar_inline" && <HeaderInline />)
      )}
    </>
  );
};

export default Header;
