'use strict'

import { scaleDown, scaleUp, fadeUp2, filter, letterSpacing, brightnessScale } from '../../animations'

import COVER_JPG from '../../assets/images/balcony.jpg'

import GREEN_LANINA_JPG from '../../assets/images/greenLanina.jpg'

export const styleBanner = {
  width: `100%`,
  height: `100%`,
  overflow: 'hidden',
  boxSizing: 'border-box',
  position: 'relative',
  '> span': {
    minWidth: '100%',
    flex: 1,
    backgroundImage: 'radial-gradient(rgba(243, 231, 219, .2), rgba(243, 231, 219, .2)), url(' + COVER_JPG + ')',
    filter: 'brightness(15%) grayscale(50%)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
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
      opacity: 0.75
    },
    '> span': {
      textTransform: 'uppercase',
      opacity: '.55',
      letterSpacing: '10px'
    },
    '> p': {
      fontFamily: 'Avenir Next',
      opacity: '.45',
      letterSpacing: '2px'
    }
  }
}

export default {
  flex: 1,
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'relative',
  background: 'rgba(243, 231, 219, 1)',
  scrollBehavior: 'smooth',

  '> div': styleBanner
}
