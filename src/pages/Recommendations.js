import React from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import Header from "../common/header/Header";
import BreadCrumb from "../elements/breadcrumb/BreadCrumb";
import SectionTitle from "../elements/section-title/SectionTitle";
import TestimonialData from "../data/testimonial/TestimonialData.json";
import RecommendationItem from "../component/testimonial/itemProp/RecommendationItem";
import Footer from "../common/footer/Footer";
import { slugify } from "../utils";

const allData = TestimonialData;

const Recommendations = () => {
  const otherPlacesData = allData.filter(
    (data) => slugify(data.fromtext) !== "td-bank"
  );
  const tdData = allData.filter((data) => slugify(data.fromtext) === "td-bank");

  return (
    <>
      <SEO title="Testimonials" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <Header />
        <BreadCrumb title="Recommendations" page="Recommendations" />

        <div className="section section-padding customer-review-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <SectionTitle
                  subtitle=""
                  title="Co-Worker </br>Recommendations"
                  description="Recommendations from people I've worked with at TD Bank"
                  textAlignment="heading-left"
                  textColor=""
                />
              </div>
              <div className="col-lg-4">
                <div className="review-site-logo">
                  <a href="https://www.td.com/us/en/personal-banking">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon/td-banner.png"
                      }
                      alt="TD Bank"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <RecommendationItem
                colSize="col-lg-4"
                itemShow="5"
                testimonialData={tdData}
              />
            </div>
          </div>
        </div>

        {Object.values(otherPlacesData)[0] ? (
          <div className="section section-padding customer-review-area bg-color-dark overflow-hidden">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    subtitle=""
                    title="Recommendations From People I've Worked With Elsewhere"
                    description="These are recommendations from people I've worked with at other companies"
                    textAlignment="heading-light-left"
                    textColor=""
                  />
                </div>
              </div>
              <div className="row">
                <RecommendationItem
                  colSize="col-lg-4"
                  itemShow="3"
                  layoutStyle="testimonial-light"
                  testimonialData={otherPlacesData}
                />
              </div>
            </div>
            <ul className="shape-group-11 list-unstyled">
              <li className="shape shape-1">
                <img
                  src={process.env.PUBLIC_URL + "/images/others/line-6.png"}
                  alt="line"
                />
              </li>
              <li className="shape shape-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/others/circle-3.png"}
                  alt="line"
                />
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <Footer />
      </main>
    </>
  );
};

export default Recommendations;
