"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TypeIcon as type, LucideIcon } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  currentPage,
  item,
  children,
  href,
  icon: Icon,
}: {
  setActive: (item: string) => void;
  active: string | null;
  currentPage: string | null;
  item: string;
  children?: React.ReactNode;
  href: string;
  icon: LucideIcon;
}) => {
  return (
    <Link href={href} className="relative">
      <motion.div
        onMouseEnter={() => setActive(item)}
        className="cursor-pointer relative"
      >
        <AnimatePresence>
          {currentPage === item && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
            />
          )}
        </AnimatePresence>
        <motion.div
          className={`relative z-10 flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
            currentPage === item
              ? "text-neutral-900 dark:text-neutral-100"
              : "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{item}</span>
        </motion.div>
        {active !== null && (
          <motion.div
            style={{ zIndex: 50 }}
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
          >
            {active === item && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                <motion.div
                  transition={transition}
                  layoutId="active"
                  className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-lg"
                >
                  <motion.div layout className="w-max h-full p-2">
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="flex items-center space-x-1 rounded-lg bg-white dark:bg-neutral-900 px-2 py-2"
    >
      <AnimatePresence>{children}</AnimatePresence>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link
      href={href}
      className="flex space-x-3 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      <Image
        src={src}
        width={50}
        height={50}
        alt={title}
        className="flex-shrink-0 rounded-md"
      />
      <div>
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </h4>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="block px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
    >
      {children}
    </Link>
  );
};
