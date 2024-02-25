import React from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import Header from "../common/header/Header";
import Banner from "../component/banner/Banner";
import Projects from "../component/project/Projects";
import Skills from "../component/skills/Skills";
import Testimonials from "../component/testimonial/Testimonials";
import SectionTitle from "../elements/section-title/SectionTitle";
import Form from "../component/contact/Form";
import Footer from "../common/footer/Footer";

const Portfolio = () => {
  return (
    <>
      <SEO title="Portfolio" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <Header />
        <Banner />
        <Projects />
        <Skills />
        <Testimonials />

        <div className="section-padding bg-color-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-address mb--30">
                  <SectionTitle
                    subtitle="Need a developer?"
                    title="Let’s work together"
                    description=""
                    textAlignment="heading-light-left"
                    textColor=""
                  />
                  <div className="address-list">
                    <div className="address">
                      <h6 className="title">E-mail</h6>
                      <p>
                        <a href="mailto:victorddaramola@gmail.com">
                          victorddaramola@gmail.com
                        </a>
                      </p>
                    </div>
                    <div className="address">
                      <h6 className="title">Address</h6>
                      <p>Maplewood, NJ</p>
                    </div>
                    <div className="address">
                      <h6 className="title">Calendly</h6>
                      <p>
                        <a
                          href="https://calendly.com/victordaramola"
                          className="cal"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Click Me
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form-box mb--30">
                  <h3 className="title">Describe your project</h3>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
