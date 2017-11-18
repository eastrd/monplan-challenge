import React from "react"
import ExampleComponent from '../example'

class SearchComponent extends React.Component {
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
    // If the input is exactly 7 digits, search the exact unit code.
    // If the input is < 7 digits but >= 3 digits, search all units that matches.
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        { this.state.input.length == 7 ? <ExampleComponent unitCode={this.state.input} /> : null}
      </div>
    )
  }
}

export default SearchComponent