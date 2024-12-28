import React from "react"
import homebg from '../images/homebg.jpg'

const Aboutus = () => {
    return (
        <div>
            {/* <Nav /> */}
            <div>
                <div className="container-fluid mt-5 ">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="rounded float-start" src={homebg} alt='homebg of aboutus' style={{ width: "80%" }} />
                        </div>
                        <div className="col-lg-6 mt-3">
                            <h4>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                                a Latin professor at Hampden-Sydney College in Virginia,looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
                                in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" by Cicero,written in 45 BC. This book
                                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h4>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row mt-3" style={{justifyContent:"center"}}>
                        <div className="col mt-3">
                            <div className="card" style={{width:"18rem",height:"20rem"}}>
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                                </div>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="card" style={{width:"18rem",height:"20rem"}}>
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="card" style={{width:"18rem",height:"20rem"}}>
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="card" style={{width:"18rem",height:"20rem"}}>
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
export default Aboutus