import type { Metadata } from "next";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

export const metadata: Metadata = {
  title: "SMA Negeri 1 Bangunrejo",
  description: "Website resmi SMA Negeri 1 Bangunrejo, menyediakan informasi lengkap tentang sekolah, berita terbaru.",
 
};

export default function MainRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="Main-layout">
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </div>
  );
}
