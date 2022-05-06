'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  transition: 'border 2s ease-in-out',
  '@media only screen and (max-width: 1225px)': {
    overflowX: 'hidden',
    paddingTop: `${120 / 16}em`
  },
  '@media only screen and (max-width: 768px)': {
    paddingTop: `${70 / 16}em`,
    paddingLeft: 0,
    paddingRight: 0
  },

  '> nav': {
    paddingTop: `${40 / 16}em`,
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
  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
    backgroundSize: 'contain'
  },
  '@media only screen and (max-width: 1225px)': {
    paddingBottom: `${200 / 16}em`
  },
  '@media only screen and (max-width: 768px)': {
    paddingBottom: `${100 / 16}em`
  }
}
