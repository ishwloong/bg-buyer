import React from "react";
import Navigation from "./Navigation";
import { getThemeConfig } from "@/lib/api";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Search, ShoppingBag, User } from "lucide-react";

const HeaderRich = async () => {
  const {
    data: {
      object_config: {
        header: {
          header_bar: { template_type, settings, visible, id },
        },
      },
    },
  } = await getThemeConfig();
  return (
    <div
      className={cn(
        "z-10 flex flex-col",
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
        <div className="flex-1">
          <Image
            className={cn(
              "!relative object-contain cursor-pointer",
              settings.header_center_logo.value && "order-2"
            )}
            src={settings.header_logo_url.value || ""}
            alt={settings.header_logo_url.heading || "logo"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
          />
        </div>
        <form
          action=""
          className={cn(
            "max-w-[400px] w-full border border-[#dee2e6] rounded-[5px] h-10 flex flex-1",
            settings.header_center_logo.value && "order-1"
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
        <div className="flex flex-1 justify-end order-3 gap-4">
          <User className="hover:text-[color:var(--color-primary)] transition-all cursor-pointer" />

          <ShoppingBag className="hover:text-[color:var(--color-primary)] transition-all cursor-pointer" />
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default HeaderRich;
