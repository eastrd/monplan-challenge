import React from 'react'
import 'whatwg-fetch'

class ExampleComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      data: {},
      error: false
    }
  }

  componentWillMount () {
    fetch('http://monplan-api-dev.appspot.com/units/'+this.props.unitCode)
            .then((resp) => {
              return resp.json()
            })
            .then((data) => {
              this.setState({
                data: data
              })
            })
            .catch(err => {
              this.setState({
                error: true
              })
            })
  }

  render () {
    const { data, error } = this.state
    const { unitName, unitCode, description } = data
    return (
      <div style={{width: '80%', textAlign: 'center'}}>
        <h1>{error ? "Error" : unitCode} {error ? ":" : "-"} {error ? "Unit not found" : unitName}</h1>
        <p>{error ? "M8, Try search something else" : description}</p>
      </div>
    )
  }
}

export default ExampleComponent
