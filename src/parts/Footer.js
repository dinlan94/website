import React from 'react';

import IconText from './IconText';
import Button from 'elements/Button';

export default function Footer() {
    return (
        <footer>
            <div className="container mx-auto sm:px-4">
                <div className="flex flex-wrap ">
                    <div className="col-auto" style={{ width: 370 }}>
                        <IconText />
                        <p className="brand-tagline">
                            we kaboom your beauty holiday instantly and memorable
                        </p>
                    </div>
                    <div className="col-auto mr-4">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="flex flex-col pl-0 mb-0 border rounded border-gray-300 ">
                            <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline">
                                <Button type='link' href='/register'>
                                    New Account
                                </Button>
                            </li>
                            <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline">
                                <Button type='link' href='/properties'>
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline">
                                <Button type='link' href='/use-payment'>
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto mr-4">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="flex flex-col pl-0 mb-0 border rounded border-gray-300 ">
                            <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline">
                                <Button type='link' href='/careers'>
                                    Our Careers
                                </Button>
                            </li>
                            <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline">
                                <Button type='link' href='/privacy'>
                                    Privacy Policy
                                </Button>
                            </li>
                            <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline">
                                <Button type='link' href='/terms'>
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/4">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="flex flex-col pl-0 mb-0 border rounded border-gray-300 ">
                            <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline">
                                <Button isExternal type='link' href='mailto:Support@staycation.id'>
                                    Support@staycation.id
                                </Button>
                            </li>
                            <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline">
                                <Button isExternal type='link' href='tel:+622746599635'>
                                    0274 - 6599 - 635
                                </Button>
                            </li>
                            <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline">
                                <span>Staycation Oy, Yogyakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap ">
                    <div className="relative flex-grow max-w-full flex-1 px-4 text-center copyrights">
                        Copyright 2019 • All rights reserved • Staycation
                    </div>
                </div>
            </div>
        </footer>
    );
}
