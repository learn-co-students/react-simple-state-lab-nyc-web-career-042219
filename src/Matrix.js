import React, { Component } from 'react';
import Cell from './Cell'
import { pattern1 } from './data';

export default class Matrix extends Component {
  static defaultProps = {
    values: pattern1.map(val => val = ['#F00'])
  }

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row" >{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}
