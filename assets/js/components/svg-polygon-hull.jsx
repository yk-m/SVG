import * as d3 from 'd3'
import React from 'react'
import ReactFauxDOM from 'react-faux-dom'

import SVGPolygon from './svg-polygon.jsx'


export default class SVGPolygonHull extends React.Component {

  constructor(props) {
    super(props)
    this.points = this.locatePoints(this.props.pixelMap)
  }

  locatePoints(pixelMap) {
    var points = []
    pixelMap.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === this.props.pointValue) {
          points.push([x, y])
        }
      })
    })
    return points
  }

  get width() {
    return this.props.pixelMap[0].length
  }

  get height() {
    return this.props.pixelMap.length
  }

  render() {
    let hull = d3.polygonHull(this.points)
    return (
      <SVGPolygon
        points={hull} width={this.width} height={this.height}
        pointValue={this.props.pointValue}
        stroke={this.props.stroke} strokeLinejoin={this.props.strokeLinejoin}
        strokeWidth={this.props.strokeWidth}
        fill={this.props.fill}
      />
    )
  }
}

SVGPolygonHull.propTypes = {
  pixelMap: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.number
    )
  ).isRequired,
  pointValue: React.PropTypes.number,
  stroke: React.PropTypes.string,
  strokeLinejoin: React.PropTypes.string,
  strokeWidth: React.PropTypes.number,
  fill: React.PropTypes.string
}

SVGPolygonHull.defaultProps = {
  pointValue: 1,
  stroke: 'black',
  strokeLinejoin: 'round',
  strokeWidth: 1,
  fill: 'none',
}

