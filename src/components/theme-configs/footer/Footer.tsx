import { TFooterConfig } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";
import FooterMenu from "./FooterMenu";

type Props = { config: TFooterConfig };

const Footer = ({ config }: Props) => {
  const footerAdv = config.children_items.find(
    (item) => item.id === "footer_advanced"
  );
  const footerAbs = config.children_items.find(
    (item) => item.id === "abs_footer"
  );
  const footerSiteMap = config.children_items.filter(
    (item) => item.id !== "footer_advanced" && item.id !== "abs_footer"
  );

  return (
    <div
      className="px-[300px] py-12"
      style={{
        background: footerAdv?.settings.footer_bg.value,
        color: footerAdv?.settings.footer_color.value,
      }}
    >
      <div className="flex gap-[52px] py-4">
        {footerSiteMap.map((item) => (
          <div
            key={item.id}
            className={clsx(
              "flex flex-col gap-5",
              item.settings.width.value &&
                `w-full max-w-[${item.settings.width.value}]`
            )}
          >
            <h4 className="text-xl font-bold">{item.heading}</h4>

            {!item.id.includes("menu") && (
              <div
                className="flex flex-col gap-4"
                dangerouslySetInnerHTML={{
                  __html:
                    item.settings.content?.value?.replaceAll("<p></p>", "") ||
                    item.settings.newsletter_desc?.value?.replaceAll(
                      "<p></p>",
                      ""
                    ) ||
                    "",
                }}
              ></div>
            )}
            {item.id.includes("menu") && (
              <FooterMenu menuId={item.settings.menu.value} />
            )}
          </div>
        ))}
      </div>
      <hr
        style={{ borderColor: footerAdv?.settings.footer_divider.value }}
        className="border-t"
      />
      <div className="py-4 flex justify-between items-center text-xs">
        <div>{footerAbs?.settings.copyright?.value}</div>
        <div className="flex items-center gap-[7px]">
          We accept:
          <Image
            src={footerAbs?.settings.payment_icon.value || ""}
            alt="payment_method"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
