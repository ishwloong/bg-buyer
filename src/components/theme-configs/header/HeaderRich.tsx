import React from "react";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Search, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { HeaderBarSettings, HeaderConfigObj } from "@/types/header";
import Link from "next/link";

const HeaderRich = async ({
  template_type,
  settings,
  id,
}: HeaderConfigObj<HeaderBarSettings>) => {
  return (
    <header
      className={cn(
        "z-20 bg-[var(--header-background)]",
        settings.fixed_header.value && "sticky top-0",
        template_type
      )}
    >
      <div className={cn("flex flex-col")}>
        <div id={id} className="header_main padding_content">
          <div className="flex-1 header_brand">
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
              "max-w-[400px] w-full border border-[#dee2e6] rounded-[5px] flex flex-1 search_bar header_search",
              settings.header_center_logo.value && "order-1"
            )}
          >
            <input
              type="text"
              name=""
              id=""
              value=""
              className="w-full rounded-s-[5px] focus:outline-none px-4 py-2 placeholder:leading-6"
              placeholder="What are you looking for?"
            />
            <div className="w-[52px] py-[6px] px-[14px] cursor-pointer bg-white rounded-e-[5px]">
              <Search />
            </div>
          </form>
          <div className="flex flex-1 justify-end order-3 gap-4 header_icons">
            <User className="hover:text-[color:var(--color-primary)] transition-all cursor-pointer" />

            <Link href="/cart">
              <ShoppingCart className="hover:text-[color:var(--color-primary)] transition-all cursor-pointer fill-none w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <Navigation {...{ template_type, settings }} />
    </header>
  );
};

export default HeaderRich;
