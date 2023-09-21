import withPlaiceholder from "@plaiceholder/next";
 
/**
 * @type {import('next').NextConfig}
 */
const config = {
  // your Next.js config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'downloader.disk.yandex.ru',
      },
    ],
  },
};
 
export default withPlaiceholder(config);