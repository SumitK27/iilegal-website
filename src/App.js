import "./App.css";
import "./style.css";
import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Social from "./Components/Social";
import SongsContainer from "./Components/SongsContainer";

function App() {
    const [siteData, setSiteData] = useState("");
    const [songsData, setSongsData] = useState("");

    useEffect(() => {
        getData();
    }, [songsData]);

    async function getData() {
        const res = await fetch("data.json");
        const json = await res.json();
        setSiteData(json.info);
        setSongsData(json.songs);
    }
    return (
        <div className="App">
            <Navigation logo={siteData.logo} />
            <Social siteData={siteData} />
            <SongsContainer songsData={songsData} />
            <Footer siteName={siteData.siteName} />
        </div>
    );
}

export default App;
