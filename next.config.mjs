/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i5.walmartimages.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'th.bing.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '5.imimg.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;
