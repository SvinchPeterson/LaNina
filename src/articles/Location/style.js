'use strict'

const styleLocation = {
  color: 'rgba(168, 98, 63, .65)',
  fontWeight: 400,
  maxWidth: '500px',
  textAlign: 'center',
  margin: '0 auto',
  lineHeight: `${25 / 16}em`
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
    maxWidth: `${400 / 15}em`,
    color: 'rgba(0, 0, 0, .25)',
    letterSpacing: '0px',
    lineHeight: `${20 / 15}em`,
    fontWeight: '400'
  },
  '> p > caption': {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'rgba(168, 98, 63, 1)',
    fontWeight: 500
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
