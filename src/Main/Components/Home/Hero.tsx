import React from 'react'
import '../../../Extras/animatedText.css'
import '../../../Extras/contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Hero = () => {
    return (
        <div>
            <div className="container-fluid p-0 pb- wow fadeIn" data-wow-delay="0.1s">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                        <img className="img-fluid" src="./img/about.jpg" alt="" />
                        <div className="owl-carousel-inner">
                            <div className="container">
                                <div className="justify-content-start">
                                    <div className="col-12 col-lg-5">
                                        <div className='check'>
                                            <h1 className="animatedText slideInDown">Printing and<br /> publication house</h1>
                                        </div>
                                        <h1 className="fs-2 fw-large text-white mb-1 pb-4">We'll sell your books for you.</h1>
                                        <p className='text-white hero-p col-9'>Worried how to sell your book?<br /> With our team of experts, publish your paperback and ebook and sell globally in 140+ countries, earning 100% of the profit. Start your publishing journey with #1 book publishing in India.</p>
                                        <br />
                                        <br />
                                        <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-2.jpg'>">
                <img className="img-fluid" src="img/carousel-2.jpg" alt="">
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h1 className="display-1 text-white animated slideInDown">Best Architecture And Interior Design Services</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-3.jpg'>">
                <img className="img-fluid" src="img/carousel-3.jpg" alt="">
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h1 className="display-1 text-white animated slideInDown">Best Architecture And Interior Design Services</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> --> */}
                </div>
            </div>
        </div>
    )
}

export default Hero