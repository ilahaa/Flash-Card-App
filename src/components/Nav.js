import React from 'react';
import "../style/nav.css";
import { Outlet, Link } from "react-router-dom";
const Nav = () => {
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
                        <Link to="/flashcard">
                            <li className="nav-item">
                                FlashCard
                            </li>
                        </Link>
                        <Link to="/home">
                            <li className="nav-item ml-5">
                                Home
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Nav