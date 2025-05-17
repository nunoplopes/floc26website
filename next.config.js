/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'static.wixstatic.com', 'www.technion.ac.il', 'wp.doc.ic.ac.uk'],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
}

module.exports = nextConfig 