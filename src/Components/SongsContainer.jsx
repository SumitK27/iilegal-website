import React from "react";

function getSongs(songsData) {
    // return songsData.map((song) => {
    //     return (
    //         <div className="song">
    //             <div className="song-artwork">
    //                 <img
    //                     src={song.artwork}
    //                     alt=""
    //                     className="song-artwork-img"
    //                 />
    //             </div>
    //             <div className="song-info">
    //                 <h3 className="song-name">{song.name}</h3>
    //                 <p>
    //                     <strong>Artist</strong> {song.artist}
    //                 </p>
    //                 <p>
    //                     <strong>Mix Engineer</strong> {song["mix-engineer"]}
    //                 </p>
    //                 <p>
    //                     <strong>Record Label</strong> {song["record-label"]}
    //                 </p>
    //                 <div className="platform-buttons">
    //                     {song.platforms.map((platform) => {
    //                         return (
    //                             <a
    //                                 href={platform.link}
    //                                 target="_blank"
    //                                 rel="noreferrer"
    //                                 className="platform-btn"
    //                             >
    //                                 <i className={platform.class}></i>{" "}
    //                                 {platform.name}
    //                             </a>
    //                         );
    //                     })}
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // });
}

export default function SongsContainer({ songsData }) {
    getSongs(songsData);
    return (
        <section className="songs">
            <h1>Songs</h1>
            <div className="songs-container" id="song-container"></div>
        </section>
    );
}
