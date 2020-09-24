import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from 'react-icons/md';
import { Link } from "react-router-dom";


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
        <div className="navabr">
            <div className="navbar__container container">
                <Link className="navbar__logo">
                    <MdFingerprint className="navbar__icon" />
                    RAJU
                </Link>
                <div className="menu__icon" onClick={handleClick}>
                    {click ? <FaTimes/>: <FaBars/>  }
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
