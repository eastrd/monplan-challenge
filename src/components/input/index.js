/*
  This component processes the user input.
  It checks for the input length:
    if the input is exactly 7 digits, hit RestAPI directly for unit information
    if the input is in between [3, 6], do a fuzzy search + filter on all the
      unit codes that matches the unit code the user inputed.
    If the input length is zero or larger than 7, presents the error to user.
*/

import React from "react"
import SingleSearchComponent from '../singleSearch'
import FuzzySearchComponent from '../fuzzySearch'

class InputComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {input: ""}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    // Since the endpoint requires unit code to be upper case, convert it here.
    this.setState({input: e.target.value.toUpperCase()})
  }


  render(){
    // If the input is exactly 7 digits, search the exact unit code.
    // If the input is < 7 digits but >= 3 digits, search all units that matches.
    const length = this.state.input.length
    return (
      <div>
        Search Unit Code:
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" onChange={this.handleChange} placeholder="FIT2093" />
        <div class="ui divider">
          <br />
          {
            length == 7 ?
              <SingleSearchComponent unitCode={this.state.input} />
                : length >= 3 && length < 7 ?
                    <FuzzySearchComponent unitCode={this.state.input} />
                      : null
          }
        </div>
      </div>
    )
  }
}

export default InputComponent
