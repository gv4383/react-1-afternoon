import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray : [
        { 
          "name": "Jimmy Joe",
          "title": "Hack0r",
          "age": 12
        }, 
        { 
          "name": "Jeremy Schrader",
          "age": 24,
          "hairColor": "brown"
        },
        { 
          "name": "Carly Armstrong",
          "title": "CEO"
        }
      ],
      userInput : "",
      filteredArray : []
    }
  }

  newInput(str) {
    this.setState( { userInput : str } );
  }

  filterObj(str) {
    let newArr = [];
    for (let i = 0; i < this.state.unFilteredArray.length; i++) {
      if (this.state.unFilteredArray[i].hasOwnProperty(str)) {
        newArr.push(this.state.unFilteredArray[i]);
      }
    }
    this.setState( { filteredArray : newArr } );
  }
  
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray) }</span>
        <input className="inputLine" onChange={ (event) => this.newInput(event.target.value) }></input>
        <button className="confirmationButton" onClick={ () => { this.filterObj(this.state.userInput) } }>FILTER</button>
        <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
    );
  }
}

export default FilterObject;