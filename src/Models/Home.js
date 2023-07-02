import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import './Home.css';

export class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    };

    const imgStyle = {
      width: "100%",
      height: "auto",
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Slide 1" style={imgStyle} />
          </div>
          <div>
            <img src={image2} alt="Slide 2" style={imgStyle} />
          </div>
          <div>
            <img src={image3} alt="Slide 3" style={imgStyle} />
          </div>
        </Slider>

        <div className="col-md-11">
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-4">
            <div className="col">
              <a
                href="https://www.apollo247.com/?utm_campaign=BAA_Home_Banner&amp;utm_source=Apollo_Hospitals&amp;utm_medium=Organic"
                target="_blank"
                className="tp_widget"
                id="btn-cta-bb-book-appointment"
              >
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg"
                  alt="icon"
                  width="64"
                />
                <h5>Book Appointment</h5>
              </a>
            </div>
            <div className="col d-none d-sm-block">
              <a
                href="https://www.askapollo.com/apollo-prohealth"
                target="_blank"
                className="tp_widget"
                id="btn-cta-bb-book-prohealth"
              >
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg"
                  alt="icon"
                />
                <h5>Book Health Check-Up</h5>
              </a>
            </div>
            <div className="col d-sm-none d-block">
              <a href="tel:08069991066" className="tp_widget" id="btn-cta-bb-book-prohealth">
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg"
                  alt="icon"
                />
                <h5>Book Health Check-Up</h5>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.apollo247.com/specialties?utm_campaign=apollo247_specialties&amp;utm_source=icons_below_the_banner&amp;utm_medium=digital"
                id="btn-cta-bb-consult-online"
                target="_blank"
                className="tp_widget"
              >
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg"
                  alt="icon"
                />
                <h5>Consult Online</h5>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.apollopharmacy.in/?utm_campaign=apollopharmacy&amp;utm_source=icons_below_the_banner&amp;utm_medium=digital"
                id="btn-cta-bb-buy-medicine"
                target="_blank"
                className="tp_widget"
              >
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg"
                  alt="icon"
                />
                <h5>Buy Medicine</h5>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.apollohospitals.com/locations/india/?utm_campaign=apollo_locations&amp;utm_source=icons_below_the_banner&amp;utm_medium=digital"
                id="btn-cta-bb-find-hospital"
                className="tp_widget"
              >
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg"
                  alt="icon"
                />
                <h5>Find Hospital</h5>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.apollo247.com/health-records/test-report"
                target="_blank"
                id="btn-cta-bb-book-labtest"
                className="tp_widget"
              >
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg"
                  alt="icon"
                />
                <h5>View Health Record</h5>
              </a>
            </div>
          </div>
         

          </div>
          <section className="assured_menu">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-tabs scroll-items" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="specialties-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#specialties"
                      type="button"
                      role="tab"
                      aria-controls="specialties"
                      aria-selected="true"
                    >
                      Specialties
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="ProHealth-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ProHealth"
                      type="button"
                      role="tab"
                      aria-controls="ProHealth"
                      aria-selected="false"
                      tabIndex="-1"
                    >
                      ProHealth
                    </button>
                  </li>
                </ul>
                <div className="tab-content py-sm-5 py-3">
                  <div className="tab-pane active show" id="specialties" role="tabpanel" aria-labelledby="Procedures-tab" tabIndex="0">
                    <div className="row justify-content-center text-center">
                      <div className="col-md-12">
                        <h2>Explore our Centres of Clinical Excellence</h2>
                        <p className="sub_hdng pt-1">Learn about the world-class healthcare we provide</p>
                      </div>
                      <div className="col-md-5">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah.webp"
                          alt="Advised a procedure or surgery?"
                          className="img-fluid rounded-4 d-none d-sm-block"
                        />
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah_m.webp"
                          alt="Advised a procedure or surgery?"
                          className="img-fluid rounded-4 d-block d-sm-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      
    );
  }
}
