'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: `${150 / 16}em 0`,
  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')'
  },
  '@media only screen and (max-width: 1225px)': {
    overflowX: 'hidden',
    background: 'radial-gradient(rgba(42, 81, 61, .55), rgba(42, 81, 61, 1))'

  },
  '> nav': {
    width: '100%',
    '@media only screen and (max-width: 1225px)': {
      minWidth: '100%',
      overflowX: 'auto'

    }
  }
}

export const styleRooms = {
  opacity: 0
}

export default {
  scrollBehavior: 'smooth',
  background: 'rgba(244, 233, 217, 1)'
  // border: '5px solid green'
}
