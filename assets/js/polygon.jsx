import React from 'react'
import ReactDOM from 'react-dom'

import masks from 'json!../json/masks.json'
import SVGPolygonHull from './components/svg-polygon-hull.jsx'


ReactDOM.render(
  <SVGPolygonHull pixelMap={masks[3]} />,
  document.getElementById('js-svg-1')
)

ReactDOM.render(
  <SVGPolygonHull pixelMap={masks[4]} />,
  document.getElementById('js-svg-2')
)
