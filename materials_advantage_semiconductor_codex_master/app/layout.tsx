import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../src/components/SiteHeader";

export const metadata: Metadata = {
  title: "Entering Research and Mentor Resources",
  description: "Materials Advantage @ UCF student mentoring and research-entry hub.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
