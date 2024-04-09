import { THeaderBar } from "@/lib/types";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = { config: THeaderBar; navigation: any };

const Header = ({ config, navigation }: Props) => {
  const navigationEl = (
    <div
      style={{
        background: config.settings.header_bg.value,
        justifyContent:
          config.template_type === "bg_header_bar_rich"
            ? "center"
            : config.settings.header_content_alignment.value,
      }}
      className={clsx(
        "w-full flex flex-1",
        config.settings.header_center_logo.value &&
          config.template_type === "bg_header_bar_rich"
          ? "order-1"
          : "order-2"
      )}
    >
      {navigation?.map((item: any, idx: number) => (
        <div key={idx} className="p-2 cursor-pointer text-lg">
          <Link
            className="font-bold"
            style={{ background: config.settings.menu_bg.value }}
            href={item.link}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );

  if (config.visible) {
    return (
      <div
        className={clsx(
          config.template_type === "bg_header_bar_rich" &&
            "flex flex-col gap-4 pb-4"
        )}
        style={{
          background: config.settings.header_bg.value,
        }}
      >
        <div
          id={config.id}
          className={clsx(
            "px-[300px] py-4 h-[112px] relative flex items-center gap-5",
            config.settings.fixed_header.value && "sticky top-0"
          )}
          style={{
            position: "relative",
            color: config.settings.txt_color.value,
          }}
        >
          <div
            className={clsx(
              (config.settings.header_content_alignment.value === "center" ||
                config.template_type === "bg_header_bar_rich") &&
                "flex-1"
            )}
          >
            <Image
              className={clsx(
                "!relative object-contain cursor-pointer",
                config.settings.header_center_logo.value &&
                  config.template_type === "bg_header_bar_rich"
                  ? "order-2"
                  : "order-1"
              )}
              src={config.settings.header_logo_url.value || ""}
              alt={config.settings.header_logo_url.heading || "logo"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
            />
          </div>
          {config.template_type === "bg_header_bar_rich" ? (
            <form
              action=""
              className={clsx(
                "max-w-[400px] w-full border border-[#dee2e6] rounded-[5px] h-10 flex flex-1",
                config.settings.header_center_logo.value &&
                  config.template_type === "bg_header_bar_rich"
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
            <User className="hover:text-orange-500 cursor-pointer" />
            {config.template_type === "bg_header_bar_inline" && (
              <Sheet>
                <SheetTrigger asChild>
                  <Search className="hover:text-orange-500 cursor-pointer" />
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
            <ShoppingBag className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {config.template_type === "bg_header_bar_rich" && navigationEl}
      </div>
    );
  } else return <></>;
};

export default Header;
