/*
  Use this component to get all unit information and store in localStorage
    beforehand so that each user search will not trigger a
      RestAPI to the server, hence decrease the RestAPI server load.
  Once a full unitcode is obtained / user clicked on an unit,
    send the detailed RestAPI to get the details of that unit.
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
    // Clear localStorage and then store the unit info
    //  (refreshes unit info each time user refreshes the page)
    localStorage.clear();
    const { allUnitData, error } = this.state
    // Loop and Put all unit code and unit name in localStorage
    //  Key: Unit Code,  Value: Unit Name
    for (var i=0; i<allUnitData.length; i++){
      localStorage.setItem(allUnitData[i]["unitCode"], allUnitData[i]["unitName"])
    }
    // [!] Need to make this more visible to user in the future!
    console.log("Done Fetching All Units")
    return ( <h1> { error ? "Error fetching units info" : "" } </h1> )
  }
}

export default FetchAllComponent
