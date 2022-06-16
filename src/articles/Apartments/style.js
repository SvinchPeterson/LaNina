'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  transition: 'border 2s ease-in-out',
  padding: `0 6%`,
  '@media only screen and (max-width: 1225px)': {
    overflowX: 'hidden',
    padding: 0
  },
  '> nav': {
    width: '100%',
    paddingTop: '30px',
    '@media only screen and (max-width: 1225px)': {
      minWidth: '100%',
      overflowX: 'auto'
    }
  }
}

export default {
  scrollBehavior: 'smooth',
  background: 'rgba(248, 241, 227, 1)',
  position: 'relative',
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  padding: `${300 / 16}em 0`,
  boxSizing: 'border-box',
  // backgroundRepeat: 'no-repeat',
  '&:before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'radial-gradient(rgba(248, 241, 227, .1), rgba(60, 84, 72, .85), rgba(42, 81, 61, .85))'
  },

  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed'
  },
  '@media only screen and (max-width: 1225px)': {
    padding: `${250 / 16}em 0`
  },
  '@media only screen and (max-width: 768px)': {
    padding: `${200 / 16}em 0`
  },
  '@media only screen and (max-width: 480px)': {
    padding: `${100 / 16}em 0`
  }
}
