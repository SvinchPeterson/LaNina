'use strict'

import { scaleSololakiBanner, scaleOpacitySololakiBannerHeading, opacitySololakiBannerParagraph, letterSpacingSololakiBanner } from '../../animations'

import COVER_JPG from '../../assets/images/balcony.jpg'

export const styleBanner = {
  width: `100%`,
  height: `100%`,
  overflow: 'hidden',
  boxSizing: 'border-box',
  position: 'relative',
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
    top: '50%',
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
      animationTimingFunction: 'ease-in-out'
    },
    '> span': {
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
      opacity: '.55',
      letterSpacing: '10px',
      animationName: letterSpacingSololakiBanner,
      animationDuration: '1s',
      animationTimingFunction: 'ease-in-out'
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
  // background: 'rgba(252, 247, 242, 1)',
  background: 'rgba(247, 239, 230, 1)',
  // background: 'rgba(243, 231, 219, 1)',
  // background: 'radial-gradient(rgba(245, 245, 245, 1), rgba(243, 231, 219, .7))',
  // background: 'radial-gradient(rgba(243, 231, 219, .5), rgba(243, 231, 219, 1))',
  // background: 'blue',
  // backgroundColor: 'linear-gradient(0deg, rgba(248, 229, 223, 1) 35%, rgba(243, 231, 219, 1) 65%, rgba(235, 233, 219, 1) 100%); }',
  scrollBehavior: 'smooth',
  // background: 'linear-gradient(0deg, rgba(245, 245, 245, 1) 35%, rgba(243, 231, 219, 1) 65%',

  '> div': styleBanner
}
