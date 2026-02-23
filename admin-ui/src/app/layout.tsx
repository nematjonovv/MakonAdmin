import type { Metadata } from "next";
import "./globals.css";
import { ThemeProviderCustom } from "@/components/ThemeProvider";
import { clash, clashGrotesk, poppins } from "@/style/font";
import { MessageProvider } from "@/Providers/MessageProvider";

export const metadata: Metadata = {
  title: "Makon | Admin Panel",
  description: "Admin panel of Makon Designs Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${clash.variable} ${clashGrotesk.variable}`}
    >
      <ThemeProviderCustom>
        <MessageProvider>
          <body className={``}>{children}</body>
        </MessageProvider>
      </ThemeProviderCustom>
    </html>
  );
}
