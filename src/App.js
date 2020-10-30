import React, { Component } from "react";
import axios from "axios";
import DisplaySimpson from "./DisplaySimpson.jsx";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: null,
    };
    this.getSimpson = this.getSimpson.bind(this);
  }
  
  componentDidMount(){
    this.getSimpson()
  }


  getSimpson() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
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
         
         {this.state.simpson ? <DisplaySimpson simpson={this.state.simpson}/> : <p>No data</p>}
         
        <button type="button" onClick={this.getSimpson}>
          Get quotes
        </button>
      </div>
    );
  }
}
export default App;