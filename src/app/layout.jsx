import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/Components/Shared/Sidebar";
import FooterSection from "@/Components/Shared/FooterSection";
import NavbarSection from "@/Components/ClientPortal/NavbarSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard-Client",
  description:
    "This is the client dashboard for the project management application.",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarSection />
        <div className="flex ">
          <main className="flex-1">{children}</main>
        </div>
        <FooterSection />
      </body>
    </html>
  );
}
