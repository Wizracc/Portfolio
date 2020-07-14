import React, { Component } from 'react'

export default class SkillItem extends Component {
  render(){
    return(
      <div>
        <h4>{this.props.data.title}</h4>
        <p>{this.props.data.description}</p>
      </div>
    )
  }
}