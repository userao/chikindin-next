import withPlaiceholder from "@plaiceholder/next";
 
/**
 * @type {import('next').NextConfig}
 */
const config = {
  // your Next.js config
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://chikindin-next.vercel.app',
        port: '',
        pathname: '_next/**'
      }
    ]
  }
};
 
export default withPlaiceholder(config);