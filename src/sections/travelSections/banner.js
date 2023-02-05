'use strict'

import { Banner } from '../../components'

import LAKE_JPG from '../../assets/images/travel/lake.jpg'

import { travelBannerH5, positionOpacity, bannerH1 } from '../../animations'

const props = {
  backgroundImage: 'url(' + LAKE_JPG + ')',
  style: { animationName: positionOpacity },
  ':before': { background: 'radial-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6))' },

  title: {
    gap: 'A2',
    h1: {
      textTransform: 'capitalize',
      fontWeight: '100',
      letterSpacing: '0px',
      fontSize: `${130 / 16}em`,
      height: `${145 / 130}em`,
      overflow: 'hidden',
      style: {
        animationName: bannerH1,
        animationDuration: '2s',
        animationTimingFunction: 'ease-in-out'
      }
    },

    h5: {
      letterSpacing: `${7.8 / 16}em`,
      color: 'cream2 .85',
      margin: '-Z2 -Y2 - -0.5px',
      style: { animationName: travelBannerH5 }
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
