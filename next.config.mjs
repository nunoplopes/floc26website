/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'sqigmath.tecnico.ulisboa.pt'
        ], // Add the external domain here
    },
    webpack: (config) => {
        config.resolve.extensions.push(".mjs");
        return config;
    },
};

export default nextConfig;
