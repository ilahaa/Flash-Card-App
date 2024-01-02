import React from 'react';
import "../style/nav.css";
import { Outlet, Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const Nav = () => {
    // const scrollToTop = () => {
    //     scroll.scrollToTop();
    // };
    return (
        <div className='my-navbar'>
            <nav className="navbar-container navbar navbar-expand-lg navbar-dark">
                <div className="left-nav ml-5">
                    <div className="logo">
                        <i class="fa-solid fa-h"></i>
                        <i class="fa-solid fa-i ml-1"></i>
                    </div>
                    <p>Hasanli Ilaha</p>
                </div>

                <div className="right-nav mr-5">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <ScrollLink
                                to="home-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="nav-item ml-5">
                            <ScrollLink
                                to="flashcard-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Favorite Books
                            </ScrollLink>
                        </li>
                        <li className="nav-item ml-5">
                            <ScrollLink
                                to="contactme-section"
                                spy={true}
                                smooth={true}
                                offset={-70} // Adjust the offset as needed
                                duration={500}
                            >
                                Contact Me
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Nav