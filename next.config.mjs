/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.alisontravelgroup.com',
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    // reactStrictMode: false,
};
 
export default withNextIntl(nextConfig);