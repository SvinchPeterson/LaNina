'use strict'

import { set } from '@symbo.ls/scratch'

import DejavuBold from './assets/fonts/DejaVuSans-Bold.woff2'
import Dejavu from './assets/fonts/DejaVuSans.woff2'
import Geo from './assets/fonts/BPGExtraSquareMtavruli.woff2'

export const FONT = {
  Dejavu: [{
    url: Dejavu,
    fontWeight: 400
  }, {
    url: DejavuBold,
    fontWeight: 700
  }],
  Geo: [{
    url: Geo,
    fontWeight: 400
  }]
}

export const FONT_FAMILY = {
  Dejavu: {
    default: true,
    value: ['"Dejavu"'],
    type: 'serif'
  },
  Geo: {
    value: ['"Geo"'],
    type: 'serif'
  }
}

export const COLORS = {
  cream: 'rgba(244, 233, 217, 1)',
  cream2: 'rgba(248, 241, 227, 1)',
  orange: 'rgba(168, 98, 63, 1)',
  orange2: '#EC8551',
  orange3: '#FFCEA8',
  green: 'rgba(42, 81, 61, 1)',
  green2: 'rgba(60,84, 72, 1)',
  black: 'rgba(0, 0, 0, 1)',
  gold: 'rgba(220, 187, 140, 1)'
}

export const GRADIENTS = {
  gold: 'linear-gradient(rgba(147, 119, 79, 1), rgba(242, 205, 128, 1))',
  blackGradient: 'radial-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .8))'
}

export const THEMES = {
  primary: {
    color: 'cream 0.65',
    state: {
      hover: {
        color: 'cream 0.85'
      }
    }
  },
  link: {}
}

export const RESPONSIVE = {
  screenL: '(max-width: 1920px)',
  screenD: '(max-width: 1680px)',
  screenS: '(max-width: 1440px)',
  tabletL: '(max-width: 1366px)',
  tabletM: '(max-width: 1280px)',
  tabletS: '(max-width: 1024px)',
  mobileL: '(max-width: 768px)',
  mobileM: '(max-width: 560px)',
  mobileS: '(max-width: 480px)',
  mobileXS: '(max-width: 350px)',

  light: '(prefers-color-scheme: light)'
}

export default set({
  color: COLORS,
  gradient: GRADIENTS,
  theme: THEMES,
  font: FONT,
  font_family: FONT_FAMILY,
  responsive: RESPONSIVE
})
