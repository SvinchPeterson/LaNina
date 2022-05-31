'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  transition: 'border 2s ease-in-out',
  '@media only screen and (max-width: 1225px)': {
    overflowX: 'hidden',
    padding: `${230 / 16}em ${120 / 16}em ${290 / 16}em ${120 / 16}em`
  },
  '@media only screen and (max-width: 768px)': {
    padding: `${80 / 16}em ${0 / 16}em ${50 / 16}em  ${0 / 16}em`,
    paddingLeft: 0,
    paddingRight: 0
  },
  '@media only screen and (max-width: 480px)': {
  },
  '@media only screen and (max-height: 600px)': {
    paddingTop: `${80 / 16}em `
  },
  '> nav': {
    paddingTop: `${100 / 16}em`,
    width: '100%',
    '@media only screen and (max-width: 480px)': {
      paddingTop: `${50 / 16}em`
    },
    '@media only screen and (max-width: 1225px)': {
      minWidth: '100%',
      overflowX: 'auto'
    }
  }
}

export default {
  scrollBehavior: 'smooth',
  background: 'rgba(244, 233, 217, .4)',
  position: 'relative',
  padding: '100px 0 400px 0',
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'contain',
  '&:before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'radial-gradient(rgba(244, 233, 217, .1), rgba(60, 84, 72, .85), rgba(42, 81, 61, .85))'
  },

  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed'
  },
  '@media only screen and (max-width: 1225px)': {
    paddingTop: `${0 / 16}em`,
    paddingBottom: '100px !important'
  },
  '@media only screen and (max-width: 768px)': {
    paddingBottom: `${50 / 16}em`,
    paddingTop: 0
  }
}
