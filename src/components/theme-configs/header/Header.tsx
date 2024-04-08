"use client";
import { THeaderBar, THeaderConfig } from "@/lib/types";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

type Props = { config: THeaderBar };

const Header = ({ config }: Props) => {
  console.log(config);

  if (config.visible) {
    return (
      <div
        className={clsx(
          config.template_type === "bg_header_bar_rich" && "flex flex-col gap-4"
        )}
      >
        <div
          id={config.id}
          className={clsx(
            "px-[300px] py-4 h-[112px] relative flex justify-between items-center"
          )}
          style={{
            position: "relative",
            background: config.settings.header_bg.value,
            color: config.settings.txt_color.value,
          }}
        >
          <Image
            className="!relative"
            src={config.settings.header_logo_url.value}
            alt={config.settings.header_logo_url.heading}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
          />
          <form
            action=""
            className="max-w-[400px] w-full border border-[#dee2e6] rounded-[5px] h-10 flex"
          >
            <input
              type="text"
              name=""
              id=""
              value=""
              className="w-full h-[38px] rounded-s-[5px] focus:outline-none p-[.375rem_.75rem]"
              placeholder="What are you looking for?"
            />
            <div className="w-[52px] h-[38px]"></div>
          </form>
          <div className="w-10 h-10"></div>
        </div>

        {config.template_type === "bg_header_bar_rich" && (
          <div className="h-14"></div>
        )}
      </div>
    );
  } else return <></>;
};

export default Header;
