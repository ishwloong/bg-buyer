import Announcement from "@/components/theme-configs/announcement/Announcement";
import Header from "@/components/theme-configs/header/Header";
import { getThemeConfig, getThemeMenu } from "@/lib/api";
import "@/app/globals.css";
import Footer from "@/components/theme-configs/footer/Footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: {
      object_config: {
        header: { announcement, header_bar },
        footer,
      },
    },
    data,
  } = await getThemeConfig();

  console.log(JSON.stringify(data));

  const {
    data: { items },
  } = await getThemeMenu(header_bar.settings.header_navigation_items.value);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Announcement config={announcement} />
        <Header config={header_bar} navigation={items} />
        {children}
        <Footer config={footer} />
      </body>
    </html>
  );
}
