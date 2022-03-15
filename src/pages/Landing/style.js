'use strict'

import { brightnessLanding, zoomOutLanding, imagePosition, border } from '../../animations'

import { cream } from '../../colors'

const styleLink = {
  flex: 1,
  overflow: 'hidden',
  position: 'relative',
  backgroundSize: 'cover',
  transition: 'all 1s ease-in-out',
  animationName: brightnessLanding,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  border: '0px solid black',
  // border: '10px solid red',
  '&:hover': {
    flex: 10,
    '> div': {

      backgroundPosition: 'bottom left'
      // borderBottom: '40px solid black'
    }
  }
  // '&:hover > div': { backgroundPosition: 'bottom right' }
}

const styleImage = {
  minWidth: '100%',
  minHeight: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  // flex: 1,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  filter: 'grayscale(100%) brightness(50%) blur(.5px)',
  transition: 'all 1s ease-in-out',

  backgroundPosition: 'center center',

  animationName: imagePosition,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out'
}

const styleHeading = {
  position: 'absolute',
  width: '0',
  height: '140px',
  zIndex: '100',
  color: cream,
  fontWeight: 700,
  fontSize: `${18 / 16}em`,
  transform: 'scale(1)',
  marginTop: `${50 / 18}em`,
  textTransform: 'uppercase',
  letterSpacing: '3px',
  opacity: 0,
  transition: 'all .5s linear',
  background: 'radial-gradient(rgba(42, 81, 61, .65), rgba(42, 81, 61, .8))',

  '> span': {
    opacity: 0,
    transition: 'all 1s ease-in-out',
    transitionDelay: '.3s'
  }
}

const styleUnderConstruction = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#E69369',
  zIndex: '100',
  fontSize: '16px',
  fontWeight: 700,
  letterSpacing: '2.7px',
  wordSpacing: '10px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
  whiteSpace: 'nowrap'
}

export default {
  '> a': styleLink,
  '> a > h3': styleHeading,
  '> a > div': styleImage,
  span: styleUnderConstruction,

  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  background: 'black',
  animationName: brightnessLanding,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  margin: '0 auto'
}
