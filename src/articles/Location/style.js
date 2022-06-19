'use strict'

const styleAirPort = {
  // '@media only screen and (max-width: 480px)': {
  //   padding: '0 30px'
  // },
  // '> p': {
  //   fontSize: `${14 / 16}em`,
  //   maxWidth: `${350 / 14}em`,
  //   color: 'rgba(0, 0, 0, .35)',
  //   letterSpacing: '0px',
  //   lineHeight: `${24 / 16}em`
  // },
  // '> p > caption': {
  //   textTransform: 'uppercase',
  //   letterSpacing: '1px'
  // }

}

export default {

  '> section': {
    div: styleAirPort,
    '@media only screen and (max-width: 1225px)': {
      flexFlow: 'column',
      gap: '100px'
    }
  }
}
