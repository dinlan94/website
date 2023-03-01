import React from 'react';

import IconText from './IconText';
import Button from 'elements/Button';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 370 }}>
                        <IconText />
                        <p className="brand-tagline">
                            we kaboom your beauty holiday instantly and memorable
                        </p>
                    </div>
                    <div className="col-auto mr-4">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type='link' href='/register'>
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href='/properties'>
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href='/use-payment'>
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto mr-4">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type='link' href='/careers'>
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href='/privacy'>
                                    Privacy Policy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href='/terms'>
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type='link' href='mailto:Support@staycation.id'>
                                    Support@staycation.id
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type='link' href='tel:+622746599635'>
                                    0274 - 6599 - 635
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>Staycation Oy, Yogyakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2019 • All rights reserved • Staycation
                    </div>
                </div>
            </div>
        </footer>
    );
}
