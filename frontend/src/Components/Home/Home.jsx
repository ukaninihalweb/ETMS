import React from 'react'
import carousel1 from '../images/caro1.jpg'
import carousel2 from '../images/caro2.jpg'
import carousel3 from '../images/caro3.jpg'
import ab1 from '../images/aboutimg1.jpg'

const Home = ({setScreen}) => {
   
    return (
        <div className="bg-tertiary">
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={carousel1} className="d-block w-100" alt="carousel image1" />
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={carousel2} className="d-block w-100" alt="carousel image2" />
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={carousel3} className="d-block w-100" alt="carousel image3" />
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p> */}
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                                    
                <div className="container-fluid mt-5 bg-primary">
                    <div className="row me-5 ">
                        <div className="col-lg-6 mb-5">
                            <img className="img1 rounded float-start mt-4" alt='aboutus content image' src={ab1} style={{ height: "400px" }} />
                        </div>
                        <div className="col-lg-6 mt-4 text-light">
                            <h4 className="he4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                                a Latin professor at Hampden-Sydney College in Virginia,looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
                                in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" by Cicero,written in 45 BC. This book
                                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h4>
                            <button type="button" id='btn1' className="btn btn-light mb-5"><a style={{ textDecoration: "none" }} href='/Aboutus'>Know More</a></button>
                        </div>
                    </div>
                </div>
    
            </div>
        )
    }
    
    export default Home