import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas
      show={offcanvasShow}
      onHide={offcanvasHide}
      placement="end"
      className="header-offcanvasmenu"
    >
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <div className="row ">
          <div className="col-lg-5 col-xl-6">
            <ul className="main-navigation list-unstyled">
              <li>
                <Link to={process.env.PUBLIC_URL + "/about-me"}>About Me</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/projects"}>Projects</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/recommendations"}>
                  Recommendations
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/contact-me"}>
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="contact-info-wrap">
              <div className="contact-inner">
                <address className="address">
                  <span className="title">Location</span>
                  <p>Maplewood, NJ</p>
                </address>
                <address className="address">
                  <span className="title">Schedule A Meeting</span>
                  <a
                    href="https://calendly.com/victordaramola"
                    className="cal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Calendly
                  </a>
                </address>
              </div>
              <div className="contact-inner">
                <h5 className="title">Socials & Resume</h5>
                <div className="contact-social-share">
                  <ul className="social-share list-unstyled">
                    <li>
                      <a
                        href="https://github.com/daramolav1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/daramolav1/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Victor_Daramola_resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFilePdf />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;
