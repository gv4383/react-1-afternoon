import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray : [],
      oddArray : [],
      userInput : ""
    }
  }

  newInput(str) {
    this.setState({ userInput: str });
  }

  sortArray(input) {
    let newArr = this.state.userInput.split(",");
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = parseInt(newArr[i], 10);
    }
    let newEvens = newArr.filter( (val, i, arr) => val % 2 === 0 );
    let newOdds = newArr.filter( (val, i, arr) => val % 2 > 0 );

    // console.log(newEvens);
    // console.log(newOdds);

    this.setState({ evenArray : newEvens, oddArray : newOdds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" onChange={ (event) => this.newInput(event.target.value) }></input>
        <button className="confirmationButton" onClick={ () => { this.sortArray(this.state.userInput) } }>SORT</button> 
        <span className="resultsBox">Even Array: { JSON.stringify(this.state.evenArray) }</span>
        <span className="resultsBox">Odd Array: { JSON.stringify(this.state.oddArray) }</span>
      </div>
    );
  }
}

export default EvenAndOdd;