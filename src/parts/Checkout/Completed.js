import React from 'react';
import Fade from 'react-reveal';
import CompletedIlustrator from "assets/images/completed.jpg"

export default function Completed() {
    return (
        <Fade>
            <div className="container mx-auto sm:px-4" style={{ marginBottom: 30 }}>
                <div className="flex flex-wrap  justify-center text-center">
                    <div className="w-1/3">
                        <img
                            src={CompletedIlustrator}
                            className="max-w-full h-auto"
                            alt="completed checkout apartment"
                        />
                        <p className="text-gray-500">
                            We will inform you via email later once the transaction has ben accepted
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
