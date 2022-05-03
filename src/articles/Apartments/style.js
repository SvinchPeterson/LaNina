'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  borderBottom: '3px solid rgba(168, 98, 63, 0)',
  transition: 'border 2s ease-in-out',
  '@media only screen and (max-width: 1225px)': {
    overflowX: 'hidden'
    // background: 'radial-gradient(rgba(42, 81, 61, .55), rgba(42, 81, 61, 1))'
  },
  '@media only screen and (min-width: 1225px)': {
  },
  // '@media only screen and (max-width: 520px)': {
  //   padding: `${250 / 16}em ${0 / 16}em`
  // },
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
  background: 'rgba(244, 233, 217, 1)',
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundColor: 'rgba(168, 98, 63, 1)',
  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed'
  }
}
