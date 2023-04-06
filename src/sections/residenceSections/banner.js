'use strict'

import { Banner } from '../../components'

import { bannerTitle, bannerBackground, bannerBackground2, bannerh1 } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/residence/sololaki/residencee.jpg'

const props = {
  align: 'flex-end center',
  backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
  ':before': { background: 'radial-gradient(rgba(1, 57, 57, .5), rgba(0, 0, 0, .55), rgba(0, 0, 0, .9))' },
  style: {
    animationName: bannerBackground,
    '@media only screen and (max-width: 1280px)': { animationName: bannerBackground2 }
  },

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
      fontSize: 'E',
      letterSpacing: `${-2.5 / 33}em`,
      animationDuration: '2s',
      AnimationTimingFunction: 'ease-in-out',
      lineHeight:`${22 / 33}em`,
      padding: '- - X2 -',
      border: 'solid, orange3 .9',
      borderWidth: '0 0 .5px 0',
      style: { animationName: bannerh1 }
    },
    h5: {
      fontSize: `${12 / 16}em`,
      letterSpacing: `${18 / 12}em`,
      margin: '- - - B'
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
