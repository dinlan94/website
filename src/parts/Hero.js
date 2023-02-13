import React from 'react';
import Fade from 'react-reveal';

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import Button from 'elements/Button';
import formatNumber from "utils/formatNumber";

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth",
        });
    }

    return (
        <Fade bottom>
            <section className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 560 }}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work, <br />
                            Start Next Vacation
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 w-80" line>
                            we provide what you need to enjoy your holiday <br />
                            with your family. Time to make another moments. <br />
                            Your money can return but your time is not.
                        </p>

                        {<Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show Me Now
                        </Button>}

                        <div className="row" style={{ marginTop: 80 }}>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img
                                    width="36"
                                    height="36"
                                    src="images/Icons/Icon_Traveler.svg" 
                                    alt={`${props.data.travelers} Travelers`} />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.travelers)}{" "}
                                    <span className="text-gray-500 font-weight-light">Travelers</span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img
                                    width="36"
                                    height="36"
                                    src="images/Icons/Icon_Treasury.svg"  
                                    alt={`${props.data.treasury} Treasury`} />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.treasury)}{" "}
                                    <span className="text-gray-500 font-weight-light">Treasury</span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img
                                    width="36"
                                    height="36"
                                    src="images/Icons/Icon_Cities.svg" 
                                    alt={`${props.data.cities} Cities`} />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.cities)}{" "}
                                    <span className="text-gray-500 font-weight-light">Cities</span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 pl-5">
                        <div style={{ width: 530, height: 400 }}>
                            <img
                                src={ImageHero}
                                alt="House in mountain"
                                className="img-fluid position-absolute"
                                style={{ margin: '-30px 0 0 -30px ', zIndex: 1 }}
                            />
                            <img
                                src={ImageHero_}
                                alt="House in mountain frame"
                                className="img-fluid position-absolute"
                                style={{ margin: '0 -15px -15px 0 ' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
}
