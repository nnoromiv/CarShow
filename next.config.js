/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // @deprecated
        // domains: ['cdn.imagin.studio'],
        remotePatterns: [
            {
                hostname: 'cdn.imagin.studio'
            }
        ]

    }
}

module.exports = nextConfig
