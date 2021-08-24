import React from "react";

export default function Navigation({ logo }) {
    return (
        <header>
            <nav className="nav">
                <img
                    alt="Logo"
                    src={logo}
                    id="navbar-brand"
                    className="navbar-brand"
                />
            </nav>
        </header>
    );
}
