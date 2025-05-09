/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'sqigmath.tecnico.ulisboa.pt',
            'www.dcc.fc.up.pt',
            'www.dcc.fc.up.pt',
            'joaoff.com',
            'userweb.fct.unl.pt',
            'web.tecnico.ulisboa.pt',
            'www.philipp.ruemmer.org',
            'people.unipmn.it',
            'anthonywlin.github.io',
            'malyzajko.github.io',
            'cca.informatik.uni-freiburg.de',
            'home.uni-leipzig.de',
            'www.cs.cmu.edu',
            'cca.informatik.uni-freiburg.de',
            'www.macs.hw.ac.uk',
            'lh5.googleusercontent.com',
            'www.macs.hw.ac.uk',
            'www21.in.tum.de',
            'tu-dresden.de',
            'www.lirmm.fr',
            'www-i2.informatik.rwth-aachen.de',
            'www.kroening.com',
            'alexeyignatiev.github.io',
            'hverhaeghe.bitbucket.io',
            'kodu.ut.ee',
            'pro.univ-lille.fr',
            'https://tu-dresden.de',
            'https://www21.in.tum.de',
            'www.cse.chalmers.se',
            'www.macs.hw.ac.uk',
            'people.sabanciuniv.edu',
            'www.mthimm.de/images/mt2021.jpg',
            'cca.informatik.uni-freiburg.de',
            'www.macs.hw.ac.uk',
            'www21.in.tum.de',
            'www.mthimm.de',
        ], // Add the external domain here
    },
    webpack: (config) => {
        config.resolve.extensions.push(".mjs");
        return config;
    },
};

export default nextConfig;
