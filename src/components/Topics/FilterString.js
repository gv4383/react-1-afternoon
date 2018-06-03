import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray : ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
      userInput : "",
      filteredArray : []
    }
  }

  newInput(str) {
    this.setState( { userInput : str } )
  }

  filterArr(str) {
    let filteredArr = [];
    let counter = 0;
    // iterates through unFilteredArray
    for (let i = 0; i < this.state.unFilteredArray.length; i++) {
      counter = 0;
      // iterates through each individual letter in str input
      for (let j = 0; j < str.length; j++) {
        if (this.state.unFilteredArray[i][j] === str[j]) {
          counter += 1;
          if (counter === str.length) {
            filteredArr.push(this.state.unFilteredArray[i]);
          }
        }
      }
    }
    this.setState( { filteredArray : filteredArr } );
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray) }</span>
        <input className="inputLine" onChange={ (event) => { this.newInput(event.target.value) } }></input>
        <button className="confirmationButton" onClick={ () => { this.filterArr(this.state.userInput) } }>FILTER</button>
        <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
    );
  }
}

export default FilterString;