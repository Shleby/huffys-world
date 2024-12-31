import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconChessKnight,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Navbar from "@/components/shared/navbar";
import { ModalProvider } from "@/components/ui/animated-modal";
import { SOCIAL_LINKS } from "@/config/constants";

export const metadata: Metadata = {
  title: "Shelby Huffman Portfolio",
  description: "Software Engineer and Music Educator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Chess",
      icon: (
        <IconChessKnight className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: SOCIAL_LINKS.chess,
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: SOCIAL_LINKS.linkedin,
    },
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: SOCIAL_LINKS.youtube,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: SOCIAL_LINKS.github,
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: SOCIAL_LINKS.instagram,
    },
  ];
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ModalProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}

            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
              <FloatingDock items={links} />
            </div>
          </ThemeProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
