import fs from "fs/promises";
import path from "path";

export async function getImages(dir = "src/assets") {
  const images: string[] = [];

  async function scanDirectory(directory: string) {
    const files = await fs.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        await scanDirectory(filePath);
      } else if (stats.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
        // Store the path relative to src/assets, preserving subfolder structure
        images.push(path.relative(dir, filePath).replace(/\\/g, "/"));
      }
    }
  }

  await scanDirectory(dir);
  return images;
}
