'use strict'

import { scaleSololakiBanner, opacityBanner } from '../../animations'

import COVER_JPG from '../../assets/images/sololaki/sololaki.jpg'
import COVER2_JPG from '../../assets/images/sololaki/coverMobile.jpg'

import { cream } from '../../colors'

export const styleBanner = {
  height: '100%',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',

  '> span': {
    backgroundImage: 'linear-gradient(rgba(42, 81, 61, .45), rgba(42, 81, 61, 1)), url(' + COVER_JPG + ')',
    backgroundSize: 'cover',
    flex: 1,
    animationName: scaleSololakiBanner,
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out',
    backgroundAttachment: 'fixed',
    transition: 'all 1s ease-in-out',
    filter: 'grayscale(70%) brightness(60%)',

    '&:hover': {
      backgroundPosition: 'center center',
      transition: 'all 2s ease-in-out'
    }
  },
  '> caption': {
    fontWeight: '500',
    position: 'absolute',
    top: '45%',
    left: '50%',
    zIndex: '100',
    transform: 'translate(-50%, -50%)',
    color: 'rgba(244, 233, 217, .55)',
    fontSize: `${50 / 16}em`,
    textTransform: 'uppercase',
    '> span': {
      fontSize: `${30 / 50}em`,
      letterSpacing: '1px',
      textTransform: 'capitalize'

    }
  },
  '> p': {
    position: 'absolute',
    top: '55%',
    left: '50%',
    // transform: 'translate(-50%, -50%)',
    // transfomrm: 'translate(-50%, -50%)',
    // color: 'rgba(244, 233, 217, 1)',
    color: 'rgba(168, 98, 63, .65)',
    fontSize: '18px',
    fontFamily: 'DejaVu Sans'

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
