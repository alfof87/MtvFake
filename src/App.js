import React from 'react';
import Post from './Post.js';
import './App.css';

function App() {
  return (
<div>

  <div className="flex">
    <div>
      <img src="/images/eric-clapton.jpg"></img>
      <Post author="Eric Clapton" title="One more car, one more rider" year="2002" />
    </div>
    <div>
      <img src="/images/iron-maiden.jpg"></img>
      <Post author="Iron-Maiden" title="Brave new World" year="2000" />
    </div>
    <div>
      <img src="/images/mj.jpg"></img>
      <Post author="Michael Jackson" title="Bad" year="1987" />
    </div>
    <div>
      <img src="/images/queen.jpg"></img>
      <Post author="Queen" title="Live at Wembley 86" year="1992" />
    </div>
  </div>

  <div className="flex">
    <div>
      <img src="/images/bonjovi.jpg"></img>
      <Post author="Bon Jovi" title="New Jersey" year="1988" />
    </div>
    <div>
      <img src="/images/sting.jpg"></img>
      <Post author="Sting" title="Ten's Summoner's Tales" year="1993" />
    </div>
    <div>
      <img src="/images/steve.jpg"></img>
      <Post author="Steve Gadd Band" title="Steve Gadd Band" year="2018" />
    </div>
    <div>
      <img src="/images/deep.jpg"></img>
      <Post author="Deep Purple" title="Made in Japan" year="1972" />
    </div>
  </div>

  <div className="flex">
    <div>
      <img src="/images/dave.jpg"></img>
      <Post author="Dave Weckl" title="Hard Wired" year="1994" />
    </div>
    <div>
      <img src="/images/madonna.png"></img>
      <Post author="Madonna" title="Music" year="2000" />
    </div>
    <div>
      <img src="/images/bob.jpg"></img>
      <Post author="Bob Marley" title="Rebel Music" year="1986" />
    </div>
    <div>
      <img src="/images/eminem.jpg"></img>
      <Post author="Eminem" title="The Slim Shady LP" year="1999" />
    </div>
  </div>
</div>



  )
}

export default App;
