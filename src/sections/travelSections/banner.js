'use strict'

import { Banner } from '../../components'

import LAKE_JPG from '../../assets/images/travel/lake.jpg'

import { travelBannerH5, positionOpacity, bannerH1 } from '../../animations'

const props = {
  backgroundImage: 'url(' + LAKE_JPG + ')',
  background: 'radial-gradient(rgba(0, 47, 57, 1), rgba(0, 47, 57, 1))',
  style: { animationName: positionOpacity },

  ':before': { background: 'radial-gradient(rgba(0, 47, 57, .5), rgba(0, 47, 57, 1))' },

  title: {
    h1: {
      overflow: 'hidden',
      height: `${72 / 48}em`,
      style: { animationName: bannerH1 },
      animationDuration: '2.5s',
      AnimationTimingFunction: 'ease'
    },
    h5: {
      fontSize: `${12 / 16}em`,
      letterSpacing: `${10 / 12}em`,
      style: { animationName: travelBannerH5 },
      animationDuration: '2s',
      AnimationTimingFunction: 'ease'
    }
  }

}

export const banner = {
  extend: Banner,
  props,

  title: {
    h1: { text: 'BB travel' },
    h5: { text: 'Make your trip extraordinary' }
  }
}
