'use strict'

import { Banner } from '../../components'

import LAKE_JPG from '../../assets/images/travel/lake.jpg'
import LAKE_TABLET_JPG from '../../assets/images/travel/lake-tablet.jpg'

import { positionOpacity, bannerBackground2 } from '../../animations'

const props = {
  backgroundImage: 'url(' + LAKE_JPG + ')',
  style: { animationName: positionOpacity },
  '@maxTabletM': {
    backgroundImage: 'url(' + LAKE_TABLET_JPG + ')',
    style: { animationName: bannerBackground2 }
  },

  ':before': {
    background: 'radial-gradient(rgba(0, 47, 57, 0.65), rgba(0, 47, 57, 0.85))'
  },
}

export const banner = {
  extend: Banner,
  props,

  heading: {
    title: { text: 'BB travel' },
    subTitle: { text: 'Make your trip extraordinary' }
  }
}
