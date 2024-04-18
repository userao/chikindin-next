import { getPlaiceholder } from "plaiceholder";
import getBackendRoute from "./getBackendRoute";
// import fs from "node:fs/promises";


// понять как из блоба сделать файл
async function getBase64BlurPlaceholder(filename) {
  const res = await fetch(`${getBackendRoute()}/${filename}`);
  const blob = await res.blob();
  const data = await blob.arrayBuffer();
  const { base64 } = await getPlaiceholder(data);
  return base64;
}

export default getBase64BlurPlaceholder;