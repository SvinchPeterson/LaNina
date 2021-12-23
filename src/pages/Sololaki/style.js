'use strict'

import { zoomOut, fadeUp2, filter, spacing } from '../../animations'

import COVER_JPG from '../../assets/images/cover.jpg'

export const styleBannerBackground = {
  width: '100%',
  height: `${800 / 16}em`,
  // overflow: 'hidden',
  // marginTop: '67px',
  position: 'relative',
  overflowY: 'hidden',

  '> div:first-child': {
    width: '100%',
    height: '100%',
    // backgroundImage: 'linear-gradient(rgba(65, 62, 58, .6), rgba(86 , 80, 67, .8), rgba(132, 130, 115, .8), rgba(0, 0, 0, .8)), url(' + COVER_JPG + ')',
    backgroundImage: 'linear-gradient(rgba(98, 73, 62, .9), rgba(0, 0, 0, .4), rgba(98, 73, 62, .9)), url(' + COVER_JPG + ')',
    filter: 'brightness(30%) grayscale(70%)',
    backgroundSize: 'cover',
    animationName: zoomOut,
    animationDuration: '2s',
    AnimationTimingFunction: 'ease-in-out'
    // backgroundAttachment: 'fixed'
  }
}

export const styleBanner = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  animationName: filter,
  animationDuration: '2s',
  display: 'flex',
  justifyContent: 'center',
  '> *': {
    animationName: fadeUp2,
    animationDuration: '2s',
    AnimationTimingFunction: 'ease-in-out'
  },
  '> span': {
    // marginTop: '-5px',
    textTransform: 'uppercase',
    animationName: spacing,
    animationDuration: '2s'
  },
  '> p': {
    fontFamily: 'Avenir Next',
    letterSpacing: '2px',
    color: 'rgba(243, 231, 219, .4)'
  }

}

export default {
  width: '100%',
  height: '100%',
  background: 'rgba(206, 197, 177, 1)',
  oveflowX: 'hidden',
  overflowY: 'auto'
}
