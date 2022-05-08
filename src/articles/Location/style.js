'use strict'

const styleLocation = {
  fontSize: `${14 / 16}em`,
  lineHeight: `${21 / 14}em`,
  color: 'rgba(168, 98, 63, .35)',
  fontWeight: 500,
  maxWidth: `${500 / 14}em`,
  textAlign: 'center',
  margin: '0 auto'
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
  '@media only screen and (max-width: 480px)': {
    padding: '0 16px'
  },
  '> p': {
    fontSize: `${14 / 16}em`,
    maxWidth: `${400 / 14}em`,
    color: 'rgba(0, 0, 0, .2)',
    letterSpacing: '0px',
    lineHeight: `${20 / 14}em`,
    fontWeight: 500
  },
  '> p > caption': {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'rgba(168, 98, 63, .55)',
    fontWeight: 700
  }

}

export default {
  background: 'rgba(244, 233, 217, 1)',

  '> p': styleLocation,

  '> section': {
    iframe: styleMap,
    div: styleAirPort,
    '@media only screen and (max-width: 1225px)': {
      flexFlow: 'column'
    }
  }
}
