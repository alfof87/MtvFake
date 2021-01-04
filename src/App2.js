import React from 'react';
import Song from './Song.js';
import './App.css';

function App2() {
  return (
    <div>

      <div className="cassetta">
        <h1>Best Songs - Top 5</h1>
        <div className="flexSongs">
          <img src="/images/cassetta.gif"></img>
          <div>
            <Song number="1" author="Eric Clapton" title="Cocaine" />
            <audio controls type="audio/mp3" src="Cocaine.mp3"></audio>
          </div>
        </div>

        <div className="flexSongs">
          <img src="/images/cassetta.gif"></img>
          <div>
            <Song number="2" author="Queen" title="Don't Stop Me Now" />
            <audio controls type="audio/mp3" src="Queen.mp3"></audio>
          </div>
        </div>

        <div className="flexSongs">
          <img src="/images/cassetta.gif"></img>
          <div>
            <Song number="3" author="Michael Jackson)" title="Bad" />
            <audio controls type="audio/mp3" src="Bad.mp3"></audio>
          </div>
        </div>

        <div className="flexSongs">
          <img src="/images/cassetta.gif"></img>
          <div>
            <Song number="4" author="Eminem" title="My Name Is" />
            <audio controls type="audio/mp3" src="Name.mp3"></audio>
          </div>
        </div>

        <div className="flexSongs">
          <img src="/images/cassetta.gif"></img>
          <div>
            <Song number="5" author="Madonna" title="Don't Tell Me" />
            <audio controls type="audio/mp3" src="Tell.mp3"></audio>
          </div>
        </div>
      </div>
    </div>
      )
    }


export default App2;
