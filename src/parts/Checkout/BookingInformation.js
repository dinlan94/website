import React from 'react';
import Fade from 'react-reveal';

import { InputText } from 'elements/Form';

export default function BookingInformation(props) {

    const { data, ItemDetails, checkout } = props;

    return (
        <Fade>
            <div className="container mx-auto sm:px-4" style={{ marginBottom: 30 }}>
                <div className="flex flex-wrap  justify-contetn-center items-center">
                    <div className="w-2/5 border-right-py-5" style={{ paddingRight: 80 }}>
                        <Fade delay={300}>
                            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                                <figure className="image-wrapper" style={{ height: 270 }}>
                                    <img
                                        className='img-cover'
                                        src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                                        alt={ItemDetails.name}
                                    />
                                </figure>
                                <div className="flex flex-wrap  items-center">
                                    <div className="relative flex-grow max-w-full flex-1 px-4">
                                        <div className="meta-wrapper">
                                            <h5>{ItemDetails.title}</h5>
                                            <span className="text-gray-500">
                                                {ItemDetails.city}, {ItemDetails.country}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <span>
                                            ${+checkout.duration * ItemDetails.price} USD
                                            <span className="text-gray-500"> per </span>
                                            {checkout.duration} {ItemDetails.unit}
                                            {+checkout.duration > 1 ? "s" : ""}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="w-2/5 py-5" style={{ paddingLeft: 80 }}>
                        <Fade delay={600}>
                            <label htmlFor='firstName'>First Name</label>
                            <InputText
                                id="firstName"
                                name="firstName"
                                value={data.firstName}
                                onChange={props.onChange}
                            />

                            <label htmlFor='lastName'>Last Name</label>
                            <InputText
                                id="lastName"
                                name="lastName"
                                value={data.lastName}
                                onChange={props.onChange}
                            />

                            <label htmlFor='email'>Email Address</label>
                            <InputText
                                id="email"
                                name="email"
                                type='email'
                                value={data.email}
                                onChange={props.onChange}
                            />

                            <label htmlFor='phone'>Phone Number</label>
                            <InputText
                                id="phone"
                                name="phone"
                                type='tel'
                                value={data.phone}
                                onChange={props.onChange}
                            />

                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
