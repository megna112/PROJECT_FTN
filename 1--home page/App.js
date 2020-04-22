import React from "react";

import "./mystyle.css";

import logoh from "./images/logoh.png";
import logof from "./images/logof.png";
import r1 from "./images/1.png";
import r2 from "./images/2.png";
import r3 from "./images/3.png";
import news1 from "./images/news_1.jpg";
import news2 from "./images/news_2.jpg";

class App extends React.Component {
  render() {
    return (
      <div>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <title>Feed The Need</title>
            <meta name="description" content="" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="stylesheet" href="mystyle.css" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
          </head>

          <body>
            <header>
              <div class="header-area">
                <div class="header-top_area">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xl-6 col-md-12 col-lg-8"></div>

                      <div class="col-xl-6 col-md-6 col-lg-4">
                        <div class="short_contact_list">
                          <ul>
                            <li>
                              <a href="#">
                                <i class="fa fa-sign-in" aria-hidden="true"></i>
                                Login/Register &nbsp;
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-language"
                                  aria-hidden="true"
                                ></i>
                                Lang
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="sticky-header" class="main-header-area">
                  <div class="container-fluid">
                    <div class="row align-items-center">
                      <div class="col-xl-3 col-lg-3">
                        <div class="logo">
                          <a href="index.html">
                            <img src={logoh} alt="" class="imglogo" />
                          </a>
                        </div>
                      </div>

                      <div class="col-xl-9 col-lg-9">
                        <div class="main-menu">
                          <nav>
                            <ul id="navigation">
                              <li>
                                <a href="index.html">Home</a>
                              </li>

                              <li>
                                <a href="#">
                                  About
                                  <i
                                    class="fa fa-caret-down"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <ul class="submenu">
                                  <li>
                                    <a href="#">Who We Are</a>
                                  </li>
                                  <li>
                                    <a href="#">FAQ</a>
                                  </li>
                                  <li>
                                    <a href="#">Awards</a>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <a href="#">Gallery</a>
                              </li>
                              <li>
                                <a href="#">Hunger Spots</a>
                              </li>
                              <li>
                                <a href="#">Volunteer</a>
                              </li>
                              <li>
                                <a href="#">Donate</a>
                              </li>

                              <li>
                                <a href="#">
                                  Contact Us <i class="fa fa-caret-down"></i>
                                </a>
                                <ul class="submenu">
                                  <li>
                                    <a href="#">Contact Details</a>
                                  </li>

                                  <li>
                                    <a href="#">Get in touch</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div class="slider_area">
              <div class="single_slider  d-flex align-items-center slider_bg_1 overlay2">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-9">
                      <div class="slider_text ">
                        <span>Get Started Today.</span>
                        <h3>Giving is Virtue.</h3>
                        <p>
                          You pray for the hungry. Then you feed them. This is
                          how prayer works.
                        </p>
                        <a href="#" class="boxed-btn3">
                          Learn More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="reson_area section_padding">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-6">
                    <div class="section_title text-center mb-55">
                      <h3>
                        <span>Reason for Helping</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-lg-4 col-md-6">
                    <div class="single_reson">
                      <div class="thum">
                        <div class="thum_1">
                          <img src={r1} alt="" />
                        </div>
                      </div>
                      <div class="help_content">
                        <h4>Become a Volunteer</h4>
                        <p>
                          Be a Hunger Hero join our Volunteer network.
                          <br />
                          <br />
                        </p>
                        <a href="#" class="read_more">
                          Join now!
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="single_reson">
                      <div class="thum">
                        <div class="thum_1">
                          <img src={r2} alt="" />
                        </div>
                      </div>
                      <div class="help_content">
                        <h4>Happy Giving</h4>
                        <p>
                          Food becomes excess and remains unused. Instead of
                          wasting it, donate it to the needy!.
                        </p>
                        <a href="#" class="read_more">
                          Register & Donate Food
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="single_reson">
                      <div class="thum">
                        <div class="thum_1">
                          <img src={r3} alt="" />
                        </div>
                      </div>
                      <div class="help_content">
                        <h4>Donation</h4>
                        <p>
                          Every rupee counts! You can make a difference. Come
                          forward, now...
                        </p>
                        <a href="#" class="read_more">
                          Donate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="latest_activites_area">
              <div class=" gal_bg_1 gal_activite  d-flex align-items-center justify-content-center"></div>

              <div class="container">
                <div class="row justify-content-end">
                  <div class="col-lg-7">
                    <div class="activites_info">
                      <div class="section_title">
                        <h3>
                          <span>See our Photo Gallery </span>
                          <br />
                        </h3>
                      </div>
                      <p class="para_1">
                        There is no exercise better for the heart than reaching
                        down and lifting people up.
                      </p>

                      <a href="#" data-scroll-nav="1" class="boxed-btn4">
                        View Gallery
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer class="footer">
              <div class="footer_top">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-4 col-md-6 col-lg-4 ">
                      <div class="footer_widget">
                        <div class="footer_logo">
                          <a href="index.html">
                            <img src={logof} alt="" class="imglogo" />
                          </a>
                        </div>

                        <p class="address_text">
                          The human contribution is the essential <br />
                          ingredient.It is only in the giving of oneself <br />
                          to others that we truly live.
                        </p>
                        <div class="socail_links">
                          <ul>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/explore">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com">
                                <i class="fa fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-2 col-md-6 col-lg-2">
                      <div class="footer_widget">
                        <h3 class="footer_title">Services</h3>
                        <ul class="links">
                          <li>
                            <a href="#">Donate Food</a>
                          </li>
                          <li>
                            <a href="#">Fundraise</a>
                          </li>
                          <li>
                            <a href="#">Volunteer</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-xl-3 col-md-6 col-lg-3">
                      <div class="footer_widget">
                        <h3 class="footer_title">Contacts</h3>
                        <div class="contacts">
                          <p>
                            +91 91234567
                            <br />
                            info@feedtheneed.org <br />
                            FTN building, Nitte <br />
                            Karkala-574104 <br />
                            Karnataka,India
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-md-6 col-lg-3">
                      <div class="footer_widget">
                        <h3 class="footer_title">Top News</h3>
                        <ul class="news_links">
                          <li>
                            <div class="thumb">
                              <a href="https://www.aljazeera.com/news/2020/03/kill-coronavirus-rohingya-india-200331035538875.html">
                                <img src={news1} alt="" />
                              </a>
                            </div>
                            <div class="info">
                              <a href="#">
                                <h4>Hunger will kill us before coronavirus</h4>
                              </a>
                              <span>March 31, 2020</span>
                            </div>
                          </li>

                          <li>
                            <div class="thumb">
                              <a href="#">
                                <img src={news2} alt="" />
                              </a>
                            </div>
                            <div class="info">
                              <a href="https://thewire.in/rights/bihar-starvation-deaths-lockdown">
                                <h4>
                                  COVID-19 Lockdown: 8 Year Old Dies of Hunger
                                </h4>
                              </a>
                              <span>March 30, 2020</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </body>
        </html>
      </div>
    );
  }
}
export default App;
