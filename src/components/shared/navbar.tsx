"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import AppLogo from "./navbar/app-logo";
import { usePathname } from "next/navigation";
import {
  User,
  Briefcase,
  ShoppingBag,
  BookOpen,
  Clock,
  MenuIcon,
} from "lucide-react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { ThemeToggle } from "../theme/theme-toggle";
import RepoDropdown from "./navbar/source-code";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function ClockComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-2 text-sm text-neutral-700 dark:text-neutral-300">
      <Clock className="w-4 h-4" />
      <span>{time.toLocaleTimeString()}</span>
    </div>
  );
}

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/about")) setCurrentPage("About");
    else if (pathname.startsWith("/services")) setCurrentPage("Services");
    else if (pathname.startsWith("/shop")) setCurrentPage("Shop");
    else if (pathname.startsWith("/blog")) setCurrentPage("Blog");
    else if (pathname.startsWith("/contact")) setCurrentPage("Contact");
    else setCurrentPage(null);
  }, [pathname]);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-900 z-50",
        className
      )}
    >
      <div className="px-4 py-1 mx-auto h-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <AppLogo />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <Menu setActive={setActive}>
            <MenuItem
              setActive={setActive}
              active={active}
              currentPage={currentPage}
              item="About"
              href="/about"
              icon={User}
              key="About"
            >
              <div className="w-48">
                <HoveredLink href="/about">About Me</HoveredLink>
                <HoveredLink href="/about/music-career">
                  Music Career Timeline
                </HoveredLink>
                <HoveredLink href="/about/gallery">Gallery</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              currentPage={currentPage}
              item="Services"
              href="/services"
              icon={Briefcase}
              key="Services"
            >
              <div className="w-48">
                <HoveredLink href="/services/music-services">
                  Music Services
                </HoveredLink>
                <HoveredLink href="/services/technical-services">
                  Technical Services
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              currentPage={currentPage}
              item="Shop"
              href="/shop/books"
              icon={ShoppingBag}
              key="Shop"
            >
              <div className="w-64 grid grid-cols-1 gap-3">
                <ProductItem
                  title="Books"
                  href="/shop/books"
                  src="/placeholder.svg?height=50&width=50"
                  description="Explore our collection of books."
                />
                <ProductItem
                  title="Sheet Music"
                  href="/shop/sheet-music"
                  src="/placeholder.svg?height=50&width=50"
                  description="Find sheet music for various instruments."
                />
                <ProductItem
                  title="Digital Products"
                  href="/shop/digital"
                  src="/placeholder.svg?height=50&width=50"
                  description="Discover our range of digital products."
                />
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              currentPage={currentPage}
              item="Blog"
              href="/blog/music"
              icon={BookOpen}
              key="Blog"
            >
              <div className="w-48">
                <HoveredLink href="/blog/music">
                  Music Blog / Videos
                </HoveredLink>
                <HoveredLink href="/blog/technical">Technical Blog</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-primary hover:text-primary/80"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white dark:bg-neutral-950"
            >
              <AppLogo />
              <nav className="flex flex-col gap-4 mt-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-primary">
                    About
                  </h2>
                  <a
                    href="/about"
                    className="block py-2 text-sm hover:text-primary transition-colors"
                  >
                    About Me
                  </a>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-primary">
                    Services
                  </h2>
                  <a
                    href="/services"
                    className="block py-2 text-sm hover:text-primary transition-colors"
                  >
                    Our Services
                  </a>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-primary">
                    Shop
                  </h2>
                  <a
                    href="/shop/books"
                    className="block py-2 text-sm hover:text-primary transition-colors"
                  >
                    Books
                  </a>
                  <a
                    href="/shop/sheet-music"
                    className="block py-2 text-sm hover:text-primary transition-colors"
                  >
                    Sheet Music
                  </a>
                  <a
                    href="/shop/digital"
                    className="block py-2 text-sm hover:text-primary transition-colors"
                  >
                    Digital Products
                  </a>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-primary">
                    Blog
                  </h2>
                  <a
                    href="/blog/music"
                    className="block py-2 text-sm hover:text-primary transition-colors"
                  >
                    Music Blog / Videos
                  </a>
                  <a
                    href="/blog/technical"
                    className="block py-2 text-sm hover:text-primary transition-colors"
                  >
                    Technical Blog
                  </a>
                </div>
              </nav>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Source Code</span>
                  <RepoDropdown />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Current Time</span>
                  <ClockComponent />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <RepoDropdown />
          <ThemeToggle />
          <ClockComponent />
        </div>
      </div>
    </div>
  );
}
