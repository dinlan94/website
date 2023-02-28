import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
    return (
        <section className="container mx-auto sm:px-4 spacing-sm">
            <Fade bottom>
                <div className="flex flex-wrap  items-center">
                    <div className="relative flex-grow max-w-full flex-1 px-4">
                        <Breadcrumb data={breadcrumb} />
                    </div>
                    <div className="col-auto text-center">
                        <h1 className="h2">{data.title}</h1>
                        <span className="text-gray-400">
                            {data.city}, {data.country}
                        </span>
                    </div>
                    <div className="relative flex-grow max-w-full flex-1 px-4"></div>
                </div>
            </Fade>
        </section>
    );
}
