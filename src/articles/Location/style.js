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
}

const styleMap = {
  display: 'block',
  maxWidth: `${900 / 16}em`,
  minHeight: '600px',
  transform: 'scale(.9)',
  filter: 'brightness(70%) grayscale(70%)',
  flex: 1,
  backgroundImage: 'url(' + MAP_PNG + ')',
  backgroundSize: 'contain',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
}

const styleAirPort = {
  '> p': {
    fontSize: `${15 / 16}em`,
    maxWidth: `${400 / 15}em`,
    // fontWeight: 500,
    color: 'rgba(0, 0, 0, .225)',
    letterSpacing: '.4px'
  },
  '> p > caption': {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'rgba(0, 0, 0, .5)',
    fontWeight: 700
  }

}

export default {

  '> p': styleLocation,

  '> section': {
    span: styleMap,
    div: styleAirPort
  }
}
