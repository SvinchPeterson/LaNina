'use strict'

import { scaleDown, scaleUp, fadeUp2, filter, letterSpacing, brightness } from '../../animations'

import COVER_JPG from '../../assets/images/cover.jpg'

export const styleBanner = {
  height: `100%`,
  overflowY: 'hidden',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8), rgba(0, 0, 0, .9)), url(' + COVER_JPG + ')',
  filter: 'brightness(85%) grayscale(30%)',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  animationName: brightness,
  animationDuration: '1.5s',
  animationTimingFunction: 'ease-in-out',
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
  background: 'rgba(206, 197, 177, 1)',
  oveflowX: 'hidden',
  overflowY: 'auto',
  position: 'relative'
}
