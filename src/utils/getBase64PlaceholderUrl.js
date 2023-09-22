import { getPlaiceholder } from "plaiceholder";

export default async function getBase64PlaceholderUrl(src) {
  const res = await fetch(src, {
    headers: { Authorization: `OAuth ${process.env.YANDEX_AUTH_TOKEN}` },
  });

  const buffer = await res.arrayBuffer();

  const { base64 } = await getPlaiceholder(buffer);

  return base64;
}
