import React from 'react';
import "../style/nav.css";
const Nav = () => {
    return (
        <div className='my-navbar'>
            <nav className="navbar-container navbar navbar-expand-lg navbar-dark">
                <div className="left-nav">
                    <div className="logo">
                        <i class="fa-solid fa-h"></i>
                        <i class="fa-solid fa-i ml-1"></i>
                    </div>
                    <p>Hasanli Ilaha</p>
                </div>
                
                <div className="right-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            FlashCard
                        </li>
                        <li className="nav-item ml-5">
                            Home
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Nav