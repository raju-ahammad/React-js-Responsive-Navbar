import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <div className="navabr">
            <div className="navbar__container container">
                <Link className="navbar__logo">
                    RAJU
                </Link>
                <div className="menu__icon">

                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
