'use strict'

import { scaleSololakiBanner, opacityBanner } from '../../animations'

import COVER_JPG from '../../assets/images/sololaki/sololaki.jpg'

export const styleBanner = {
  width: `100%`,
  height: `100%`,
  overflow: 'hidden',
  boxSizing: 'border-box',
  position: 'relative',
  fontFamily: 'Avenir Next',
  '&:hover > span': {
    backgroundPosition: 'bottom right'
  },
  '> span': {
    minWidth: '100%',
    flex: 1,
    backgroundImage: 'radial-gradient(rgba(243, 231, 219, .6), rgba(243, 231, 219, .2)), url(' + COVER_JPG + ')',
    filter: 'brightness(20%) grayscale(30%)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    transform: 'scale(1)',
    animationName: scaleSololakiBanner,
    animationDuration: '5s',
    animationTimingFunction: 'linear',
    transition: 'all 1.5s ease-in-out'
  },
  '> div': {
    position: 'absolute',
    top: '43%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  '> p': {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'rgba(243, 231, 219, .45)',
    letterSpacing: '2px',
    animationName: opacityBanner,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out'
  }
}

export default {
  flex: 1,
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'relative',
  background: 'rgba(247, 239, 230, 1)',
  scrollBehavior: 'smooth',
  // border: '20px solid green',
  maxWidth: `${2560 / 16}em`,
  margin: '0 auto',

  '> div': styleBanner
}
