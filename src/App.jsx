import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Speaker from "./pages/Speaker";
import Committe from "./pages/Committe";
import Program from "./pages/Program";
import Registration from "./pages/Registration";
//import Accomodation from './pages/Accomodation'
import Venue from "./pages/Venue";
import Transportation from "./pages/Transportation";
//import Tourism from "./pages/Tourism";
import SpeakersId from "./components/SpeakersId";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />
      <Route path="/speakers" element={<Speaker />} />
      <Route path="/speakers/:name" element={<SpeakersId />} />
      <Route path="/committees" element={<Committe />} />
      <Route path="/program" element={<Program />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/transportation" element={<Transportation />} />
      //<Route path="/tourism" element={<Tourism />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default App;
