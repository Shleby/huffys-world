import FolderSection from "@/components/shared/about/gallery/FolderSection";
import Footer from "@/components/shared/footer";
import { getImages } from "@/lib/getImages";

interface ImagesByFolder {
  [key: string]: string[];
}

export const revalidate = 3600; // Revalidate every hour

export default async function Gallery() {
  const images = await getImages();

  const imagesByFolder = images.reduce((acc, image) => {
    const folder = image.split("/").slice(0, -1).join("/") || "root";
    if (!acc[folder]) {
      acc[folder] = [];
    }
    acc[folder].push(image);
    return acc;
  }, {} as ImagesByFolder);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <main className="2xl:container mx-auto px-4 py-12 space-y-4">
        <h1 className="text-4xl font-bold my-8 text-center">Image Gallery</h1>
        {Object.keys(imagesByFolder).length === 0 ? (
          <p className="text-center text-xl">No images found.</p>
        ) : (
          Object.entries(imagesByFolder).map(([folder, folderImages]) => (
            <FolderSection key={folder} folder={folder} images={folderImages} />
          ))
        )}
      </main>
      <Footer />
    </div>
  );
}
