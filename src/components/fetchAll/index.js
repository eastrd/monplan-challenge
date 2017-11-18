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
    // Get everything except ID from the returned JSON data
    const { allUnitData, error } = this.state
    let allUnits = []
    for (var i=0; i<allUnitData.length; i++){
      var unitMap = {}
      unitMap["unitName"] = allUnitData[i]["unitName"]
      unitMap["unitCode"] = allUnitData[i]["unitCode"]
      unitMap["creditPoints"] = allUnitData[i]["creditPoints"]
      unitMap["faculty"] = allUnitData[i]["faculty"]
      unitMap["scaBand"] = allUnitData[i]["scaBand"]
      unitMap["locationAndTime"] = allUnitData[i]["locationAndTime"]
      allUnits.push(unitMap)
    }
    console.log(allUnits)
    console.log(allUnitData)
    localStorage.setItem("allUnitData", allUnits)
    return (
      <h1> Heyyy </h1>
    )
  }
}

export default FetchAllComponent
