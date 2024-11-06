import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: {
    url: "",
    name: siteConfig.name,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-8 px-6 flex-grow overflow-y-auto h-screen">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 text-center text-sm">
              <div>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current text-sm"
                  href="https://stevenfeng.cn"
                  title="stevenfeng.cn homepage"
                >
                  <span className="text-white">Copyright © 2022 - 2024</span>
                  <p className="text-gray-200 font-bold">Steven Feng</p>
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
