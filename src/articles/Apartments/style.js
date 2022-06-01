'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  // border: '2px solid red',
  transition: 'border 2s ease-in-out',
  padding: `0 6%`,
  '@media only screen and (max-width: 1225px)': {
    overflowX: 'hidden'
  },
  '> nav': {
    width: '100%',
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
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'contain',
  padding: `${300 / 16}em 0`,
  boxSizing: 'border-box',
  // border: '2px solid yellow',
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
  }
}
