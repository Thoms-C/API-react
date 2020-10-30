import React, { Component } from "react";
import axios from "axios";
import DisplaySimpson from "./DisplaySimpson.jsx";

import "./App.css";

const sampleSimpson = 
[
  {
   "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
   "character": "Nelson Muntz",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
  }
]
;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: sampleSimpson[0],
    };
    this.getSimpson = this.getSimpson.bind(this);
  }
  
  getSimpson() {
    // Send the request
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      // Extract the DATA from the received response

      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        this.setState({
          simpson: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
         <h1>Simpsons</h1>
         
        <DisplaySimpson simpson={this.state.simpson} />
        <button type="button" onClick={this.getSimpson}>
          Get quotes
        </button>
      </div>
    );
  }
}
export default App;