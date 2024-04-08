"use client";
import { TAnnouncement } from "@/lib/types";

type Props = { config: TAnnouncement };

const Announcement = ({ config }: Props) => {
  if (config.visible) {
    return (
      <div
        id={config.id}
        className="h-10 text-center p-2"
        style={{
          background: config.settings.announcement_background.value,
          color: config.settings.announcement_text_color.value,
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: config.settings.announcement_content.value,
          }}
        ></div>
      </div>
    );
  } else return <></>;
};

export default Announcement;
