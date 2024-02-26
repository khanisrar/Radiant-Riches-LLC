import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [toggleNavIcon, setToggleNavIcon] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setToggleNavIcon(!toggleNavIcon);
    }

    return (
        <>
            <nav className="navbar">
                <div className="search-container">
                    <input type="search" />
                    <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                </div>
                <div className="navlinks">
                    <a href="#">Categories</a>
                    <a href="#">Website Builders</a>
                    <a href="#">Todays Deals</a>
                </div>
                {nav && <div className="navlinks2">
                    <a href="#">Categories</a>
                    <a href="#">Website Builders</a>
                    <a href="#">Todays Deals</a>
                </div>}
                <FontAwesomeIcon className="bars" onClick={handleNav} icon={toggleNavIcon ? faTimes : faBars} />
            </nav>
        </>
    )
}

export default Navbar;