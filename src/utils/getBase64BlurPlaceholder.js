import { getPlaiceholder } from "plaiceholder";
import getBackendRoute from "./getBackendRoute";

async function getBase64BlurPlaceholder(imageSrc) {
  const res = await fetch(imageSrc);
  const blob = await res.blob();
  const data = await blob.arrayBuffer();
  const { base64 } = await getPlaiceholder(data);
  return base64;
}

export default getBase64BlurPlaceholder;