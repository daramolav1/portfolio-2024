import React from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import Header from "../common/header/Header";
import BreadCrumb from "../elements/breadcrumb/BreadCrumb";
import ProjectDisplay from "../component/project/ProjectDisplay";
import Footer from "../common/footer/Footer";

const ProjectGrid = () => {
  return (
    <>
      <SEO title="Projects" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <Header />
        <BreadCrumb title="Projects" page="Projects" />
        <ProjectDisplay colSize="col-xl-4 col-md-6" columnGap="row-15" />
        <Footer />
      </main>
    </>
  );
};

export default ProjectGrid;
