export default function imageLoader({ src, width, quality }) {
  return `https://chikindin-next.vercel.app/_next/image?url=${src}&w=${width}&q=${
    quality || 75
  }`;
}
