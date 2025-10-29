import { Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import About from "./pages/About";
import SponsorsPage from "./pages/SponsorsPage";
import Speaker from "./pages/Speaker";
import Committe from "./pages/Committe";
import Program from "./pages/Program";
import Registration from "./pages/Registration";
//import Accomodation from './pages/Accomodation'
import Venue from "./pages/Venue";
import Transportation from "./pages/Transportation";
//import Tourism from "./pages/Tourism";
import SpeakersId from "./components/SpeakersId";
import Policies from "./pages/Policies";
import CallForWorkshops from "./pages/CallForWorkshops";
import IJCAR from "./pages/IJCAR";
import MentoringWorkshop from "./pages/MentoringWorkshop";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
      <Route path="/speakers" element={<Speaker />} />
      <Route path="/speakers/:name" element={<SpeakersId />} />
      <Route path="/committees" element={<Committe />} />
      <Route path="/program" element={<Program />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/transportation" element={<Transportation />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/call-for-workshops" element={<CallForWorkshops />} />
      <Route path="/ijcar" element={<IJCAR />} />
      <Route path="/mentoring-workshop" element={<MentoringWorkshop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
