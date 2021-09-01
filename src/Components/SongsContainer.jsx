import React from "react";

function getSongs(songsData) {
    const songs = [];
    for (let i = 0; i < songsData.length; i++) {
        const song = songsData[i];
        songs.push(
            <div className="song" key={song.name}>
                <div className="song-artwork">
                    <img
                        src={song.artwork}
                        alt=""
                        className="song-artwork-img"
                    />
                </div>
                <div className="song-info">
                    <h3 className="song-name">{song.name}</h3>
                    <p>
                        <strong>Artist</strong> {song.artist}
                    </p>
                    <p>
                        <strong>Mix Engineer</strong> {song["mix-engineer"]}
                    </p>
                    <p>
                        <strong>Record Label</strong> {song["record-label"]}
                    </p>
                    <div className="platform-buttons">{getPlatforms(song)}</div>
                </div>
            </div>
        );
    }
    return songs;
}

function getPlatforms(song) {
    const platforms = [];
    for (let i = 0; i < song.platforms.length; i++) {
        const platform = song.platforms[i];
        platforms.push(
            <a
                key={song.name + platform.name}
                href={platform.link}
                target="_blank"
                rel="noreferrer"
                className="platform-btn"
            >
                <i className={platform.class}></i> {platform.name}
            </a>
        );
    }
    return platforms;
}

export default function SongsContainer({ songsData }) {
    return (
        <section className="songs">
            <h1>Songs</h1>
            <div className="songs-container" id="song-container">
                {getSongs(songsData)}
            </div>
        </section>
    );
}
