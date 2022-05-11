'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  transition: 'border 2s ease-in-out',
  '@media only screen and (max-width: 1225px)': {
    overflowX: 'hidden',
    padding: `${230 / 16}em ${120 / 16}em ${200 / 16}em ${120 / 16}em`
  },
  // '@media only screen and (max-width: 1024px)': { padding: `${120 / 16}em ${70 / 16}em` },
  '@media only screen and (max-width: 768px)': {
    padding: `${130 / 16}em ${0 / 16}em ${0 / 16}em  ${0 / 16}em`,
    // paddingTop: `${70 / 16}em`,
    paddingLeft: 0,
    paddingRight: 0
  },
  '@media only screen and (max-height: 600px)': {
    paddingTop: `${80 / 16}em `
  },
  '> nav': {
    paddingTop: `${40 / 16}em`,
    width: '100%',
    '@media only screen and (max-width: 1225px)': {
      minWidth: '100%',
      overflowX: 'auto'
      // paddingTop: `${130 / 16}em`
    }
  }
}

export default {
  scrollBehavior: 'smooth',
  background: 'rgba(244, 233, 217, .4)',
  position: 'relative',
  padding: '100px 0 200px 0',

  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
    backgroundSize: 'contain'
  },
  '@media only screen and (max-width: 1225px)': {
    paddingTop: `${0 / 16}em`,
    paddingBottom: '300px !important'
  },
  '@media only screen and (max-width: 768px)': {
    paddingBottom: `${100 / 16}em`
  }
}
