'use strict'

import { Banner } from '../../components'

import { bannerTitle, bannerH5 } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/residence/sololaki/residencee.jpg'

const props = {
  backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
  ':before': { background: 'radial-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .85))' },

  title: {
    style: {
      animationName: bannerTitle,
      animationDuration: '3s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    },

    h5: {
      style: {
        animationName: bannerH5,
        animationDuration: '2s',
        animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
      }
    }
  }
}

export const banner = {
  tag: 'section',
  extend: Banner,
  attr: { id: 'banner' },
  props,

  title: {
    style: {

    },
    h1: { text: 'BB Residence' },
    h5: { text: 'sololaki' }
  }
}
