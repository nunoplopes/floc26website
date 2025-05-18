/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sqigmath.tecnico.ulisboa.pt',
            },
            {
                protocol: 'https',
                hostname: 'www.dcc.fc.up.pt',
            },
            {
                protocol: 'https',
                hostname: 'joaoff.com',
            },
            {
                protocol: 'https',
                hostname: 'userweb.fct.unl.pt',
            },
            {
                protocol: 'https',
                hostname: 'web.tecnico.ulisboa.pt',
            },
            {
                protocol: 'https',
                hostname: 'www.philipp.ruemmer.org',
            },
            {
                protocol: 'https',
                hostname: 'people.unipmn.it',
            },
            {
                protocol: 'https',
                hostname: 'anthonywlin.github.io',
            },
            {
                protocol: 'https',
                hostname: 'malyzajko.github.io',
            },
            {
                protocol: 'https',
                hostname: 'cca.informatik.uni-freiburg.de',
            },
            {
                protocol: 'https',
                hostname: 'home.uni-leipzig.de',
            },
            {
                protocol: 'https',
                hostname: 'www.cs.cmu.edu',
            },
            {
                protocol: 'https',
                hostname: 'www.macs.hw.ac.uk',
            },
            {
                protocol: 'https',
                hostname: 'lh5.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'www21.in.tum.de',
            },
            {
                protocol: 'https',
                hostname: 'tu-dresden.de',
            },
            {
                protocol: 'https',
                hostname: 'www.lirmm.fr',
            },
            {
                protocol: 'https',
                hostname: 'www-i2.informatik.rwth-aachen.de',
            },
            {
                protocol: 'https',
                hostname: 'www.kroening.com',
            },
            {
                protocol: 'https',
                hostname: 'alexeyignatiev.github.io',
            },
            {
                protocol: 'https',
                hostname: 'hverhaeghe.bitbucket.io',
            },
            {
                protocol: 'https',
                hostname: 'kodu.ut.ee',
            },
            {
                protocol: 'https',
                hostname: 'pro.univ-lille.fr',
            },
            {
                protocol: 'https',
                hostname: 'www.cse.chalmers.se',
            },
            {
                protocol: 'https',
                hostname: 'people.sabanciuniv.edu',
            },
            {
                protocol: 'https',
                hostname: 'www.mthimm.de',
            },
            {
                protocol: 'https',
                hostname: 'wp.doc.ic.ac.uk',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'www.technion.ac.il',
            },
            {
                protocol: 'https',
                hostname: 'static.wixstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.technion.ac.il',
            },
        ],
    },
    webpack: (config) => {
        config.resolve.extensions.push(".mjs");
        return config;
    },
};

export default nextConfig;
