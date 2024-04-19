import React from "react";
import Image from "next/image";
import { Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getThemeConfig, getThemeMenu } from "@/lib/api";
import { cn } from "@/lib/utils";
import Announcement from "./Announcement";
import HeaderMinimal from "./HeaderMinimal";
import useWindowSize from "@/lib/hooks/useWindowSize";
import HeaderInline from "./HeaderInline";
import HeaderRich from "./HeaderRich";

const Header = async () => {
  const windowSize = { width: 1980 }; //useWindowSize();

  const {
    data: {
      object_config: {
        header: {
          header_bar: { template_type, settings, visible, id },
        },
      },
    },
  } = await getThemeConfig();

  const {
    data: { items },
  } = await getThemeMenu(settings.header_navigation_items.value);

  return (
    <>
      <style>{`
        :root {
          --bg-header: ${settings.header_bg.value};
          --bg-main-menu: ${settings.menu_bg.value};
          --color-main-menu: ${settings.txt_color.value};
        }
      `}</style>
      <Announcement />
      {(template_type === "bg_header_bar_minimal" || windowSize.width < 1024) &&
      visible ? (
        <HeaderMinimal />
      ) : (
        (template_type === "bg_header_bar_rich" && <HeaderRich />) ||
        (template_type === "bg_header_bar_inline" && <HeaderInline />)
      )}
      {/* {template_type === "bg_header_bar_minimal" ? (
          ""
        ) : (
          <div
            className={cn(
              "z-10",
              template_type === "bg_header_bar_rich" && "flex flex-col",
              settings.fixed_header.value && "sticky top-0",
              template_type
            )}
            style={{
              background: settings.header_bg.value,
            }}
          >
            <div
              id={id}
              className={cn(
                "w-full max-w-[1320px] m-auto py-4 h-[112px] relative flex items-center gap-5"
              )}
              style={{
                position: "relative",
                color: settings.txt_color.value,
              }}
            >
              <div
                className={cn(
                  (settings.header_content_alignment.value === "center" ||
                    template_type === "bg_header_bar_rich") &&
                    "flex-1"
                )}
              >
                <Image
                  className={cn(
                    "!relative object-contain cursor-pointer",
                    settings.header_center_logo.value &&
                      template_type === "bg_header_bar_rich"
                      ? "order-2"
                      : "order-1"
                  )}
                  src={settings.header_logo_url.value || ""}
                  alt={settings.header_logo_url.heading || "logo"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "100%" }}
                />
              </div>
              {template_type === "bg_header_bar_rich" ? (
                <form
                  action=""
                  className={cn(
                    "max-w-[400px] w-full border border-[#dee2e6] rounded-[5px] h-10 flex flex-1",
                    settings.header_center_logo.value &&
                      template_type === "bg_header_bar_rich"
                      ? "order-1"
                      : "order-2"
                  )}
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    value=""
                    className="w-full h-[38px] rounded-s-[5px] focus:outline-none p-[.375rem_.75rem]"
                    placeholder="What are you looking for?"
                  />
                  <div className="w-[52px] h-[38px] py-[6px] px-[14px] cursor-pointer bg-white rounded-e-[5px]">
                    <Search />
                  </div>
                </form>
              ) : (
                navigationEl
              )}
              <div className="flex flex-1 justify-end order-3 gap-4">
                <User className="hover:text-[color:var(--bgs-primary)] transition-all cursor-pointer" />
                {template_type === "bg_header_bar_inline" && (
                  <Sheet>
                    <SheetTrigger asChild>
                      <Search className="hover:text-[color:var(--bgs-primary)] transition-all cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent
                      side="top"
                      className="h-[112px] flex items-center px-[300px] py-8"
                      showBtnClose={false}
                    >
                      <div className="flex gap-2 p-2 flex-1 items-center">
                        <Search />
                        <input
                          type="text"
                          className="flex-1 focus:outline-none pr-[72px]"
                          placeholder="Search our store"
                        />
                        <SheetClose asChild>
                          <X className="cursor-pointer text-gray-400 hover:text-gray-600" />
                        </SheetClose>
                      </div>
                    </SheetContent>
                  </Sheet>
                )}
                <ShoppingBag className="hover:text-[color:var(--bgs-primary)] transition-all cursor-pointer" />
              </div>
            </div>

            {template_type === "bg_header_bar_rich" && navigationEl}
          </div>
        )} */}
    </>
  );
};

export default Header;
