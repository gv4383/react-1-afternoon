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
    const { unFilteredArray } = this.state;

    let filteredArr = unFilteredArray.filter((name, i, arr) => name.includes(str));

    // let filteredArr = [];

    // for (let i = 0; i < unFilteredArray.length; i++) {
    //   if (unFilteredArray[i].includes(str)) {
    //     filteredArr.push(unFilteredArray[i]);
    //   }
    // }
    // console.log(filteredArr);

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