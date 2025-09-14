import { StrictMode, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, useLocation } from "react-router";
import Header from "./components/Header/Header.jsx";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "./index.css";

const ScrollToTop = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [useLocation()]);
  return null;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Header />
      <App />
      <Footer />
    </Router>
  </StrictMode>,
);
