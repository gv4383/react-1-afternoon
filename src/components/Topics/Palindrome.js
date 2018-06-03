import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput : "",
      palindrome : ""
    }
  }

  newInput(str) {
    this.setState( { userInput : str } );
  }

  checkPal(str) {
    // assigns str input to reg
    let reg = str;
    // console.log(reg);
    // assigns the reverse of the str input to rev
    let rev = str.split("").reverse().join("");
    // console.log(rev);
    let trueOrFalse = "";

    if (reg === rev) {
      trueOrFalse = "true";
    }
    else {
      trueOrFalse = "false";
    }

    this.setState( { palindrome : trueOrFalse } );
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (event) => { this.newInput( event.target.value ) } }></input>
        <button className="confirmationButton" onClick={ () => { this.checkPal( this.state.userInput ) } }>CLICK HERE TO SEE IF IT'S A PALINDROME</button>
        <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
      </div>
    );
  }
}

export default Palindrome;