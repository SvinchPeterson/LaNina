'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments4.png'

export const styleHeader = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: `${250 / 16}em ${80 / 16}em`,
  borderBottom: '3px solid rgba(168, 98, 63, 1)',
  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed'
    // backgroundColor: 'rgba(168, 98, 63, 1)'
    // backgroundColor: 'rgba(244, 233, 217, 1)',
    // backgroundImage: 'url(' + ORNAMENT_PNG + ')'
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
  opacity: 1
}

export default {
  scrollBehavior: 'smooth',
  background: 'rgba(244, 233, 217, 1)',
  // border: '5px solid blue',
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundColor: 'rgba(168, 98, 63, 1)'
  // padding: '200 80px 200px 80px'
}
