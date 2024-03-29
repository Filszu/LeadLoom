/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://store.admitad.com',
                    }, // replace this your actual origin
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,DELETE,PATCH,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                ],
            },
        ];
    },
};

// module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                port: '',
                pathname: '/image/**',
            },
            {
                protocol: 'https',
                hostname: 'lead-loom.vercel.app',
                port: '',
                pathname: '/',
            },
            {
                protocol: 'https',
                hostname: 'leadloom.games',
                port: '',
                pathname: '/',
            },
            {
                protocol: 'https',
                hostname: 'cdn.admitad-connect.com',
                port: '',
                pathname: '/public/campaign/images/',
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
};
