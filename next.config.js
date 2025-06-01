/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            // University domains
            { protocol: 'https', hostname: 'www.cis.upenn.edu' },
            { protocol: 'https', hostname: 'alexandrasilva.org' },
            { protocol: 'https', hostname: 'web.ist.utl.pt' },
            { protocol: 'https', hostname: 'pages.cs.wisc.edu' },
            { protocol: 'https', hostname: 'cseweb.ucsd.edu' },
            { protocol: 'https', hostname: 'arsr.inesc-id.pt' },
            { protocol: 'https', hostname: 'finkbeiner.groups.cispa.de' },
            { protocol: 'https', hostname: 'caterinaurban.github.io' },
            { protocol: 'https', hostname: 'www.philipp.ruemmer.org' },
            { protocol: 'http', hostname: 'www.philipp.ruemmer.org' },
            { protocol: 'https', hostname: 'sat.inesc-id.pt' },
            { protocol: 'https', hostname: 'www.math.tecnico.ulisboa.pt' },
            { protocol: 'https', hostname: 'userweb.fct.unl.pt' },
            { protocol: 'https', hostname: 'www.dcc.fc.up.pt' },
            { protocol: 'https', hostname: 'sqigmath.tecnico.ulisboa.pt' },
            { protocol: 'https', hostname: 'joaoff.com' },
            { protocol: 'https', hostname: 'web.tecnico.ulisboa.pt' },
            { protocol: 'https', hostname: 'anthonywlin.github.io' },
            { protocol: 'https', hostname: 'malyzajko.github.io' },
            { protocol: 'http', hostname: 'people.unipmn.it' },
            { protocol: 'https', hostname: 'people.unipmn.it' },
            { protocol: 'https', hostname: 'cca.informatik.uni-freiburg.de' },
            { protocol: 'https', hostname: 'home.uni-leipzig.de' },
            { protocol: 'https', hostname: 'www.cs.cmu.edu' },
            { protocol: 'https', hostname: 'www.macs.hw.ac.uk' },
            { protocol: 'https', hostname: 'www21.in.tum.de' },
            { protocol: 'https', hostname: 'tu-dresden.de' },
            { protocol: 'https', hostname: 'www.lirmm.fr' },
            { protocol: 'https', hostname: 'www-i2.informatik.rwth-aachen.de' },
            { protocol: 'https', hostname: 'www.kroening.com' },
            { protocol: 'https', hostname: 'alexeyignatiev.github.io' },
            { protocol: 'https', hostname: 'hverhaeghe.bitbucket.io' },
            { protocol: 'https', hostname: 'kodu.ut.ee' },
            { protocol: 'https', hostname: 'pro.univ-lille.fr' },
            { protocol: 'https', hostname: 'www.cse.chalmers.se' },
            { protocol: 'https', hostname: 'people.sabanciuniv.edu' },
            { protocol: 'https', hostname: 'www.mthimm.de' },
            { protocol: 'https', hostname: 'www.ac.tuwien.ac.at' },
            { protocol: 'https', hostname: 'docente.unife.it' },
            { protocol: 'https', hostname: 'www.labri.fr' },
            { protocol: 'https', hostname: 'sites.google.com' },
            { protocol: 'https', hostname: 'www.irif.fr' },
            { protocol: 'https', hostname: 'wp.doc.ic.ac.uk' },
            // Other domains
            { protocol: 'https', hostname: 'static.wixstatic.com' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'lh5.googleusercontent.com' },
            { protocol: 'https', hostname: 'jvillard.net' },
            { protocol: 'https', hostname: 'lh4.googleusercontent.com' },
            { protocol: 'https', hostname: 'servizi.unife.it' }
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production'
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true
    },
    webpack: (config) => {
        config.resolve.extensions.push(".mjs");
        return config;
    }
};

export default nextConfig;
