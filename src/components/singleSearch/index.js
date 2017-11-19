/*
  This component is inteneded for single unit code ONLY.
  It takes one unit code and hit the RestAPI endpoint and displays its info.
  If there's an error in RestAPI, displays an error to user.
*/

import React from 'react'
import 'whatwg-fetch'

class SingleSearchComponent extends React.Component {
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

export default SingleSearchComponent
