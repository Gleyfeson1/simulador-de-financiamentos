import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listra",
  description: "Simulador de financiamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col bg-slate-100">
      <Header />
      <div className=" mt-[64px] ">{children}</div>
      <Footer />
    </main>
  );
}
