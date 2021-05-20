import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand">Hotel</a>
            <div className="collapse navbar-collapse" id="sample_nav_container">
                <div className="navbar-nav">
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">About</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
