'use strict'

import { filter } from '../../animations'
import COVER_JPG from '../../assets/images/cover.jpg'

export const stylePageLink = {
  position: 'relative',
  flex: '.5',
  overflow: 'hidden',
  transition: 'all 1s ease-in-out',
  animationName: filter,
  animationDuration: '6s',
  '&:hover': {
    flex: '2.5',
    '> div': {
      transform: 'scale(1.1)',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .7)), url(' + COVER_JPG + ')'
    }
  },
  '> div': {
    flex: 1,
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .95)), url(' + COVER_JPG + ')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    transition: 'all 1s ease-out',
    transitionDelay: '.05s'
  }
}
export default {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  flex: 1
}
