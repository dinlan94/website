import React from 'react';
import Fade from 'react-reveal';

import Button from 'elements/Button';
import BrandIcon from 'parts/IconText';

export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? "active" : "";
    }

    if (props.isCentered)
        return (
            <Fade>
                <header className="spacing-sm">
                    <div className="container mx-auto sm:px-4">
                        <nav className="relative flex flex-wrap items-center content-between py-3 px-4  text-black">
                            <Button className="brand-text-icon mx-auto" href="" type='link'>
                                Stay<span className='text-gray-900'>cation.</span>
                            </Button>
                        </nav>
                    </div>
                </header>
            </Fade>
        );

    return (
        <Fade>
            <header className='spacing-sm'>
                <div className='container mx-auto sm:px-4'>
                    <nav className='relative flex flex-wrap items-center content-between py-3 px-4  text-black'>
                        <BrandIcon />

                        <div className="hidden flex-grow items-center">
                            <ul className="flex flex-wrap list-reset pl-0 mb-0 ml-auto">
                                <li
                                    className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="inline-block py-2 px-4 no-underline" type="link" href="">
                                        Home
                                    </Button>
                                </li>
                                <li
                                    className={`nav-item${getNavLinkClass("/browse-by")}`}>
                                    <Button className="inline-block py-2 px-4 no-underline" type="link" href="/browse-by">
                                        Browse By
                                    </Button>
                                </li>
                                <li
                                    className={`nav-item${getNavLinkClass("/stories")}`}>
                                    <Button className="inline-block py-2 px-4 no-underline" type="link" href="/stories">
                                        Stories
                                    </Button>
                                </li>
                                <li
                                    className={`nav-item${getNavLinkClass("/agents")}`}>
                                    <Button className="inline-block py-2 px-4 no-underline" type="link" href="/agents">
                                        Agents
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </Fade >
    );

}
