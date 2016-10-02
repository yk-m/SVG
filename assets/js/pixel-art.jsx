import React from 'react'
import ReactDOM from 'react-dom'

import boundary from 'json!../json/boundaries.json'
import SVGPixelArt from './components/svg-pixel-art'


ReactDOM.render(<SVGPixelArt pixelMap={boundary[0]} />, document.getElementById('js-svg'))