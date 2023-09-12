import fs from "fs/promises";

export default async function getFolderContent (folderPath) {
  return await fs.readdir(folderPath, { withFileTypes: true });
}
