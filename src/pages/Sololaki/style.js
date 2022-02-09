'use strict'

import { scaleDown, scaleUp, fadeUp2, filter, letterSpacing, brightnessScale } from '../../animations'

import COVER_JPG from '../../assets/images/balcony.jpg'

import GREEN_LANINA_JPG from '../../assets/images/greenLanina.jpg'

export const styleBanner = {
  height: `100%`,
  overflowY: 'hidden',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, .85), rgba(0, 0, 0, .65), rgba(0, 0, 0, .85)), url(' + COVER_JPG + ')',
  filter: 'brightness(85%) grayscale(50%)',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  // animationName: brightnessScale,
  // animationDuration: '4s',
  // animationTimingFunction: 'linear',
  backgroundPosition: 'center center',
  // transform: 'scale(.9)',
  backgroundRepeat: 'no-repeat',
  '> div': {
    animationName: fadeUp2,
    animationDuration: '1.7s',
    AnimationTimingFunction: 'ease-in-out'
    // animationDelay: '.3s'
  },
  '> div > span': {
    marginTop: '5px',
    textTransform: 'uppercase',
    animationName: letterSpacing,
    animationDuration: '1.7s',
    animationTiminFunction: 'ease-in-out'
    // animationDelay: '.3s'
  },
  '> p': {
    animationName: fadeUp2,
    animationDuration: '2s',
    AnimationTimingFunction: 'ease-in-out'
    // animationDelay: '.3s'
  }
}

export default {
  flex: 1,
  // background: 'linear-gradient(rgba(246, 239, 225, 1),rgba(222, 219, 214, 1), rgba(255, 249, 235, 1))',
  // background: 'rgba(246, 239, 225, 1)',
  // background: 'rgba(206, 197, 177, 1)',
  // background: 'linear-gradient(rgba(255, 249, 235, 1), rgba(255, 249, 235, 1))',
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'relative',
  background: 'rgba(243, 231, 219, 1)',
  scrollBehavior: 'smooth'
}
