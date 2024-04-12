import { getThemeConfig } from "@/lib/api";

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
