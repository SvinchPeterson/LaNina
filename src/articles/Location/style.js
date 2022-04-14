'use strict'

const styleLocation = {
  color: 'rgba(168, 98, 63, .65)',
  fontWeight: 400,
  maxWidth: '500px',
  textAlign: 'center',
  margin: '0 auto',
  lineHeight: '25px'
}

const styleMap = {
  display: 'block',
  maxWidth: `${700 / 16}em`,
  minHeight: '500px',
  flex: 1,
  border: 0,
  '@media only screen and (max-width: 1225px)': {
    minWidth: '100%',
    maxWidth: `100%`
  }
}

const styleAirPort = {
  '> p': {
    fontSize: `${15 / 16}em`,
    maxWidth: `${400 / 15}em`,
    color: 'rgba(0, 0, 0, .225)',
    letterSpacing: '1px',
    lineHeight: `${20 / 15}em`
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
    iframe: styleMap,
    div: styleAirPort,
    '@media only screen and (max-width: 1225px)': {
      flexFlow: 'column'
    }
  }
}
