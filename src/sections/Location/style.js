'use strict'
import MAP_PNG from '../../assets/images/sololaki/map.png'

// backgroundImage: 'radial-gradient(rgba(243, 231, 219, .4), rgba(243, 231, 219, .3)), url(' + SOLOLAKI_JPG + ')',
const styleLocation = {
  color: 'rgba(0, 0, 0, .35)',
  fontWeight: '500',
  maxWidth: '500px',
  textAlign: 'center',
  margin: '0 auto',
  lineHeight: '25px'
  // border: '10px solid red'
}

// rgba(243, 231, 219, .4)

const styleMap = {
  display: 'block',
  maxWidth: `${900 / 16}em`,
  minHeight: '600px',
  transform: 'scale(.9)',
  filter: 'brightness(50%)',
  flex: 1,
  backgroundImage: 'url(' + MAP_PNG + ')',
  backgroundSize: 'contain',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
}

const styleAirPort = {
  '> p': {
    maxWidth: `${400 / 16}em`
  }

}

export default {
  fontFamily: 'Avenir Next',

  '> p': styleLocation,

  '> section': {
    span: styleMap,
    div: styleAirPort
  }
}
