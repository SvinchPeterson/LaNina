'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export const styleHeader = {
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  '> div': {
    width: '100%',
    overflowX: 'auto',
    scrollBehavior: 'smooth'
  }
}

export const styleRooms = {
  opacity: 0
}

export default {
  scrollBehavior: 'smooth'
}
