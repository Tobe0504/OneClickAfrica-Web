import UseSWRConfigProvider from "@/config/SWRConfig";
import AppContextProvider from "@/context/AppContext";
import { ToastContextProvider } from "@/context/ToastContext";
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
        <ToastContextProvider>
          <UseSWRConfigProvider>
            <AppContextProvider>{children}</AppContextProvider>
          </UseSWRConfigProvider>
        </ToastContextProvider>
      </body>
    </html>
  );
}
