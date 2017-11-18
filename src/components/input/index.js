import React from "react"
import SingleSearchComponent from '../singleSearch'

class InputComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {input: ""}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    // Since the endpoint unit code is upper case, convert the input here.
    this.setState({input: e.target.value.toUpperCase()})
  }


  render(){
    // If the input is < 7 digits but >= 3 digits, search all units that matches.
    // If the input is exactly 7 digits, search the exact unit code.
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        { this.state.input.length == 7 ? <SingleSearchComponent unitCode={this.state.input} /> : null}
      </div>
    )
  }
}

export default InputComponent
