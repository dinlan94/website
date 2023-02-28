import React from "react";
import Fade from "react-reveal/Fade";

export default function Controller(props) {
    return (
        <Fade>
            <section className="container mx-auto sm:px-4">
                <div className="flex flex-wrap  justify-center">
                    <div className="w-1/4">{props.children}</div>
                </div>
            </section>
        </Fade>
    );
}
