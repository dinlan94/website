import React from 'react';
import Fade from 'react-reveal';

import TestimonyAccent from 'assets/images/testimonial/testi1frame.jpg';

import Star from 'elements/Star';
import Button from 'elements/Button';

export default function Testimony({ data }) {
    return (
        <Fade bottom>
            <section className="container mx-auto sm:px-4">
                <div className="flex flex-wrap  items-center">
                    <div className="col-auto" style={{ marginRight: 50 }}>
                        <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
                            <img
                                src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}
                                alt="Testimonial"
                                className="absolute"
                                style={{ zIndex: 1 }} />

                            <img
                                src={TestimonyAccent}
                                alt="Testimonial frame"
                                className="absolute"
                                style={{ margin: `30px 0 0 -30px` }} />
                        </div>
                    </div>
                    <div className="relative flex-grow max-w-full flex-1 px-4">
                        <h4 style={{ marginBottom: 40 }}>
                            {data.name}
                        </h4>
                        <Star value={data.rate} width={30} height={30} spacing={4}></Star>
                        <h5 className="h2 font-weight-light line-height-2 my-3">
                            {data.content}
                        </h5>

                        <span className="text-gray-500">
                            {data.familyName}, {data.familyOccupation}
                        </span>

                        <div>
                            <Button
                                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline px-5"
                                style={{ marginTop: 40 }}
                                hasShadow isPrimary type='link'
                                href={`/testimonial/${data._id}`}>
                                Read Their Story
                            </Button>
                        </div>

                    </div>
                </div>
            </section>
        </Fade>
    );
}
