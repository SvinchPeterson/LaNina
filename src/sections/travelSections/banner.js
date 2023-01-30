'use strict'
import { Flex } from 'smbls'

import { Banner } from '../../components'

import LAKE_JPG from '../../assets/images/travel/lake.jpg'

import { travelBannerH5, deopacity, positionOpacity, bannerH1, bannerTitle } from '../../animations'

const props = {
  backgroundImage: 'url(' + LAKE_JPG + ')',
  style: {
    animationName: positionOpacity,
    animationDuration: '3s',
    '@media only screen and (max-width: 1280px)': {
      backgroundAttachment: 'initial'
    }
  },
  ':before': { background: 'radial-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6))' },

  title: {
    gap: 'A2',
    style: {
      animationName: bannerTitle,
      animationDuration: '3s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    },
    h1: {
      textTransform: 'capitalize',
      fontWeight: '100',
      letterSpacing: '0px',
      fontSize: `${130 / 16}em`,
      height: `${140 / 130}em`,
      overflow: 'hidden',
      style: {
        animationName: bannerH1,
        animationDuration: '2s',
        animationTimingFunction: 'ease-in-out'
      }
    },
    h5: {
      letterSpacing: '7.8px',
      color: 'cream2 .85',
      margin: '-Z2 -Y2 - -0.5px',
      style: {
        animationName: travelBannerH5,
        animationDuration: '2s',
        animationTimingFunction: 'ease-in-out'
      }
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
