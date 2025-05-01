import AppContextProvider from "@/context/AppContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oneclick Africa",
  description: "All news in one click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
