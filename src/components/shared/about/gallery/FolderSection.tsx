"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryImage from "./GalleryImage";
import { ChevronDown, ChevronUp } from "lucide-react";
import SearchAndSort from "./Search";

interface FolderSectionProps {
  folder: string;
  images: string[];
}

const FolderSection: React.FC<FolderSectionProps> = ({ folder, images }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [filteredImages, setFilteredImages] = useState(images);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "200px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSearch = (term: string) => {
    const filtered = images.filter((image) =>
      image.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredImages(filtered);
  };

  const handleSort = (option: string) => {
    const sorted = [...filteredImages].sort((a, b) => {
      if (option === "name") {
        return a.localeCompare(b);
      } else if (option === "date") {
        // This is a placeholder. In a real app, you'd use actual file creation/modification dates.
        return a.localeCompare(b);
      }
      return 0;
    });
    setFilteredImages(sorted);
  };

  const formattedFolderName =
    folder === "root"
      ? "Main Folder"
      : folder
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

  const contentVariants = {
    expanded: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    collapsed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    expanded: { rotate: 180 },
    collapsed: { rotate: 0 },
  };

  return (
    <div className="mb-8 bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-2xl font-semibold">{formattedFolderName}</h2>
        <motion.div
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={iconVariants}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={contentVariants}
            className="border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="px-6 pt-6">
              <SearchAndSort onSearch={handleSearch} onSort={handleSort} />
            </div>
            <div
              ref={sectionRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6"
            >
              {isInView &&
                filteredImages.map((image, index) => (
                  <GalleryImage
                    key={index}
                    src={image}
                    alt={`Gallery image ${index + 1} in ${folder}`}
                    allImages={filteredImages}
                    index={index}
                  />
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FolderSection;
