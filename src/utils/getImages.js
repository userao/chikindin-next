import fs from "node:fs/promises";
import { glob } from "glob";
import { getPlaiceholder } from "plaiceholder";

export default async function getImages(pattern) {
  return Promise.all(
    glob.sync(pattern).map(async (file) => {
      const src = file.replace("public\\", "");
      const buffer = await fs.readFile(file);

      const { base64 } = await getPlaiceholder(buffer);

      return { base64, img: { src } };
    })
  );
}