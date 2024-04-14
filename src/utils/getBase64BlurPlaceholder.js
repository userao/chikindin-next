import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

async function getBase64BlurPlaceholder(path) {
  const file = await fs.readFile(path);
  const { base64 } = await getPlaiceholder(file);
  return base64;
}

export default getBase64BlurPlaceholder;