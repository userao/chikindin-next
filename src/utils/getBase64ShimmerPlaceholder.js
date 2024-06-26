const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#808080" offset="20%" />
      <stop stop-color="#d9d9d9" offset="50%" />
      <stop stop-color="#808080" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#808080" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const getBase64ShimmerPlaceholder = () =>
  `data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`;

export default getBase64ShimmerPlaceholder;
