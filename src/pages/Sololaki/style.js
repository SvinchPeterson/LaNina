'use strict'

import { scaleDown, scaleUp, fadeUp2, filter, letterSpacing, brightnessScale } from '../../animations'

import COVER_JPG from '../../assets/images/cover.jpg'

export const styleBanner = {
  height: `100%`,
  overflowY: 'hidden',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8), rgba(0, 0, 0, .9)), url(' + COVER_JPG + ')',
  filter: 'brightness(85%) grayscale(30%)',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  animationName: brightnessScale,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  backgroundPosition: 'bottom right',
  transform: 'scale(1)',
  '> div': {
    animationName: fadeUp2,
    animationDuration: '.6s',
    AnimationTimingFunction: 'ease-in-out'
  },
  '> div > span': {
    marginTop: '5px',
    textTransform: 'uppercase',
    animationName: letterSpacing,
    animationDuration: '.9s',
    animationTiminFunction: 'ease-in-out'
  },
  '> p': {
    animationName: fadeUp2,
    animationDuration: '1.5s',
    AnimationTimingFunction: 'ease-in-out'
  }
}

export default {
  flex: 1,
  // background: 'linear-gradient(rgba(246, 239, 225, 1),rgba(222, 219, 214, 1), rgba(255, 249, 235, 1))',
  // background: 'rgba(246, 239, 225, 1)',
  // background: 'rgba(206, 197, 177, 1)',
  background: 'linear-gradient(rgba(255, 249, 235, 1), rgba(255, 249, 235, 1))',
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'relative'
}
