/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL_BUYER: process.env.API_URL_BUYER,
        API_URL_BGP: process.env.API_URL_BGP,
        STORE_ID: process.env.STORE_ID,
    },
    images: {
        remotePatterns: [{ hostname: '**.cloudfront.net' }]
    }
};

export default nextConfig;
