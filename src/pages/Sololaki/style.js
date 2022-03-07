'use strict'

import { scaleSololakiBanner, opacityBanner } from '../../animations'

import COVER_JPG from '../../assets/images/sololaki/sololaki.jpg'
import COVER2_JPG from '../../assets/images/sololaki/coverMobile.jpg'

export const styleBanner = {
  width: `100%`,
  height: `100%`,
  overflow: 'hidden',
  boxSizing: 'border-box',
  position: 'relative',
  fontFamily: 'Avenir Next',
  // '@media only screen and (max-width: 480px)': {
  // },
  // '&:hover > span': {
  //   backgroundPosition: 'bottom right'
  // },
  '> span': {
    minWidth: '100%',
    flex: 1,
    backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .65), rgba(0, 0, 0, .65)), url(' + COVER_JPG + ')',
    filter: 'brightness(40%) grayscale(30%)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    transform: 'scale(1)',
    animationName: scaleSololakiBanner,
    animationDuration: '5s',
    animationTimingFunction: 'linear',
    transition: 'all 1.5s ease-in-out',
    '@media only screen and (max-width: 900px)': {
      pointerEvents: 'none'
    },
    '@media only screen and (max-width: 600px)': {
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .65), rgba(0, 0, 0, .65)), url(' + COVER2_JPG + ')',
      backgroundPosition: 'right center'
    },

    '@media only screen and (max-width: 420px)': {
      backgroundPosition: 'right right'
    },
    '@media only screen and (max-width: 330px)': {
      backgroundPosition: 'left  right'
    }
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
    color: 'rgba(244, 233, 217, .45)',
    letterSpacing: '2px',
    animationName: opacityBanner,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    whiteSpace: 'nowrap',
    fontWeight: '600',

    '@media only screen and (max-width: 500px)': {
      whiteSpace: 'normal',
      width: '400px',
      padding: '0 50px',
      textAlign: 'center'

    }
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
  boxSizing: 'border-box',

  '> div': styleBanner
}
