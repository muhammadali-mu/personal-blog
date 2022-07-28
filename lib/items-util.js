import fs from "fs";
import path from "path";

import matter from "gray-matter";

const itemsDirectory = path.join(process.cwd(), "content/image_resource");

function getItemData(fileName) {
  const filePath = path.join(itemsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const itemSlug = fileName.replace(/\.md$/, "");

  const itemData = {
    slug: itemSlug,
    ...data,
    content,
  };

  return itemData;
}

function getAllItemsFolder() {
  const itemsFile = fs.readdirSync(itemsDirectory);

  const allItems = itemsFile.map((itemFile) => {
    return getItemData(itemFile);
  });

  return allItems;
}

export function getFeaturedItems() {
  const allItems = getAllItemsFolder();

  const featuredItems = allItems.filter((item) => item.isFeatured);

  return featuredItems;
}
