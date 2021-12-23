'use strict'

import { backgroundPosition, opacity, scaleUp, letterSpacing, brightness, scale } from '../../animations'
import COVER_JPG from '../../assets/images/cover.jpg'

export const stylePageLink = {
  flex: '.5',
  backgroundColor: '#A52A2A',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .95)), url(' + COVER_JPG + ')',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  display: 'block',
  textDecoration: 'none',
  transition: 'all 1s ease-in-out',
  filter: 'grayscale(80%)',
  // borderTop: '30px solid rgba(0, 0, 0, 0)',
  // borderBottom: '30px solid rgba(0, 0, 0, 0)',
  // borderBottom: '30px solid rgba(0, 0, 0, 0)',

  '&:hover': {
    flex: '3',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .6)), url(' + COVER_JPG + ')',
    textDecoration: 'none',
    color: 'black',
    boxShadow: 'inset 0px 0px 5px 1px rgba(0, 0, 0, .8)',
    backgroundPosition: 'center left',
    filter: 'brightness(100%) grayscale(50%)'
    // borderTop: '30px solid rgba(0, 0, 0, 1)',
    // borderBottom: '30px solid rgba(0, 0, 0, 1)'
    // borderTop: '10px solid rgba(0, 0, 0, 1)'
    // borderBottom: '45px solid black'
  },
  '&:visited': {
    textDecoration: 'none'
  },
  '&:hover + h6': {
    color: 'rgba(243, 231, 219, .85)',
    // fontWeight: 'bold',
    letterSpacing: '7px',
    transform: 'scale(1.1)'
  }
}

const styleUnderConstruction = {
  fontFamily: 'Avenir Next',
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  letterSpacing: '4px',
  color: 'rgba(165, 125, 2, 1)'
}

const styleBanner = {
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animationName: opacity,
  animationDuration: '4s',
  AnimationTimingFunction: 'ease-in-out',
  transition: 'all .6s ease-in-out',
  transitionDelay: '0s',

  '> div': {
    h4: {
      animationName: scaleUp,
      animationDuration: '1s'
    },
    span: {
      animationName: letterSpacing,
      animationDuration: '1.2s',
      animationDelay: '.2s'
    }
  }
}

export default {
  minWidth: '100%',
  minHeight: '100%',
  boxSizing: 'border-box',
  flex: 1,
  justifyContent: 'space-between',
  border: '1px solid black',
  animationName: brightness,
  animationDuration: '2s',
  position: 'relative',

  '> div': styleBanner,
  '> span': styleUnderConstruction

}
