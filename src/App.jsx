import { Route, Routes } from "react-router";
import SpeakersId from "./components/SpeakersId";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import CallForWorkshops from "./pages/CallForWorkshops";
import Committe from "./pages/Committe";
import IJCAR from "./pages/IJCAR";
import Layout from "./pages/Layout";
import MentoringWorkshop from "./pages/MentoringWorkshop";
import NotFound from "./pages/NotFound";
import Olympics from "./pages/Olympics.jsx";
import Photos from "./pages/Photos";
import Policies from "./pages/Policies";
import Program from "./pages/Program";
import Registration from "./pages/Registration";
import Speaker from "./pages/Speaker";
import SponsorsPage from "./pages/SponsorsPage";
import Tourism from "./pages/Tourism";
import Transportation from "./pages/Transportation";
import Venue from "./pages/Venue";

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
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/tourism" element={<Tourism />} />
      <Route path="/local-transportation" element={<Transportation />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/call-for-workshops" element={<CallForWorkshops />} />
      <Route path="/olympics" element={<Olympics />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/ijcar" element={<IJCAR />} />
      <Route path="/mentoring-workshop" element={<MentoringWorkshop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
