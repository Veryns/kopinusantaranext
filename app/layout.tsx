import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Nusantara — Kedai Kopi Rumahan",
  description: "Kedai kopi rumahan yang mengangkat biji kopi asli daerah.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
