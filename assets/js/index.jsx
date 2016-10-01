import React from 'react'
import ReactDOM from 'react-dom'

import SVGPixelArt from './components/svg-image'
import boundary from 'json!../json/boundaries2.json'


ReactDOM.render(<SVGPixelArt pixelMap={boundary[0]} />, document.getElementById('js-svg'))