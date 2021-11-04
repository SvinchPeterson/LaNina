'use strict'

import { zoomOut, fadeUp2, filter } from '../../animations'

import COVER_JPG from '../../assets/images/cover.jpg'

export const styleBannerBackground = {
  width: '100%',
  height: `${800 / 16}em`,
  overflow: 'hidden',
  // marginTop: '67px',
  position: 'relative',

  '> div:first-child': {
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(65, 62, 58, .6), rgba(86 , 80, 67, .8), rgba(132, 130, 115, .8), rgba(0, 0, 0, .8)), url(' + COVER_JPG + ')',
    filter: 'brightness(30%)',
    backgroundSize: 'cover',
    animationName: zoomOut,
    animationDuration: '2s'
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
  '> h4': {
    color: 'rgba(243, 231, 219, 1)',
    // margin: 0,
    animationName: fadeUp2,
    animationDuration: '2s'
  },
  '> span': {
    color: 'rgba(243, 231, 219, .85)',
    fontWeight: '500',
    letterSpacing: '6px',
    animationName: fadeUp2,
    animationDuration: '1s',
    marginTop: '-5px',
    textTransform: 'uppercase'

    // animationDelay: '1s'
  },

  '> p': {
    fontFamily: 'Avenir Next',
    color: 'rgba(243, 231, 219, 1)',
    animationName: fadeUp2,
    animationDuration: '2s'
    // animationDelay: '2s'
  }

}

export default {
  width: '100%',
  height: '100%',
  background: 'rgba(206, 197, 177, 1)',
  overflowY: 'auto'
}
