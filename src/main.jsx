import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <App />
      <Footer />
    </Router>
  </StrictMode>,
);
