'use strict'

import { zoomOut } from '../../animations'

import COVER_JPG from '../../assets/images/cover.jpg'

export const styleBannerBackground = {
  width: '100%',
  height: `${800 / 16}em`,
  overflow: 'hidden',
  // marginTop: '67px',

  '> div': {
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(65, 62, 58, 1), rgba(86 , 80, 67, .5), rgba(132, 130, 115, .5), rgba(0, 0, 0, .8)), url(' + COVER_JPG + ')',
    filter: 'brightness(30%)',
    backgroundSize: 'cover',
    animationName: zoomOut,
    animationDuration: '2s'
  }
}

export default {
  width: '100%',
  height: '100%',
  background: 'rgba(206, 197, 177, 1)',
  overflowY: 'auto'
}
