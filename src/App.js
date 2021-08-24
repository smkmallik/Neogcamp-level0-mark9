import React, { useState } from "react";
import "./styles.css";

var mySongPlaylists = {
  Relaxing: [
    {
      Name: "Overthinking",
      Artist: "Suriel Hess",
      Rating: "4/5"
    },
    {
      Name: "Sing Myself to Sleep",
      Artist: "Suriel Hess",
      Rating: "5/5"
    },
    {
      Name: "Don't wanna know",
      Artist: "Suriel Hess",
      Rating: "4/5"
    }
  ],
  Pop: [
    {
      Name: "Memories",
      Artist: "Maroon-5",
      Rating: "4/5"
    },
    {
      Name: "Too Good at Goodbyes",
      Artist: "Sam Smith",
      Rating: "4/5"
    },
    {
      Name: "Watermelon Sugar",
      Artist: "Harry Styles",
      Rating: "5/5"
    },
    {
      Name: "Animals",
      Artist: "Maroon-5",
      Rating: "5/5"
    }
  ],
  Rock: [
    {
      Name: "Numb",
      Artist: "Linkin Park",
      Rating: "5/5"
    },
    {
      Name: "Caste of Glass",
      Artist: "Linkin Park",
      Rating: "5/5"
    },
    {
      Name: "Heavy",
      Artist: "Linkin Park",
      Rating: "4/5"
    }
  ]
};

var songNames = Object.keys(mySongPlaylists);

export default function App() {
  var [songPlaylist, setSongPlayList] = useState(mySongPlaylists.Relaxing);

  function genreClickHandler(playList) {
    var songs = mySongPlaylists[playList];
    setSongPlayList(songs);
  }

  function getPlayList(songs) {
    var name = songs.Name;
    var artist = songs.Artist;
    var rating = songs.Rating;
    var songList = (
      <section>
        <div style={{ padding: "0rem 1rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>{name}</h3>
          <small style={{ fontSize: "0.8rem" }}>{artist}</small>
          <p>{rating}</p>
        </div>
      </section>
    );
    return songList;
  }

  return (
    <div className="App">
      <header>Music Playlist</header>
      <p>Checkout my favorite songs. Select a genre to get started</p>
      <div className="option-button">
        {songNames.map((playList) => {
          return (
            <button
              key={playList}
              className="btn"
              onClick={() => genreClickHandler(playList)}
            >
              {playList}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {songPlaylist.map((songs) => {
          return getPlayList(songs);
        })}
      </ul>

      <footer className="footer">
        <div className="footer-header">let's connect!</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/smkmallik">
              github
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/soumik_72">
              twitter
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://www.linkedin.com/in/smkmallik/">
              linkedin
            </a>
          </li>
        </ul>
        <div className="end-credits">
          Made with <span>❤️</span> Soumik Mallik
        </div>
      </footer>
    </div>
  );
}
