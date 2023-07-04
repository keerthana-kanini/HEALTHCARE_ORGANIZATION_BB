import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import apollo from "../Images/APOLLOHOSP.jpg";
import './Home.css';
import Navhome from "../Navbar/Navhome";

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
    const overflow={
      overflow:'hidden'
    }

    return (
      <div><Navhome/>
      <div style={overflow}>
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
<br/><br/>
        <div className="col-md-11"  >
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-4">
            <div className="col">
              <a
                href=""
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
                href=""
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
              <a href=" " className="tp_widget" id="btn-cta-bb-book-prohealth">
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg"
                  alt="icon"
                />
                <h5>Book Health Check-Up</h5>
              </a>
            </div>
            <div className="col">
              <a
                href=""
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
                href=""
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
                href=""
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
                href=" "
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
        <section className="why_ah_sec">
        <div className="container">
          <div className="row g-lg-5 g-3">
            <div className="col-md-7">
              <h2>Why Choose Apollo Healthcare?</h2>
              <p>
                Established by Dr Prathap C Reddy in 1983, Apollo Healthcare
                has a robust presence across the healthcare ecosystem. From
                routine wellness &amp; preventive health care to innovative
                life-saving treatments and diagnostic services, Apollo Hospitals
                has touched more than 200 million lives from over 120 countries.
              </p>
              <div className="row g-xl-5 g-2 pt-lg-4 pt-2 pb-3 pb-lg-0">
                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/healinghands.svg"
                          alt=""
                          className="point_icon"
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4>
                          <span className="counter-holder">73</span>+
                        </h4>
                        <div>
                          Largest private healthcare network of Hospitals
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg"
                          alt=""
                          className="point_icon"
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4>
                          <span className="counter-holder">400</span>+
                        </h4>
                        <div>
                          Largest private network of clinics across India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/adavanced.svg"
                          alt=""
                          className="point_icon"
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4>
                          <span className="counter-holder">1,100</span>+
                        </h4>
                        <div>Diagnostic centres across India</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg"
                          alt=""
                          className="point_icon"
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4>
                          <span className="counter-holder">5,000</span>+
                        </h4>
                        <div>Pharmacies</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg"
                          alt=""
                          className="point_icon"
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4>
                          <span className="counter-holder">10,000</span>+
                        </h4>
                        <div>Pin codes Served across India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img
                          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg"
                          alt=""
                          className="point_icon"
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4>
                          <span className="counter-holder">11,000</span>+
                        </h4>
                        <div>Doctors</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card border-0 who-card">
                <img
                  src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/whychoseapollo_ah.webp"
                  className="card-img"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-bottom">
        <div className="wrapper">
          <div className="footer-bottom-inner">
            {/* FOOTER LEFT START */}
            <div className="footer-bottom-left">
              <div>
                <div id="block-footerbottomlogo">
                  <div className="layout layout--onecol">
                    <div className="layout__region layout__region--content">
                      <div>
                        <div className="footer-logo">
                          <img
                            src={apollo}
                            alt="footer logo"
                          />
                        </div>
                        <p>
                          Tower A, Unitech Business Park,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <br />
                          Block - F, South City 1, Sector - 41,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <br />
                          Gurgaon, Haryana - 122001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FOOTER LEFT END */}

            {/* FOOTER CENTRE START */}
            <div className="footer-social-outer">
              <div>
                <div id="block-footersocialblock">
                  <div className="layout layout--onecol">
                    <div className="layout__region layout__region--content">
                      <div>
                        <h4>STAY IN TOUCH</h4>
                        <div className="footer-social">
                          <a href="https://www.instagram.com/theapollohospitals/?hl=en" target="_blank">
                            <img
                              src="https://fhlazwebsau01.blob.core.windows.net/drupal-data/2023-03/instagrame.png"
                              alt="instagram"
                            />
                          </a>
                          <a href="https://www.facebook.com/TheApolloHospitals/" target="_blank">
                            <img
                              src="https://fhlazwebsau01.blob.core.windows.net/drupal-data/2023-03/facebook.png"
                              alt="facebook"
                            />
                          </a>
                          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FApollo_Pharmacy" target="_blank">
                            <img
                              src="https://fhlazwebsau01.blob.core.windows.net/drupal-data/2023-03/twitter.png"
                              alt="twitter"
                            />
                          </a>
                          <a href="https://www.youtube.com/channel/UC0InVdvqNyNzKBl1-TL348A" target="_blank">
                            <img
                              src="https://fhlazwebsau01.blob.core.windows.net/drupal-data/2023-03/youtube.png"
                              alt="youtube"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FOOTER CENTRE END */}

            {/* FOOTER RIGHT START */}
            <div className="footer-link-outer">
              <div>
                <nav
                  role="navigation"
                  aria-labelledby="block-footer-menu"
                  id="block-footer"
                  className="footer-link"
                >
                  <h2 className="visually-hidden" id="block-footer-menu">
                    Footer
                  </h2>
                  <ul className="menu">
                    <li className="menu-item">
                      <a href="/contact-us" data-drupal-link-system-path="node/6388">
                        Contact Us
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/contact" data-drupal-link-system-path="contact">
                        Contact
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/gifting-policy" data-drupal-link-system-path="node/1093">
                        Gifting Policy
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/online-payment-refund-policy" data-drupal-link-system-path="node/1094">
                        Online payment &amp; refund policy
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/privacy-policy" data-drupal-link-system-path="node/1065">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/tele-consult" data-drupal-link-system-path="node/1096">
                        Tele-consult
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/terms-and-conditions" data-drupal-link-system-path="node/1095">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </nav>
                <div id="block-footerbottomcopyrightblock">
                  <div className="layout layout--onecol">
                    <div className="layout__region layout__region--content">
                      <div>
                        <p>© 2022 Fortis Healthcare. All Rights Reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FOOTER RIGHT END */}
          </div>
        </div>
      </div>
      </div>
        </div>
      
    );
  }
}
