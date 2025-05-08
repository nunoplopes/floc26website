/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'sqigmath.tecnico.ulisboa.pt'
        ], // Add the external domain here
    },
};

export default nextConfig;
