import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import Testimony from "./Testimony";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="section section-padding-equal">
      <div className="container">
        <SectionTitle
          subtitle="Recommendations"
          title="Recommendations From Coworkers"
          textAlignment="heading-left"
          textColor=""
        />
        <div className="row">
          <Testimony colSize="col-lg-4" itemShow="3" />
        </div>
        <div className="more-project-btn">
          <Link
            to={process.env.PUBLIC_URL + "/recommendations"}
            className="axil-btn btn-fill-primary"
          >
            View More
          </Link>
        </div>
      </div>
      <ul className="shape-group-4 list-unstyled">
        <li className="shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
            alt="Bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default Testimonials;
