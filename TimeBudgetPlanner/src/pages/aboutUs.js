import React from 'react'
import { Helmet } from 'react-helmet'

import "../aboutUs/css/style.css"
import "../aboutUs/css/bootstrap.min.css"
import "../aboutUs/css/jquery-ui.css"
import "../aboutUs/css/owl.theme.default.min.css"
import "../aboutUs/css/jquery.fancybox.min.css"
import "../aboutUs/css/bootstrap-datepicker.css"
import "../aboutUs/css/aos.css"

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About TimeBudgetPlanner </title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700" rel="stylesheet" />
                <link rel="stylesheet" href="../aboutUs/css/style.css" />
                <link rel="stylesheet" href="../aboutUs/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="../aboutUs/css/jquery-ui.css"/>
                <link rel="stylesheet" href="../aboutUs/css/owl.theme.default.min.css"/>
                <link rel="stylesheet" href="../aboutUs/css/jquery.fancybox.min.css"/>
                <link rel="stylesheet" href="../aboutUs/css/bootstrap-datepicker.css"/>
                <link rel="stylesheet" href="../aboutUs/css/aos.css"/>
            </Helmet>
            <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
            <div class="site-wrap" id="home-section">
                <header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                    <div class="container">
                        <div class="row align-items-center">
                        <div class="col-6 col-md-3 col-xl-4  d-block">
                            <h1 class="mb-0 site-logo"><a href="index.html" class="text-black h2 mb-0">imagine<span class="text-primary">.</span> </a></h1>
                        </div>
                        <div class="col-12 col-md-9 col-xl-8 main-menu">
                            <nav class="site-navigation position-relative text-right" role="navigation">
                            <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                                <li><a href="#home-section" class="nav-link">Home</a></li>
                                <li><a href="#features-section" class="nav-link">Features</a></li>
                                <li><a href="#contact-section" class="nav-link">Contact</a></li>
                            </ul>
                            </nav>
                        </div>
                        <div class="col-6 col-md-9 d-inline-block d-lg-none ml-md-0" ><a href="#" class="site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a></div>
                        </div>
                    </div>
                </header>
                <div class="site-blocks-cover" style={{overflow: "hidden"}}>
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                        <div class="col-md-12" style={{position: "relative"}} data-aos="fade-up" data-aos-delay="200">
                            <img src="images/undraw_investing_7u74.svg" alt="Image" class="img-fluid img-absolute" />
                            <div class="row mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div class="col-lg-6 mr-auto">
                                <h1>Make Your Business More Profitable</h1>
                                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                                <div>
                                <a href="#" class="btn btn-primary mr-2 mb-2">Get Started</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="site-section" id="features-section">
                <div class="container">
                    <div class="row mb-5 justify-content-center text-center"  data-aos="fade-up">
                    <div class="col-7 text-center  mb-5">
                        <h2 class="section-title">Imagine Features</h2>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
                    </div>
                    </div>
                    <div class="row align-items-stretch">
                    <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                        <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap"><span class="text-primary icon-autorenew"></span></span>
                        </div>
                        <div>
                            <h3>Marketing Consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <p><a href="#">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap"><span class="text-primary icon-store_mall_directory"></span></span>
                        </div>
                        <div>
                            <h3>Market Analysis</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <p><a href="#">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up"  data-aos-delay="200">
                        <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap"><span class="text-primary icon-shopping_basket"></span></span>
                        </div>
                        <div>
                            <h3>Easy Purchase</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <p><a href="#">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                        <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap"><span class="text-primary icon-settings_backup_restore"></span></span>
                        </div>
                        <div>
                            <h3>Free Updates</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <p><a href="#">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap"><span class="text-primary icon-sentiment_satisfied"></span></span>
                        </div>
                        <div>
                            <h3>100% Satistified</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <p><a href="#">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap"><span class="text-primary icon-power"></span></span>
                        </div>
                        <div>
                            <h3>Easy Plugin</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <p><a href="#">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="feature-big" />
                <div class="site-section bg-light" id="about-section">
                <div class="container">
                    <div class="row mb-5">
                    <div class="col-12 text-center">
                        <h2 class="section-title mb-3">About Us</h2>
                    </div>
                    </div>
                    <div class="row mb-5">
                    <div class="col-lg-6" data-aos="fade-right">
                        <img src="images/undraw_bookmarks_r6up.svg" alt="Image" class="img-fluid" />
                    </div>
                    <div class="col-lg-5 ml-auto pl-lg-5">
                        <h2 class="text-black mb-4 h3 font-weight-bold">Our Mission</h2>
                        <p class="mb-4">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                        <ul class="ul-check mb-5 list-unstyled success">
                        <li>Laborum enim quasi at modi</li>
                        <li>Ad at tempore</li>
                        <li>Labore quaerat esse</li>
                        </ul>
                        <p><a href="#" class="btn btn-primary">Learn More</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="site-section" id="our-team-section">
                <div class="container">
                    <div class="row mb-5 justify-content-center text-center"  data-aos="fade-up">
                    <div class="col-7 text-center  mb-5">
                        <h2 class="section-title">Our Team</h2>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="person">
                        <div class="bio-img">
                            <figure>
                            <img src="images/person_1.jpg" alt="Image" class="img-fluid" />
                            </figure>
                            <div class="social">
                            <a href="#"><span class="icon-facebook"></span></a>
                            <a href="#"><span class="icon-twitter"></span></a>
                            <a href="#"><span class="icon-instagram"></span></a>
                            </div>
                        </div>
                        <h2 class="text-black h1">Cloe Marena</h2>
                        <span class="sub-title d-block mb-3">President</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="person">
                        <div class="bio-img">
                            <figure>
                                <img src="images/person_2.jpg" alt="Image" class="img-fluid" />
                            </figure>
                            <div class="social">
                            <a href="#"><span class="icon-facebook"></span></a>
                            <a href="#"><span class="icon-twitter"></span></a>
                            <a href="#"><span class="icon-instagram"></span></a>
                            </div>
                        </div>
                        <h2 class="text-black h1">John Rooster</h2>
                        <span class="sub-title d-block mb-3">Marketing</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                
                <div class="site-section bg-image2 overlay" id="contact-section" style={{backgroundImage: "url(\"images/hero_1.jpg\")"}}>
                <div class="container">
                    <div class="row mb-5">
                    <div class="col-12 text-center">
                        <h2 class="section-title mb-3 text-white">Contact Us</h2>
                    </div>
                    </div>
                </div>
                </div>
                <div class="footer py-5 text-center">
                <div class="container">
                    <div class="row mb-5">
                    <div class="col-12">
                        <p class="mb-0">
                        <a href="#" class="p-3"><span class="icon-facebook"></span></a>
                        <a href="#" class="p-3"><span class="icon-twitter"></span></a>
                        <a href="#" class="p-3"><span class="icon-instagram"></span></a>
                        <a href="#" class="p-3"><span class="icon-linkedin"></span></a>
                        <a href="#" class="p-3"><span class="icon-pinterest"></span></a>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/jquery-ui.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/jquery.countdown.min.js"></script>
            <script src="js/bootstrap-datepicker.min.js"></script>
            <script src="js/jquery.easing.1.3.js"></script>
            <script src="js/aos.js"></script>
            <script src="js/jquery.fancybox.min.js"></script>
            <script src="js/jquery.sticky.js"></script>
            <script src="js/main.js"></script>
            </body>
        </>
    )
}

export default AboutUs