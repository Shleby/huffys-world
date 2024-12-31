"use client";

import { useEffect, useState } from "react";
import { useModal } from "@/components/ui/animated-modal";
import { FloatingDockDesktop } from "./FloatingDockDesktop";
import { FloatingDockMobile } from "./FloatingDockMobile";
import { cn } from "@/lib/utils";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const { open } = useModal();
  const [isVisible, setIsVisible] = useState(true); // Local visibility state

  useEffect(() => {
    // Update visibility based on the modal state
    setIsVisible(!open);
  }, [open]);

  return (
    <div
      className={cn(
        "transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </div>
  );
};
