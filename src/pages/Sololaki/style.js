'use strict'

import { scaleSololakiBanner, zoomInB, letterSpacingIn, verticalMove } from '../../animations'

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
    top: '40%',
    left: '50%',
    zIndex: '100',
    transform: 'translate(-50%, -50%) scale(1)',
    color: 'rgba(244, 233, 217, .55)',
    fontSize: `${50 / 16}em`,
    textTransform: 'uppercase',
    animationName: zoomInB,
    animationDuration: '3s',
    animationTiminFunction: 'ease-in-out',
    '> span': {
      fontSize: `${30 / 50}em`,
      textTransform: 'capitalize',
      animationName: letterSpacingIn,
      animationDuration: '1.3s',
      animationTimingFunction: 'ease-in-out',
      letterSpacing: '2px'

    }
  },
  '> p': {
    position: 'absolute',
    top: '52%',
    left: '50%',
    // transform: 'translate(-50%, -50%)',
    // transfomrm: 'translate(-50%, -50%)',
    // color: 'rgba(244, 233, 217, 1)',
    color: 'rgba(168, 98, 63, .65)',
    fontSize: '18px',
    fontFamily: 'DejaVu Sans',
    animationName: verticalMove,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out'

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
