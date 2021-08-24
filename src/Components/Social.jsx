import React from "react";

export default function Social({ siteData }) {
    return (
        <section className="social">
            <ul>
                <li>
                    <i className={siteData["instagram-logo"]}></i>{" "}
                    <a href={siteData["instagram-link"]}>Instagram</a>
                </li>
                <li>
                    <i className={siteData["yt-logo"]}></i>{" "}
                    <a href={siteData["yt-link"]}>YouTube</a>
                </li>
            </ul>
        </section>
    );
}
