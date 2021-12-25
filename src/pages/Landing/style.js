'use strict'

import { opacity, scaleUp, letterSpacing, brightness, backgroundPosition, letterSpacing2 } from '../../animations'

export const stylePageLink = {
  flex: '1',
  minHeight: '100%',
  maxHeight: '100%',
  transition: 'all .55s ease-in-out',
  display: 'flex',
  overflow: 'hidden',
  textDecoration: 'none',
  filter: 'blur(1px)',

  '&:hover': {
    flex: 7.5,
    filter: 'blur(0px)',
    '& > div': {
      filter: 'grayscale(40%)',
      transform: 'scale(1)'
    }
  },
  '&:hover ~ a': {
    filter: 'blur(1.2px)'
  },
  '&:hover + h6': {
    color: 'rgba(243, 231, 219, .85)',
    transform: 'scale(1.1)',
    letterSpacing: '6.5px',
    fontWeight: 'bold'
  },

  '& > div': {
    flex: 1,
    // maxWidth: '100%',
    // maxHeight: '100%',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom left',
    backgroundSize: 'cover',
    animationName: backgroundPosition,
    animationDuration: '1.5s',
    filter: 'grayscale(65%)',
    transition: 'all .8s ease-in-out',
    transform: 'scale(1.05)'
  }
}

const styleUnderConstruction = {
  fontFamily: 'Avenir Next',
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  letterSpacing: '4px',
  color: 'rgba(165, 125, 2, .6)'
}

const styleBanner = {
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animationName: opacity,
  animationDuration: '4s',
  // AnimationTimingFunction: 'ease-in-out',
  // transition: 'all .6s ease-in-out',
  // transitionDelay: '0s',

  '> div': {
    span: {
      animationName: scaleUp,
      animationDuration: '1.2s'
      // animationDelay: '.2s'
    }
  }
}

const styleHeading = {
  position: 'fixed',
  zIndex: 60,
  color: 'rgba(243, 231, 219, .55)',
  pointerEvents: 'none',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  textTransform: 'uppercase',
  fontSize: `${12 / 16}em`,
  letterSpacing: '6px',
  transition: 'all .5s ease-in-out',
  animationName: letterSpacing2,
  animationDuration: '1.5s'
}

export default {
  boxSizing: 'border-box',
  flex: 1,
  justifyContent: 'space-between',
  display: 'flex',
  border: '1px solid black',
  animationName: brightness,
  animationDuration: '2.2s',
  position: 'relative',
  minHeight: '100%',
  '> a': stylePageLink,

  '> div': styleBanner,
  '> span': styleUnderConstruction,
  '> h6': styleHeading

}
