import * as d3 from 'd3'
import React from 'react'
import ReactFauxDOM from 'react-faux-dom'


export default class SVGPixelArt extends React.Component {

  get width() {
    return this.props.pixelMap[0].length
  }

  get height() {
    return this.props.pixelMap.length
  }

  getPixelSetting(value) {
    return this.props.pixelSettings.settings.find((element) => {
      if (element.pixelValue === value)
        return true
      return false
    }) || this.props.pixelSettings.default
  }

  render() {
    const container = new ReactFauxDOM.Element('div')
    var svg = d3.select(container).append("svg")
      .attr('width', this.width)
      .attr('height', this.height)
    console.log(svg)
    this.props.pixelMap.forEach((row, y) => {
      row.forEach((value, x) => {
        let setting = this.getPixelSetting(value)
        if (setting.visible === false)
          return
        svg.append('rect')
          .attr('width', this.props.pixelSize)
          .attr('height', this.props.pixelSize)
          .attr('fill', setting.color)
          .attr("x", x)
          .attr("y", y)
      })
    })
    return svg.node().toReact()
  }
}

SVGPixelArt.propTypes = {
  pixelMap: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.number
    )
  ).isRequired,
  pixelSize: React.PropTypes.number,
  pixelColors: React.PropTypes.shape({
    default: React.PropTypes.shape({
      visible: React.PropTypes.boolean,
      color: React.PropTypes.string
    }),
    settings: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        pixelValue: React.PropTypes.number,
        visible: React.PropTypes.boolean,
        color: React.PropTypes.string
      })
    )
  })
}

SVGPixelArt.defaultProps = {
  pixelSize: 1,
  pixelSettings: {
    default: {
      visible: true,
      color: 'red'
    },
    settings: [
      {
        pixelValue: 1,
        visible: true,
        color: 'black'
      }, {
        pixelValue: 0,
        visible: false,
        color: ''
      }
    ]
  }
}

