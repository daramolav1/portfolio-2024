import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import Presentation from "../elements/breadcrumb/Presentation";
import { slugify } from "../utils";
import ProjectData from "../data/project/ProjectData.json";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";

const allProjectData = ProjectData;

const ProjectDetails = () => {
  const params = useParams();
  const projectSlug = params.slug;

  const getProjectData = allProjectData.filter(
    (data) => slugify(data.title) === projectSlug
  );
  const detailsProject = getProjectData[0];

  return (
    <>
      <SEO title="Project Details" />
      <ColorSwitcher />
      <main className="main-wrapper project-details-wrapper">
        <Header />
        <Presentation
          title={detailsProject.title}
          paragraph={detailsProject.excerpt}
          mainThumb={detailsProject.image}
          githubLink={detailsProject.github}
          demoLink={detailsProject.demo}
          techStack={detailsProject.techStack}
        />

        <Footer />
      </main>
    </>
  );
};

export default ProjectDetails;
