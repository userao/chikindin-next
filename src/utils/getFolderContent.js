import fs from "fs/promises";

export default async function (folderPath) {
  return await fs.readdir(folderPath, { withFileTypes: true });
}
