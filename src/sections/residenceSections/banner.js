'use strict'

import { Banner } from '../../components'

import { bannerTitle, bannerBackground, bannerBackground2, bannerh1, opacity } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/residence/sololaki/residencee.jpg'

const props = {
  align: 'flex-end center',
  backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
  ':before': { background: 'radial-gradient(rgba(1, 57, 57, .5), rgba(0, 0, 0, .75), rgba(0, 0, 0, .95))' },
  style: { animationName: bannerBackground },
  '@maxTabletM': {style: { animationName: bannerBackground2 }},

  title: {
    transform: 'translateY(-30px) scale(1)',
    padding: '- - D -',
    gap: 'Y',
    style: {
      animationName: bannerTitle,
      animationDuration: '3s',
      AnimationTimingFunction: 'ease-in-out'
    },
    h1: {
      fontSize: 'F',
      letterSpacing: `${-2.5 / 40}em`,
      animationDuration: '2s',
      AnimationTimingFunction: 'ease-in-out',
      lineHeight:`${22 / 40}em`,
      position: 'relative',
      style: { animationName: bannerh1 }
    },
    h5: {
      fontSize: `${12 / 16}em`,
      letterSpacing: `${16 / 12}em`,
      margin: 'Z2 - - -',
      padding: 'Y2 - - Z2',
      border: 'solid, orange',
      borderWidth: '.55px 0 0 0',
    }
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
