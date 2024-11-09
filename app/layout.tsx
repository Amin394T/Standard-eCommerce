import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Standard eCommerce",
  description: "generic eCommerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
