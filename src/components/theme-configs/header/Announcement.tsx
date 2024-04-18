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
      <>
        <style>{`
        :root {
          --color-announcement-bar-background: ${settings.announcement_background.value};
          --color-announcement-bar-text: ${settings.announcement_text_color.value};
        }

        * {
          font-family: Barlow
        }
        `}</style>
        <div
          id={id}
          className="announcement-bar"
          dangerouslySetInnerHTML={{
            __html: settings.announcement_content.value,
          }}
        ></div>
      </>
    );
  } else return <></>;
};

export default Announcement;
