'use strict'

const styleLocation = {
  lineHeight: `${21 / 14}em`,
  fontWeight: 400,
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
    padding: '0 30px'
  },
  '> p': {
    fontSize: `${14 / 16}em`,
    maxWidth: `${350 / 14}em`,
    color: 'rgba(0, 0, 0, .35)',
    letterSpacing: '0px',
    lineHeight: `${24 / 16}em`
  },
  '> p > caption': {
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }

}

export default {

  '> p': styleLocation,

  '> section': {
    iframe: styleMap,
    div: styleAirPort,
    '@media only screen and (max-width: 1225px)': {
      flexFlow: 'column',
      gap: '100px'
    }
  }
}
