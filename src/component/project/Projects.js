import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ProjectData from "../../data/project/ProjectData.json";
import ProjectItem from "./itemProp/ProjectItem";
import { Link } from "react-router-dom";

const portfolioData = ProjectData;

const Projects = () => {
  return (
    <div className="section section-padding bg-color-dark">
      <div className="container">
        <SectionTitle
          subtitle="Work Portfolio"
          title="My Previous Projects"
          description="Sadly, my work at TD Bank is in its respective internal github account and can not be shared, so these are works from previous jobs."
          textAlignment="heading-light-left"
          textColor=""
        />
        <div className="row row-45">
          {portfolioData.slice(0, 4).map((data) => (
            <div className="col-md-6" key={data.id}>
              <ProjectItem projectStyle="project-style-2" portfolio={data} />
            </div>
          ))}
        </div>
        <div className="more-project-btn">
          <Link
            to={process.env.PUBLIC_URL + "/projects"}
            className="axil-btn btn-fill-white"
          >
            Discover More Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
