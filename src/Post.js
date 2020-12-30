import React from 'react';


function Post(props){
  // // var stampa = console.log('stampa');
  // var stampa = () => {console.log('stampa')};
  // return (
  //   <button onClick={stampa}>{props.description}</button>
return (
  <div className="Post">
    <h4>{props.author}</h4>
    <h5>{props.title}</h5>
    <h5>{props.year}</h5>
  </div>
)
}

export default Post;
