'use strict'

import { Banner } from '../../components'

import LAKE_JPG from '../../assets/images/travel/lake.jpg'
import LAKE_TABLET_JPG from '../../assets/images/travel/lake-tablet.jpg'

import { travelBannerH5, positionOpacity, bannerH1, bannerBackground2 } from '../../animations'

const props = {
  align: 'center center',
  backgroundImage: 'url(' + LAKE_JPG + ')',
  background: 'radial-gradient(rgba(0, 47, 57, 1), rgba(0, 47, 57, 1))',
  style: { animationName: positionOpacity },
  '@maxTabletM': {
    backgroundImage: 'url(' + LAKE_TABLET_JPG + ')',
    style: { animationName: bannerBackground2 }
  },

  ':before': { background: 'radial-gradient(rgba(0, 47, 57, .5), rgba(0, 47, 57, .85))' },

  title: {
    style: { '@media only screen and (min-width: 561px) and (max-width: 1280px)': { marginTop: `${50 / 16}em` } },
    h1: {
      overflow: 'hidden',
      height: `${72 / 48}em`,
      letterSpacing: `${-3 / 48}em`,
      style: { animationName: bannerH1 },
      animationDuration: '2s',
      AnimationTimingFunction: 'ease'
    },
    h5: {
      fontSize: `${11 / 16}em`,
      letterSpacing: `${10 / 11}em`,
      style: { animationName: travelBannerH5 },
      animationDuration: '2s',
      AnimationTimingFunction: 'ease',
      position: 'absolute',
      bottom: 'E2',
      ':after': {
        content: '""',
        boxSize: '1px E',
        background: 'orange',
        position: 'absolute',
        bottom: '-A2',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      '@maxMobileM': {
        maxWidth: 'G2',
        textAlign: 'center',
        lineHeight: `${20 / 12}em`
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
