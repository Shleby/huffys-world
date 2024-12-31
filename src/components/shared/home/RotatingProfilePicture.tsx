"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Ripple from "@/components/ui/ripple";

interface RotatingProfilePictureProps {
  images: (string | StaticImageData)[];
  size: number;
  interval?: number;
}

export function RotatingProfilePicture({
  images,
  size,
  interval = 5000,
}: RotatingProfilePictureProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFlipping(false);
      }, 500); // Half of the transition time
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <>
      <Ripple className="lg:hidden" />
      <div
        className={`mx-auto lg:mx-0 relative rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 shadow-lg overflow-hidden transition-transform duration-1000 ${
          isFlipping ? "transform rotate-y-180" : ""
        }`}
        style={{ width: size, height: size }}
      >
        <Image
          src={images[currentIndex]}
          alt={`Profile picture ${currentIndex + 1}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
