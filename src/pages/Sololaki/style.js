'use strict'

import { scaleSololakiBanner, scaleOpacitySololakiBannerHeading, opacitySololakiBannerParagraph, letterSpacingSololakiBanner } from '../../animations'

import COVER_JPG from '../../assets/images/balcony.jpg'

export const styleBanner = {
  width: `100%`,
  height: `100%`,
  overflow: 'hidden',
  boxSizing: 'border-box',
  position: 'relative',
  fontFamily: 'Avenir Next',
  '> span': {
    minWidth: '100%',
    flex: 1,
    backgroundImage: 'radial-gradient(rgba(243, 231, 219, .6), rgba(243, 231, 219, .2)), url(' + COVER_JPG + ')',
    filter: 'brightness(15%) grayscale(30%)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    transform: 'scale(1)',
    animationName: scaleSololakiBanner,
    animationDuration: '5s',
    animationTimingFunction: 'linear'
  },
  '> div': {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 30,
    '> *': {
      color: 'rgba(243, 231, 219, 1)'
    },
    '> h2': {
      margin: 0,
      letterSpacing: '3px',
      transform: 'scale(1.1)',
      opacity: 0.75,
      animationName: scaleOpacitySololakiBannerHeading,
      animationDuration: '1s',
      animationTimingFunction: 'ease-in-out',
      color: 'rgba(243, 231, 219, .75)'
    },
    '> span': {
      textTransform: 'uppercase',
      letterSpacing: '10px',
      animationName: letterSpacingSololakiBanner,
      animationDuration: '1s',
      animationTimingFunction: 'ease-in-out',
      fontWeight: 500,
      opacity: '.4'
    },
    '> p': {
      fontFamily: 'Avenir Next',
      opacity: '.45',
      letterSpacing: '2px',
      animationName: opacitySololakiBannerParagraph,
      animationDuration: '5s',
      animationTimingFunction: 'ease-in-outr'

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

  '> div': styleBanner
}
