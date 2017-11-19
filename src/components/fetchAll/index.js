/*
  Use this component to get all unit information and store in localstorage
    so that each user search will not trigger a RestAPI to the server.
    Hence decrease the traffic load.
  Once a full unitcode / user clicked on an unit, send the detailed RestAPI to get
    details of that unit.
*/
import React from 'react'
import 'whatwg-fetch'

class FetchAllComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      allUnitData: {},
      error: false
    }
  }

  componentWillMount () {
    fetch('http://monplan-api-dev.appspot.com/basic/units')
            .then((resp) => {
              return resp.json()
            })
            .then((data) => {
              this.setState({
                allUnitData: data
              })
            })
            .catch(err => {
              this.setState({
                error: true
              })
            })
  }

  render () {
    // Clear localStorage and then store the unit info (refresh)
    localStorage.clear();
    const { allUnitData, error } = this.state
    for (var i=0; i<allUnitData.length; i++){
      localStorage.setItem(allUnitData[i]["unitCode"], allUnitData[i]["unitName"])
    }
    console.log("Done Fetching All Units")
    return ( <h1> { error ? "Error fetching units info" : "" } </h1> )
  }
}

export default FetchAllComponent
