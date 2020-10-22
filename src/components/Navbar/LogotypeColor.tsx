import React from 'react'
import { ColorPicker } from 'material-ui-color'

const palette = {
  red: '#ff0000',
  blue: '#0000ff',
  green: '#00ff00',
  yellow: 'yellow',
  cyan: 'cyan',
  lime: 'lime',
  gray: 'gray',
  orange: 'orange',
  purple: 'purple',
  black: 'black',
  white: 'white',
  pink: 'pink',
  darkblue: 'darkblue'
}

const LogotypeColor = () => {
  return (
    <ColorPicker
      defaultValue="red"
      hideTextfield
      disableAlpha
      // palette={palette}
      onChange={(e) => console.info('aaa')}
    />
  )
}

export default LogotypeColor
