'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  padding: `${200 / 16}em 0`,
  // border: '5px solid red',
  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed'
  },
  '@media only screen and (max-width: 1225px)': {
    // backgroundImage: 'url(' + ORNAMENT2_PNG + ')',
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

export const styleRooms = {
  opacity: 0
}

export default {
  scrollBehavior: 'smooth',
  background: 'rgba(244, 233, 217, 1)'
  // border: '5px solid green'
}
