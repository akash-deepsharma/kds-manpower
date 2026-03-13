/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/legacy-services",
                destination: "/services",
                permanent: true, // 301
            },
            {
                source: "/old-contact",
                destination: "/contact",
                permanent: false, // 302
            },
            {
                source: "/home",
                destination: "/",
                permanent: true,
            },
        ];
    },
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kdsinternational.org',
        port: '',
        pathname: '/wp-content/uploads/**', // ** ka matlab hai saare folders/files
        search: '', // Koi specific search param nahi
      },
    ],
  },
};

export default nextConfig;
