import React from "react";

export default function Footer({ siteName }) {
    return (
        <footer className="footer">
            <p>
                Copyright {siteName}
                <sup>&copy;</sup> {new Date().getFullYear()}
            </p>
        </footer>
    );
}
