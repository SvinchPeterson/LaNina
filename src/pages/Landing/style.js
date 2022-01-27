'use strict'

import { opacity, scaleUp, landingLoading, backgroundPosition, letterSpacing2, widthShrink, zoomInOut } from '../../animations'

export const stylePageLink = {
  flex: '1',
  minHeight: '100%',
  maxHeight: '100%',
  transition: 'all 1s ease-in-out',
  display: 'flex',
  overflow: 'hidden',
  textDecoration: 'none',
  filter: 'blur(1px) grayscale(40%)',

  '&:hover > h6': {
    // animationName: widthShrink,
    // animationDuration: '1s',
    // AnimationTimingFunction: 'ease-in-out',
    width: '160px',
    // transform: 'scale(.5)',
    // border: '3px solid black',
    '> span': {
      opacity: 1
    }
  },
  '&:not(:hover) > h6': {
    width: 0
    // background: 'transparent'

  },

  '&:hover': {
    flex: 7.5,
    filter: 'blur(0px) grayscale(20%)',
    boxShadow: 'inset 5px 5px 5px 5p red',
    '& > div': {
      animationName: zoomInOut,
      animationDuration: '4s',
      AnimationTimingFunction: 'ease-in-out'
      // transform: 'scale(1.1)'

    }
  },
  '&:hover ~ a': {
    filter: 'blur(1.2px)'
  },
  '&:hover > div': {
    transform: 'scale(1.15)'
  },

  '& > div': {
    flex: 1,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: 'all .8s ease-in-out',
    transform: 'scale(1)',
    backgroundPosition: 'left center',
    animationName: backgroundPosition,
    animationDuration: '3s',
    AnimationTimingFunction: 'ease-in-out'
  }
}

const styleUnderConstruction = {
  fontFamily: 'Avenir Next',
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  letterSpacing: '4px',
  color: 'rgba(165, 125, 2, .65)',
  zIndex: '200'
}

const styleBanner = {
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animationName: opacity,
  animationDuration: '.6s',
  transition: 'all 1s ease-in-out',
  '> div': {
    span: {
      animationName: scaleUp,
      animationDuration: '1.2s'
    }
  }
}

const styleHeading = {
  fontFamily: 'Avenir Next',
  // fontFamily: 'Bellefair',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  textTransform: 'uppercase',
  color: 'rgba(243, 231, 219, .85)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  height: '100%',
  width: '0',
  fontWeight: '400',
  transform: 'scale(1)',
  // background: 'rgba(0, 0, 0, .8)',
  background: 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .8), rgba(0, 0, 0, 1))',
  // filter: 'blur(2px)',

  // transition: 'all .5s ease-in-out',
  // fontSize: '35px',
  fontSize: '16px',
  // fontWeight: '600',
  // background: 'rgba(0, 0, 0, .5)',
  // color: 'rgba(165, 125, 2, .8)',
  letterSpacing: '6px',
  transition: 'all 1s ease-in-out',
  span: {
    opacity: 0,
    transition: 'all 1s ease-in-out',
    zIndex: '100'
  }
}

export default {
  boxSizing: 'border-box',
  flex: 1,
  justifyContent: 'space-between',
  display: 'flex',
  animationName: landingLoading,
  filter: 'brightness(100%) blur(0) contrast(100%)',
  animationDuration: '1s',
  position: 'relative',
  minHeight: '100%',
  background: 'black',
  '> a': stylePageLink,
  '> a > h6': styleHeading,

  '> div': styleBanner,
  '> span': styleUnderConstruction,
  '> h6': styleHeading

}
