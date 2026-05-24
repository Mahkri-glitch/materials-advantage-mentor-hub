import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entering Research and Mentor Resources",
  description: "Materials Advantage @ UCF mentorship and research-entry hub."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
