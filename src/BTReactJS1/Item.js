import React, { Component } from 'react'
import Card from './Card'

export default class Item extends Component {
  render() {
    return (
      <div className='row container Item'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    )
  }
}
