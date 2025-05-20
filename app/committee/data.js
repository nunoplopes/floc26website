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
    { name: 'Rajeev Alur', image: RAJEEVALUR, affiliation: 'University of Pennsylvania', role: 'General Chair' },
    { name: 'Alexandra Silva', image: ALEXANDRA, affiliation: 'Cornell University', role: 'Advisory Chair' },
    { name: 'Nuno P. Lopes', image: NUNO, affiliation: 'University of Lisbon', role: 'Organization Chair' },
    { name: 'Aws Albarghouthi', image: AWS, affiliation: 'UW-Madison', role: 'Fundraising Co-Chair' },
    { name: 'Jules Villard', image: MOI, affiliation: 'Meta', role: 'Fundraising Co-Chair' },
    { name: 'Loris D\'Antoni', image: LORI, affiliation: 'UC San Diego', role: 'Fundraising Co-Chair' },
    { name: 'Alessandro Gianola', image: ALESSANDRO, affiliation: 'University of Lisbon', role: 'Workshops Co-Chair' },
    { name: 'Bernd Finkbeiner', image: Bernd_Finkbeiner, affiliation: 'CISPA Helmholtz Center for Information Security', role: 'Workshops Co-Chair' },
    { name: 'José Fragoso Santos', image: Josefragoso, affiliation: 'University of Lisbon', role: 'Volunteers Chair' },
    { name: 'Caterina Urban', image: caterina, affiliation: 'INRIA / ENS', role: 'Publicity Chair' },
  ],
  conferenceCommittees: [
    { name: 'Philipp Ruemmer', image: PHILIP, affiliation: 'University of Regensburg', role: 'CAV Conference Chair' },
    { name: 'Inês Lynce', image: INES, affiliation: 'University of Lisbon', role: 'CP Conference Chair' },
    { name: 'Pedro Adão', image: PEDRO, affiliation: 'University of Lisbon', role: 'CSF Conference Chair' },
    { name: 'Matthias Knorr', image: null, affiliation: 'NOVA University Lisbon', role: 'DL Conference Chair' }, // Changed to null
    { name: 'Sandra Alves', image: 'https://www.dcc.fc.up.pt/~sandra/Home/Home_files/Photo.jpg', affiliation: 'University of Porto', role: 'FSCD Conference Chair' },
    { name: 'Vítor Santos Costa', image: null, affiliation: 'University of Porto', role: 'ICLP Conference Chair' }, // Changed to null
    { name: 'Carlos Caleiro', image: 'https://sqigmath.tecnico.ulisboa.pt/photos/ccal.png', affiliation: 'University of Lisbon', role: 'IJCAR Conference Chair' },
    { name: 'João F. Ferreira', image: 'https://joaoff.com/authors/jff/avatar_hu91756166fdcda866b2836c864cc3667a_424014_270x270_fill_q90_lanczos_center.jpg', affiliation: 'University of Lisbon', role: 'ITP Conference Chair' },
    { name: 'João Leite', image: 'https://userweb.fct.unl.pt/~jleite/images/jleite.jpg', affiliation: 'NOVA University Lisbon', role: 'KR Conference Chair' },
    { name: 'Bernardo Toninho', image: 'https://web.tecnico.ulisboa.pt/bernardo.toninho/images/me.jpg', affiliation: 'University of Lisbon', role: 'LICS Conference Chair' },
    { name: 'Ricardo Gonçalves', image: 'https://userweb.fct.unl.pt/~rjrg/images/ricardo.jpg', affiliation: 'NOVA University Lisbon', role: 'NMR Conference Chair' },
    { name: 'Vasco Manquinho', image: null, affiliation: 'University of Lisbon', role: 'SAT Conference Chair' }, // Changed to null
  ],
  programCommittees: [
    { name: 'Anthony W. Lin', image: 'https://anthonywlin.github.io/anthony-talk.jpg', affiliation: 'Technical University of Kaiserslautern', role: 'CAV PC Chair' },
    { name: 'Eva Darulova', image: 'https://malyzajko.github.io/images/profile-2023-up.jpg', affiliation: 'Uppsala University', role: 'CAV PC Chair' },
    { name: 'Philipp Ruemmer', image: 'http://www.philipp.ruemmer.org/portrait.jpeg', affiliation: 'University of Regensburg', role: 'CAV PC Chair' }, // This one used PHILIP before, changed to URL. Ensure consistency if PHILIP was correct.
    { name: 'Frank Pfenning', image: 'https://www.cs.cmu.edu/~fp/fp-small.jpg', affiliation: 'CMU', role: 'FSCD PC Chair' },
    { name: 'Laura Giordano', image: 'http://people.unipmn.it/laura.giordano/f_laura_2019', affiliation: 'Università del Piemonte Orientale', role: 'ICLP PC Chair' },
    { name: 'Armin Biere', image: 'https://cca.informatik.uni-freiburg.de/img/biere.jpg', affiliation: 'University of Freiburg', role: 'IJCAR PC Chair' },
    { name: 'Carsten Lutz', image: 'https://home.uni-leipzig.de/clu/imgs/hamid1.jpg', affiliation: 'Universität Leipzig', role: 'IJCAR PC Chair' },
    { name: 'Sara Negri', image: 'https://lh5.googleusercontent.com/FUN9QlEzeI4evevDxuXWTvaMN4mb5eijk7tWmOHgz--3VpOkpKft9him77zl3hsAfHpltHVuIGjftS44dgtHXzMJwv7VxzzSy9X85UqwaBdOjJX1vNPU0VW96RYyiPKE5g=w1280', affiliation: 'Università degli Studi di Genova', role: 'IJCAR PC Chair' },
    { name: 'Ekaterina Komendantskaya', image: 'https://www.macs.hw.ac.uk/~ek19/KK4.JPG', affiliation: 'Heriot-Watt University and University of Southampton', role: 'ITP PC Chair' },
    { name: 'Tobias Nipkow', image: 'https://www21.in.tum.de/~nipkow/ich2019.jpg', affiliation: 'TU Munich', role: 'ITP PC Chair' },
    { name: 'Franz Baader', image: 'https://tu-dresden.de/ing/informatik/thi/lat/ressourcen/bilder/fotos-von-mitarbeitern/franz_baader_wide.jpg/@@images/1f01cc66-e39a-459c-8165-234c7713b4be.jpeg', affiliation: 'TU Dresden', role: 'KR PC Chair' },
    { name: 'Marie-Laure Mugnier', image: 'https://www.lirmm.fr/~mugnier/index_files/mlm.jpg', affiliation: 'University of Montpellier', role: 'KR PC Chair' },
    { name: 'Claudia Faggian', image: null, affiliation: 'CNRS', role: 'LICS PC Chair' }, // Changed to null
    { name: 'Joost-Pieter Katoen', image: 'https://www-i2.informatik.rwth-aachen.de/~katoen/newglasses.jpg', affiliation: 'RWTH Aachen University', role: 'LICS PC Chair' },
    { name: 'Alexey Ignatiev', image: 'https://alexeyignatiev.github.io/assets/img/me.jpg', affiliation: 'Monash University', role: 'SAT PC Chair' },
    { name: 'Stefan Szeider', image: null, affiliation: 'TU Wien', role: 'SAT PC Chair' }, // Changed to null
  ],
  steeringCommittee: [
    // For Rajeev Alur in steeringCommittee, if he has no image for this specific role, use null.
    // If RAJEEVALUR is appropriate, keep it. I'll assume for this example he has an image for this role.
    { name: 'Rajeev Alur', image: null, affiliation: 'University of Pennsylvania', role: 'General Chair' },
    { name: 'Alexandra Silva', image: null, affiliation: 'Cornell University', role: 'Advisory Chair' },
    { name: 'Daniel Kröning', image: 'https://www.kroening.com/photo_neu.jpg', affiliation: 'University of Oxford', role: 'CAV Representative' },
    { name: 'Hélène Verhaeghe', image: 'https://hverhaeghe.bitbucket.io/images/me.jpg', affiliation: 'KU Leuven', role: 'CP Representative' },
    { name: 'Dominique Unruh', image: 'https://kodu.ut.ee/~unruh/portrait-200.jpg', affiliation: 'University of Tartu', role: 'CSF Representative' },
    { name: 'Patrick Baillot', image: 'https://pro.univ-lille.fr/fileadmin/_processed_/1/8/csm_DSC_0862_9c3cca34f8.jpg', affiliation: 'CNRS/Université de Lille', role: 'FSCD Representative' },
    { name: 'Marco Gavanelli', image: null, affiliation: 'Università degli Studi di Ferrara', role: 'ICLP Representative' }, // Changed to null
    { name: 'Franz Baader', image: 'https://tu-dresden.de/ing/informatik/thi/lat/ressourcen/bilder/fotos-von-mitarbeitern/franz_baader_wide.jpg/@@images/1f01cc66-e39a-459c-8165-234c7713b4be.jpeg', affiliation: 'TU Dresden', role: 'IJCAR Representative' },
    { name: 'Magnus Myreen', image: 'https://www.cse.chalmers.se/~myreen/me.jpg', affiliation: 'Chalmers University', role: 'ITP Representative' },
    { name: 'Esra Erdem', image: 'https://people.sabanciuniv.edu/esraerdem/esra15.jpg', affiliation: 'Sabanci University', role: 'KR Representative' },
    { name: 'Igor Walukiewicz', image: null, affiliation: 'University of Bordeaux', role: 'LICS Representative' }, // Changed to null
    { name: 'Matthias Thimm', image: 'https://www.mthimm.de/images/mt2021.jpg', affiliation: 'FernUniversität in Hagen', role: 'NMR Representative' },
    { name: 'Armin Biere', image: 'https://cca.informatik.uni-freiburg.de/img/biere.jpg', affiliation: 'University of Freiburg', role: 'SAT Representative' },
  ],
};