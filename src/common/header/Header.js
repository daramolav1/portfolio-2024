import React, { useState } from "react";
import StickyHeader from "./StickyHeader";
import Logo from "../../elements/logo/Logo";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import SwitcherHeader from "../../elements/switcher/SwitcherHeader";
import OffcanvasMenu from "./OffcanvasMenu";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const OffcanvasHandleClose = () => setShowOffcanvas(false);
  const OffcanvasHandleShow = () => setShowOffcanvas(true);

  const sticky = StickyHeader(100);

  return (
    <>
      <header className="header axil-header header-style-3">
        <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <Logo
                  dimage="/images/VicInTech logo - Dark.png"
                  limage="/images/VicInTech logo - Light.png"
                  simage="/images/VicInTech logo - Light.png"
                />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="header-social-link">
                    <ul className="social-icon-list list-unstyled">
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
                  </li>

                  <li className="sidemenu-btn">
                    <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <SwitcherHeader />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffcanvasMenu
        offcanvasShow={showOffcanvas}
        offcanvasHide={OffcanvasHandleClose}
      />
    </>
  );
};

export default Header;
