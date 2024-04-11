import { getThemeConfig } from "@/lib/api";
import { TAnnouncement } from "@/lib/types";
import { headers } from "next/headers";

const Announcement = async () => {
  const {
    data: {
      object_config: {
        header: {
          announcement: { settings, visible, id },
        },
      },
    },
  } = await getThemeConfig();

  const pathname = headers().get("next-url");
  console.log(pathname);
  
  if (visible) {
    return (
      <div
        id={id}
        className="h-10 text-center p-2 text-sm"
        style={{
          background: settings.announcement_background.value,
          color: settings.announcement_text_color.value,
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: settings.announcement_content.value,
          }}
        ></div>
      </div>
    );
  } else return <></>;
};

export default Announcement;
