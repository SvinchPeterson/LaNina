'use strict'

import { opacity, scaleUp, landingLoading, backgroundPosition, letterSpacing2 } from '../../animations'

export const stylePageLink = {
  flex: '1',
  minHeight: '100%',
  maxHeight: '100%',
  transition: 'all 1s ease-in-out',
  display: 'flex',
  overflow: 'hidden',
  textDecoration: 'none',
  filter: 'blur(1px)',
  '& + h6': { },

  '&:hover': {
    flex: 7.5,
    filter: 'blur(0px)',
    '& > div': {
      transform: 'scale(1.1)'
    }
  },
  '&:hover ~ a': {
    filter: 'blur(1.2px)'
  },
  '&:hover > div': {
  },

  '& > div': {
    flex: 1,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'grayscale(65%)',
    transition: 'all .8s ease-in-out',
    transform: 'scale(1)'
  }
}

const styleUnderConstruction = {
  fontFamily: 'Avenir Next',
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  letterSpacing: '4px',
  color: 'rgba(165, 125, 2, .85)'
}

const styleBanner = {
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animationName: opacity,
  animationDuration: '.6s',
  '> div': {
    span: {
      animationName: scaleUp,
      animationDuration: '1.2s'
    }
  }
}

const styleHeading = {
  position: 'absolute',
  zIndex: 60,
  left: 0,
  color: 'rgba(243, 231, 219, 1)',
  pointerEvents: 'none',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  textTransform: 'uppercase',
  fontSize: `${14 / 16}em`,
  letterSpacing: '6px',
  transition: 'all 1s ease-in-out',
  animationName: letterSpacing2,
  animationDuration: '1.5s',
  fontFamily: 'Bellefair',
  fontWeight: '400'
}

export default {
  boxSizing: 'border-box',
  flex: 1,
  justifyContent: 'space-between',
  display: 'flex',
  animationName: landingLoading,
  filter: 'brightness(100%) blur(0) contrast(100%)',
  animationDuration: '3s',
  position: 'relative',
  minHeight: '100%',
  background: 'black',
  '> a': stylePageLink,

  '> div': styleBanner,
  '> span': styleUnderConstruction,
  '> h6': styleHeading

}
