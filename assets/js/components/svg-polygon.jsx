import * as d3 from 'd3'
import React from 'react'
import ReactFauxDOM from 'react-faux-dom'


export default class SVGPolygon extends React.Component {

  constructor(props) {
    super(props)
    this.points = this.formatPoints(this.props.points)
  }

  formatPoints(points) {
    let _points = points.map(joinComma),
        edge = points.slice(0,2).map(joinComma)

    return _points.concat(edge).join(' ')

    function joinComma(coordinate) {
      return coordinate.join(',')
    }
  }

  render() {
    const container = new ReactFauxDOM.Element('div')
    let svg = d3.select(container).append("svg")
      .attr('width', this.props.width)
      .attr('height', this.props.height)
    svg.append('polygon')
      .attr('points', this.points)
      .attr('stroke', this.props.stroke)
      .attr('stroke-linejoin', this.props.strokeLinejoin)
      .attr('stroke-width', this.props.strokeWidth)
      .attr('fill', this.props.fill)
    return svg.node().toReact()
  }
}

SVGPolygon.propTypes = {
  points: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.number
    )
  ).isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  stroke: React.PropTypes.string,
  strokeLinejoin: React.PropTypes.string,
  strokeWidth: React.PropTypes.number,
  fill: React.PropTypes.string
}

SVGPolygon.defaultProps = {
  stroke: 'black',
  strokeLinejoin: 'round',
  strokeWidth: 1,
  fill: 'null',
}

