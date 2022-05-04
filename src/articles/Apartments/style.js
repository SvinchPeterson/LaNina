'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  transition: 'border 2s ease-in-out',
  // background: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .55))',
  // padding: '100px 80px 0 80px',
  '@media only screen and (max-width: 1225px)': {
    overflowX: 'hidden'
  },
  '@media only screen and (max-width: 768px)': {
    padding: '0'
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
  backgroundColor: 'rgba(244, 233, 217, .5)',
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'contain',
  // backgroundColor: 'rgba(168, 98, 63, .6)',
  // backgroundColor: 'rgba(42, 81, 61, .4)',
  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed'
  }
}
