'use strict'

import { Banner } from '../../components'

import { bannerTitle, bannerBackground, bannerBackground2, bannerh1 } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/residence/sololaki/residencee.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/residence/sololaki/residence-tablet.jpg'
import SOLOLAKI_MOBILE_JPG from '../../assets/images/residence/sololaki/residence-mobile.jpg'

const props = {
  backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
  ':before': { background: 'radial-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .9))' },
  '@tabletM': { backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')' },
  '@mobileM': { backgroundImage: 'url(' +  SOLOLAKI_MOBILE_JPG + ')' },

  style: {
    animationName: bannerBackground,
    '@media only screen and (max-width: 1280px)': { animationName: bannerBackground2 }
  },

  title: {
    transform: 'translateY(-30px) scale(1)',
    style: {
      animationName: bannerTitle,
      animationDuration: '3s',
      AnimationTimingFunction: 'ease-in-out'
    },
    h1: {
      animationDuration: '2s',
      AnimationTimingFunction: 'ease-in-out',
      style: { animationName: bannerh1 }
    },
    h5: { fontSize: 'Z', letterSpacing: `${10 / 13}em` }
  }
}

export const banner = {
  tag: 'section',
  extend: Banner,
  attr: { id: 'banner' },
  props,

  title: {
    h1: { text: 'BB Residence' },
    h5: { text: 'sololaki' }
  }
}
