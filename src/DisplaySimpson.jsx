import React from "react";

function DisplaySimpsons({ simpson }) {
  return (
    <div className="DisplayEmployee">
      <img src={simpson.image} alt={simpson.character}/>
      <h1>{simpson.character}</h1>
      <p>Quote :
        {simpson.quote}
      </p>
    </div>
  );
}

export default DisplaySimpsons;