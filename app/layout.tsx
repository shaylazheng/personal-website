import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shayla Zheng",
  description: "Shayla Zheng — Operations Research & Financial Engineering, Princeton '28.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
