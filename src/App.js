import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";

import Portfolio from "./pages/Portfolio";

import ProjectGrid from "./pages/ProjectGrid";
import ProjectDetails from "./pages/ProjectDetails";

// import AboutMe from "./pages/AboutMe";
import Recommendations from "./pages/Recommendations";
// import Contact from "./pages/Contact";
import ErrorPage from "./pages/404";
import ComingSoon from "./pages/ComingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Portfolio />} />

          {/* Project  */}
          <Route
            path={process.env.PUBLIC_URL + "/projects"}
            element={<ProjectGrid />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-details/:slug"}
            element={<ProjectDetails />}
          />

          {/* Pages  */}
          <Route
            path={process.env.PUBLIC_URL + "/about-me"}
            element={<ComingSoon />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/recommendations"}
            element={<Recommendations />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/contact-me"}
            element={<ComingSoon />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/coming-soon"}
            element={<ComingSoon />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/privacy-policy"}
            element={<PrivacyPolicy />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/404"}
            element={<ErrorPage />}
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
