"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(
          `../../../../assets/${images[currentIndex]}`
        );
        setImageSrc(image.default.src);
      } catch (error) {
        console.error(`Failed to load image: ${images[currentIndex]}`, error);
      }
    };
    loadImage();
  }, [currentIndex, images]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
      role="dialog"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>
      <button
        onClick={handlePrevious}
        className="absolute left-4 text-white"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 text-white"
        aria-label="Next image"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
      <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
        <Image
          src={imageSrc}
          alt={`Lightbox image ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Lightbox;
