import { AnnouncementSettings, HeaderConfigObj } from "@/types/header";

const Announcement = async ({
  settings,
  visible,
  id,
}: HeaderConfigObj<AnnouncementSettings>) => {
  if (visible) {
    return (
      <>
        <style>{`
        :root {
          --color-announcement-bar-background: ${settings.announcement_background.value};
          --color-announcement-bar-text: ${settings.announcement_text_color.value};
        }
        `}</style>
        <div
          id={id}
          className="w-full h-10 bg-[var(--color-announcement-bar-background)] text-[color:var(--color-announcement-bar-text)] text-center p-2 text-sm"
          dangerouslySetInnerHTML={{
            __html: settings.announcement_content.value,
          }}
        ></div>
      </>
    );
  } else return <></>;
};

export default Announcement;
