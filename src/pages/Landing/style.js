'use strict'

import { brightnessLanding, zoomOutLanding, imagePosition, border } from '../../animations'

import { cream } from '../../colors'

const styleLink = {
  flex: 1,
  overflow: 'hidden',
  position: 'relative',
  backgroundSize: 'cover',
  transition: 'all 1s ease-in-out',
  boxSizing: 'border-box',
  animationName: brightnessLanding,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  borderTop: '0px solid black',
  borderBottom: '0px solid black',
  // border: '10px solid red',
  '&:hover': {
    flex: 8,
    borderTop: '50px solid black',
    borderBottom: '50px solid black',
    '> div': {
      backgroundPosition: 'bottom left',
      filter: 'grayscale(35%) brightness(75%) blur(0px)'
      // borderTop: '70px solid black'
    },

    '> h3': {
      width: `${240 / 30}em`,
      transition: 'all 1s ease-in-out',
      opacity: 1,
      '> span': {
        opacity: 1,
        minWidth: '100%',
        '&::before': {
          opacity: 1
        }
      }
    }
  },
  '&:not(:hover)': {
    '> h3': {
      transition: 'all .3s ease-in-out',
      '> span::before': {
        transition: 'all 0s ease-in-out',
        transitionDelay: 0
      }
    }
  }
  // '&:hover > div': { backgroundPosition: 'bottom right' }
}

const styleImage = {
  // minWidth: '100%',
  // minHeight: '100%',
  // maxWidth: '100%',
  // maxHeight: '100%',
  flex: 1,
  // border: '20px solid yellow',
  // flex: 1,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  filter: 'grayscale(100%) brightness(50%) blur(.5px)',
  transition: 'all 1s ease-in-out',

  backgroundPosition: 'center center',
  // border: '0px solid black',

  animationName: imagePosition,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out'
}

const styleHeading = {
  position: 'absolute',
  zIndex: 200,
  color: cream,
  width: 0,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '2.5px',
  opacity: 0,
  bottom: '-100px',
  transition: 'all .8s ease-in-out',
  // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, .5)',
  boxSizing: 'border-box',
  fontFamily: 'Helvetica Neue',
  // border: '5px solid red',

  //= padding: '100px 60px',
  // borderBottom: '30px solid black',
  // fontFamily: 'Helvetica',
  '> span': {
    minWidth: '100%',
    opacity: 1,
    boxSizing: 'border-box',
    transition: 'all 3s ease-in-out',
    transitionDelay: '.3s',
    color: 'rgba(244, 233, 217, 1)',
    // background: 'radial-gradient(rgba(42, 81, 61, 1), rgba(42, 81, 61, 1))',
    background: 'radial-gradient(rgba(43, 82, 61, 1), rgba(43, 82, 61, 1))',
    // minWidth: '0',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '250px',
    position: 'relative',

    '&::before': {
      display: 'block',
      color: 'rgba(244, 233, 217, 1)',
      fontSize: '16px',
      position: 'absolute',
      opacity: 0,
      transition: 'all 1.5s ease-in-out',
      transitionDelay: '.5s'
    }
    // padding: '60px 50px'

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
  '> span': styleUnderConstruction,

  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  background: 'black',
  animationName: brightnessLanding,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  margin: '0 auto',
  // border: '50px solid black',

  '@media only screen and (max-width: 1024px)': {
    border: '20px solid red'

  }
}
