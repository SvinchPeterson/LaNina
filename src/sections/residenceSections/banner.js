'use strict'

import { Banner } from '../../components'

import { bannerBackground, bannerBackground2 } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/residence/sololaki/residencee.jpg'

const props = {
  backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
  ':before': {
     background: 'radial-gradient(rgba(1, 57, 57, .5), rgba(0, 0, 0, .95))'
    },
  style: { animationName: bannerBackground },
  '@maxTabletM': {style: { animationName: bannerBackground2 }},
}

export const banner = {
  tag: 'section',
  extend: Banner,
  attr: { id: 'banner' },
  props,

  heading: {
    title: { text: 'BB residence' },
    subTitle: { text: 'sololaki'}
  }
}
