import React from 'react';
import './Footer.css';

const Footer = () => {
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
    return (
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
            <div className="socials-bar">
                <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </section>
            </div>
            <section>
                <div className="text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Good Universe</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p className="footer-justified-text">
                                Founded in 2015, Good Universe works at the intersection of Gender, Health and Climate Change. Our focal areas such as Gender and Climate Change are tangentially broached areas in the development and social sectors.
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p><a href="/" className="text-white">Home</a></p>
                            <p><a href="/" className="text-white">Dashboard</a></p>
                            <p><a href="/" className="text-white">Products</a></p>
                            <p><a href="/" className="text-white">Contact Us</a></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p><i className="fas fa-home mr-3"></i> Kondapur Main Road, SBI Officers Quarters, Gachibowli, Hyderabad, Telangana 500046, India</p>
                            <p><i className="fas fa-envelope mr-3"></i> @gooduniverse.org</p>
                            <p><i className="fas fa-phone mr-3"></i> +91 - 79951 80851</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright:
                <a className="text-white" href="/">gooduniverse.org</a>
            </div>
        </footer>
    );
};

export default Footer;