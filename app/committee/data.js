import RAJEEVALUR from '@/assets/images/committes/rajeev Alur.jpg'
import ALEXANDRA from '@/assets/images/committes/alexandra.jpg'
import MOI from '@/assets/images/committes/moi.jpg'
import NUNO from '@/assets/images/committes/nuno lopes.jpg'
import AWS from '@/assets/images/committes/aws.jpg'
import LORI from "@/assets/images/committes/Loris D'Antoni.jpg"
import ALESSANDRO from "@/assets/images/committes/AlessandroGianola.jpg"
import Bernd_Finkbeiner from "@/assets/images/committes/Bernd_Finkbeiner.avif"
import Josefragoso from "@/assets/images/committes/Jose fragoso.png"
import caterina from "@/assets/images/committes/caterina.jpg"
import PHILIP from "@/assets/images/committes/philip.jpeg"
import INES from "@/assets/images/committes/ines.jpg"
import PEDRO from "@/assets/images/committes/pedro.jpg"
// No need for PLACEHOLDER_IMAGE import if using null

export const committeeData = {
  organizers: [
    { name: 'Rajeev Alur', image: RAJEEVALUR, affiliation: 'University of Pennsylvania', role: 'General Chair', webpage: 'https://www.cis.upenn.edu/~alur/' },
    { name: 'Alexandra Silva', image: ALEXANDRA, affiliation: 'Cornell University', role: 'Advisory Chair', webpage: 'https://alexandrasilva.org' },
    { name: 'Nuno P. Lopes', image: NUNO, affiliation: 'University of Lisbon', role: 'Organization Chair', webpage: 'https://web.ist.utl.pt/nuno.lopes/' },
    { name: 'Aws Albarghouthi', image: AWS, affiliation: 'UW-Madison', role: 'Fundraising Co-Chair', webpage: 'https://pages.cs.wisc.edu/~aws/' },
    { name: 'Jules Villard', image: MOI, affiliation: 'Meta', role: 'Fundraising Co-Chair', webpage: 'https://jvillard.net' },
    { name: 'Loris D\'Antoni', image: LORI, affiliation: 'UC San Diego', role: 'Fundraising Co-Chair', webpage: 'https://cseweb.ucsd.edu/~ldantoni/' },
    { name: 'Alessandro Gianola', image: ALESSANDRO, affiliation: 'University of Lisbon', role: 'Workshops Co-Chair', webpage: 'https://arsr.inesc-id.pt/~agianola/' },
    { name: 'Bernd Finkbeiner', image: Bernd_Finkbeiner, affiliation: 'CISPA Helmholtz Center for Information Security', role: 'Workshops Co-Chair', webpage: 'https://finkbeiner.groups.cispa.de/people/finkbeiner.html' },
    { name: 'José Fragoso Santos', image: Josefragoso, affiliation: 'University of Lisbon', role: 'Volunteers Chair', webpage: 'https://web.ist.utl.pt/jose.fragoso/' },
    { name: 'Caterina Urban', image: caterina, affiliation: 'INRIA / ENS', role: 'Publicity Chair', webpage: 'https://caterinaurban.github.io' },
  ],
  conferenceCommittees: [
    { name: 'Philipp Ruemmer', image: PHILIP, affiliation: 'University of Regensburg', role: 'CAV Conference Chair', webpage: 'http://www.philipp.ruemmer.org' },
    { name: 'Inês Lynce', image: INES, affiliation: 'University of Lisbon', role: 'CP Conference Chair', webpage: 'https://sat.inesc-id.pt/~ines/' },
    { name: 'Pedro Adão', image: PEDRO, affiliation: 'University of Lisbon', role: 'CSF Conference Chair', webpage: 'https://www.math.tecnico.ulisboa.pt/~padao/' },
    { name: 'Matthias Knorr', image: null, affiliation: 'NOVA University Lisbon', role: 'DL Conference Chair', webpage: 'https://userweb.fct.unl.pt/~mkn/' },
    { name: 'Sandra Alves', image: null, affiliation: 'University of Porto', role: 'FSCD Conference Chair', webpage: 'https://www.dcc.fc.up.pt/~sandra/Home/Home.html' },
    { name: 'Vítor Santos Costa', image: null, affiliation: 'University of Porto', role: 'ICLP Conference Chair', webpage: 'https://www.dcc.fc.up.pt/~vsc/' },
    { name: 'Carlos Caleiro', image: null, affiliation: 'University of Lisbon', role: 'IJCAR Conference Chair', webpage: 'https://sqig.math.tecnico.ulisboa.pt/ccal' },
    { name: 'João F. Ferreira', image: null, affiliation: 'University of Lisbon', role: 'ITP Conference Chair', webpage: 'https://joaoff.com' },
    { name: 'João Leite', image: null, affiliation: 'NOVA University Lisbon', role: 'KR Conference Chair', webpage: 'https://userweb.fct.unl.pt/~jleite/' },
    { name: 'Bernardo Toninho', image: null, affiliation: 'University of Lisbon', role: 'LICS Conference Chair', webpage: 'https://web.tecnico.ulisboa.pt/bernardo.toninho/' },
    { name: 'Ricardo Gonçalves', image: null, affiliation: 'NOVA University Lisbon', role: 'NMR Conference Chair', webpage: 'https://userweb.fct.unl.pt/~rjrg/' },
    { name: 'Vasco Manquinho', image: null, affiliation: 'University of Lisbon', role: 'SAT Conference Chair', webpage: 'https://sat.inesc-id.pt/~vmm/' },
  ],
  programCommittees: [
    { name: 'Anthony W. Lin', image: null, affiliation: 'Technical University of Kaiserslautern', role: 'CAV PC Chair', webpage: 'https://anthonywlin.github.io' },
    { name: 'Eva Darulova', image: null, affiliation: 'Uppsala University', role: 'CAV PC Chair', webpage: 'https://malyzajko.github.io' },
    { name: 'Philipp Ruemmer', image: null, affiliation: 'University of Regensburg', role: 'CAV PC Chair', webpage: 'http://www.philipp.ruemmer.org' },
    { name: 'Frank Pfenning', image: null, affiliation: 'CMU', role: 'FSCD PC Chair', webpage: 'https://www.cs.cmu.edu/~fp/' },
    { name: 'Laura Giordano', image: null, affiliation: 'Università del Piemonte Orientale', role: 'ICLP PC Chair', webpage: 'https://people.unipmn.it/laura.giordano/' },
    { name: 'Armin Biere', image: null, affiliation: 'University of Freiburg', role: 'IJCAR PC Chair', webpage: 'https://cca.informatik.uni-freiburg.de/biere/' },
    { name: 'Carsten Lutz', image: null, affiliation: 'Universität Leipzig', role: 'IJCAR PC Chair', webpage: 'https://home.uni-leipzig.de/clu/' },
    { name: 'Sara Negri', image: null, affiliation: 'Università degli Studi di Genova', role: 'IJCAR PC Chair', webpage: 'https://sites.google.com/view/saranegri/home' },
    { name: 'Ekaterina Komendantskaya', image: null, affiliation: 'Heriot-Watt University and University of Southampton', role: 'ITP PC Chair', webpage: 'https://www.macs.hw.ac.uk/~ek19/' },
    { name: 'Tobias Nipkow', image: null, affiliation: 'TU Munich', role: 'ITP PC Chair', webpage: 'https://www21.in.tum.de/~nipkow/' },
    { name: 'Franz Baader', image: null, affiliation: 'TU Dresden', role: 'KR PC Chair', webpage: 'https://tu-dresden.de/ing/informatik/thi/lat/die-professur/franz-baader' },
    { name: 'Marie-Laure Mugnier', image: null, affiliation: 'University of Montpellier', role: 'KR PC Chair', webpage: 'https://www.lirmm.fr/~mugnier/' },
    { name: 'Claudia Faggian', image: null, affiliation: 'CNRS', role: 'LICS PC Chair', webpage: 'https://www.irif.fr/~faggian/' },
    { name: 'Joost-Pieter Katoen', image: null, affiliation: 'RWTH Aachen University', role: 'LICS PC Chair', webpage: 'https://www-i2.informatik.rwth-aachen.de/~katoen/' },
    { name: 'Alexey Ignatiev', image: null, affiliation: 'Monash University', role: 'SAT PC Chair', webpage: 'https://alexeyignatiev.github.io' },
    { name: 'Stefan Szeider', image: null, affiliation: 'TU Wien', role: 'SAT PC Chair', webpage: 'https://www.ac.tuwien.ac.at/people/szeider/' },
  ],
  steeringCommittee: [
    { name: 'Rajeev Alur', image: null, affiliation: 'University of Pennsylvania', role: 'General Chair', webpage: 'https://www.cis.upenn.edu/~alur/' },
    { name: 'Alexandra Silva', image: null, affiliation: 'Cornell University', role: 'Advisory Chair', webpage: 'https://alexandrasilva.org' },
    { name: 'Daniel Kröning', image: null, affiliation: 'University of Oxford', role: 'CAV Representative', webpage: 'https://www.kroening.com' },
    { name: 'Hélène Verhaeghe', image: null, affiliation: 'KU Leuven', role: 'CP Representative', webpage: 'https://hverhaeghe.bitbucket.io' },
    { name: 'Dominique Unruh', image: null, affiliation: 'University of Tartu', role: 'CSF Representative', webpage: 'https://kodu.ut.ee/~unruh/' },
    { name: 'Patrick Baillot', image: null, affiliation: 'CNRS/Université de Lille', role: 'FSCD Representative', webpage: 'https://pro.univ-lille.fr/patrick-baillot/' },
    { name: 'Marco Gavanelli', image: null, affiliation: 'Università degli Studi di Ferrara', role: 'ICLP Representative', webpage: 'https://docente.unife.it/docenti-en/marco.gavanelli?set%5Flanguage=en' },
    { name: 'Franz Baader', image: null, affiliation: 'TU Dresden', role: 'IJCAR Representative', webpage: 'https://tu-dresden.de/ing/informatik/thi/lat/die-professur/franz-baader' },
    { name: 'Magnus Myreen', image: null, affiliation: 'Chalmers University', role: 'ITP Representative', webpage: 'https://www.cse.chalmers.se/~myreen/' },
    { name: 'Esra Erdem', image: null, affiliation: 'Sabanci University', role: 'KR Representative', webpage: 'https://people.sabanciuniv.edu/esraerdem/' },
    { name: 'Igor Walukiewicz', image: null, affiliation: 'University of Bordeaux', role: 'LICS Representative', webpage: 'https://www.labri.fr/perso/igw/' },
    { name: 'Matthias Thimm', image: null, affiliation: 'FernUniversität in Hagen', role: 'NMR Representative', webpage: 'https://www.mthimm.de' },
    { name: 'Armin Biere', image: null, affiliation: 'University of Freiburg', role: 'SAT Representative', webpage: 'https://cca.informatik.uni-freiburg.de/biere/' },
  ],
};