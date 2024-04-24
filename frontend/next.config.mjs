/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "listradigital.com.br",
          },
        ],
      },
};

export default nextConfig;
