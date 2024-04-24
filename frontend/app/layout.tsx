import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Listra",
  description: "Desenvolvido por Gleyfeson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
