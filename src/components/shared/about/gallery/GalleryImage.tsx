"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Lightbox from "./Lightbox";

interface GalleryImageProps {
  src: string;
  alt: string;
  allImages: string[];
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  allImages,
  index,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    import(`@assets/${src}`)
      .then((image) => {
        setImageSrc(image.default.src);
      })
      .catch((error) => {
        console.error(`Failed to load image: ${src}`, error);
      });
  }, [src]);

  if (!imageSrc) return null;

  return (
    <>
      <div
        className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => setShowLightbox(true)}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end justify-start p-4">
          <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {src.split("/").pop()}
          </p>
        </div>
      </div>
      {showLightbox && (
        <Lightbox
          images={allImages}
          initialIndex={index}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </>
  );
};

export default GalleryImage;
