import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import NavbarLinks from './raw-data/NavbarLinks'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)

    const toggleNavView = () => {
        setToggleNav(!toggleNav)
    }

    return (
        <nav className="navbar-menu">
            <a className="navbar-brand">Hotel</a>
            <div className={toggleNav ? "navbar-contents navbar-active" : "navbar-contents"}>
                {NavbarLinks.map((link, index) => {
                    return(
                        <Link key={index} to={link.linkDest} className={link.linkClass}>{link.linkName}</Link>
                    )
                })}
            </div>
            <button className={toggleNav ? "btn btn-close" : "btn btn-open"} onClick={() => toggleNavView()}>{toggleNav ? "Close" : "Show"}</button>
        </nav>
    )
}

export default Navbar
