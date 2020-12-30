import React from 'react';


function Song(props){
  // // var stampa = console.log('stampa');
  // var stampa = () => {console.log('stampa')};
  // return (
  //   <button onClick={stampa}>{props.description}</button>
return (
  <div className="Song">
    <h4>{props.author}</h4>
    <h5>{props.title}</h5>
    <h5>{props.year}</h5>
  </div>
)
}

export default Song;
