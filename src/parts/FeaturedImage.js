import React from "react";
import Fade from "react-reveal/Fade";

export default function FeaturedImage({ data }) {
    return (
        <section className="container mx-auto sm:px-4">
            <div className="container-grid sm">
                {data.map((item, index) => {
                    return (
                        <div
                            key={`FeaturedImage-${index}`}
                            className={`item ${index > 0 ? "column-5" : "column-7"} ${index > 0 ? "row-1" : "row-2"
                                }`}
                        >
                            <Fade bottom delay={300 * index}>
                                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 h-full">
                                    <figure className="img-wrapper">
                                        <img
                                            className="img-cover"
                                            src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                                            alt={item._id}
                                        />
                                    </figure>
                                </div>
                            </Fade>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
