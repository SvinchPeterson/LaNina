'use strict'

import { scaleSololakiBanner, opacityBanner } from '../../animations'

import COVER_JPG from '../../assets/images/sololaki/sololaki.jpg'
import COVER2_JPG from '../../assets/images/sololaki/coverMobile.jpg'

import { cream } from '../../colors'

export const styleBanner = {
  height: '100%',
  filter: 'grayscale(50%) brightness(50%)',
  '> span': {
    backgroundImage: 'linear-gradient(rgba(244, 233, 217, .4), rgba(42, 81, 61, .3)), url(' + COVER_JPG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    backgroundAttachment: 'fixed'

  }
}

export default {
  flex: 1,
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'relative',
  background: cream,

  scrollBehavior: 'smooth',
  margin: '0 auto',
  boxSizing: 'border-box'
}
