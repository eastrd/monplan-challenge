/*
  This component takes the user input (partial unit code) whose length is
    in between 3 to 6 inclusive, and it displays all the unit code and name that
    matches the given partial unit code.
*/

import React from "react"
import SingleSearchComponent from '../singleSearch'

class FuzzySearchComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: ""
    }
    this.handleUnitClick = this.handleUnitClick.bind(this)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  handleUnitClick(e){
    // Handles user click on the unit code, sets the input as user clicked unit code
    // Substr the first 4 digits for the unit code
    const unitCode = e.currentTarget.textContent
    this.setState({input: unitCode.substr(0, 7)})
    this.forceUpdate()
  }

  handleBackButtonClick(){
    // When the user clicks the back button, the page will display result list
    this.setState({input: ""})
    this.forceUpdate()
  }

  render(){
    /*
      Loop through all units and filter out ones whose unit code contains the
         given partial search string.
      Returns an array that contains all unit codes that's been filtered
    */
    const inputCode = this.state.input
    if (inputCode.length > 0){
      // Make sure when the user click to view the detail of an unit,
      // if he/she types something in the search bar, it will continue searching
      this.state.input = ""
      return (
        <div>
          <SingleSearchComponent unitCode={inputCode} />
          <div class="ui divider" align="left">
          <br/>
            <button class="ui primary button" onClick={this.handleBackButtonClick}>
              Back
            </button>
          </div>
        </div>
      )
    }
    else {
      var wantedUnitCodes = []
      for (var key in localStorage){
        if (key.includes(this.props.unitCode)){
          wantedUnitCodes.push(key)
        }
      }
      var linkNoUnderscoreNoColourStyle = {
        "text-decoration": "none",
        "color" : "#000"
      }
      // Split the array of unit codes into each li item
      //    and display their descriptions from localStorage
      return (
        <div class="ui middle aligned animated list">
          {
            wantedUnitCodes.map(
              wantedUnitCode =>
                <div class="item" onClick={this.handleUnitClick} style={{textAlign: 'left'}}>
                  <a href="#" style={linkNoUnderscoreNoColourStyle}>
                    <h4>
                      { wantedUnitCode + " :  " + localStorage.getItem(wantedUnitCode) }
                    </h4>
                  </a>
                </div>
            )
          }
        </div>
      )
    }
  }
}

export default FuzzySearchComponent
