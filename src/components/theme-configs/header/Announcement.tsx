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
          --announcement-bg-color: ${settings.announcement_background.value};
          --announcement-text-color: ${settings.announcement_text_color.value};
        }
        `}</style>
        <div
          id={id}
          className="w-full h-10 bg-[var(--announcement-bg-color)] text-[color:var(--announcement-text-color)] text-center p-2 text-sm"
          dangerouslySetInnerHTML={{
            __html: settings.announcement_content.value,
          }}
        ></div>
      </>
    );
  } else return <></>;
};

export default Announcement;
