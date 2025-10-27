import UseSWRConfigProvider from "@/config/SWRConfig";
import AppContextProvider from "@/context/AppContext";
import { ToastContextProvider } from "@/context/ToastContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oneclick Africa",
  description: "All news on one click",
  keywords: [
    "Trending",
    "Headlines",
    "Latest news",
    "Newsnow",
    "African news",
    "Sports",
    "Oneclick Africa",
    "Oneclickafrica limited",
    "Latest Headlines",
    "Breaking news",
    "Curated news",
    "Trending topics",
    "Top news stories",
    "Africa today",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WC8GN12NX2"
        ></script>
      </head>

      <body>
        <ToastContextProvider>
          <UseSWRConfigProvider>
            <AppContextProvider>{children}</AppContextProvider>
          </UseSWRConfigProvider>
        </ToastContextProvider>
      </body>
    </html>
  );
}
