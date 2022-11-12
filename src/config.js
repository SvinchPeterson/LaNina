'use strict'

import { init } from 'smbls'

import HelveticaUltraLightWoff2 from './assets/fonts/HelveticaNeue-UltraLight.woff2'
import HelveticaNormalWoff2 from './assets/fonts/HelveticaNeue-Normal.woff2'
import HelveticaMediumWoff2 from './assets/fonts/HelveticaNeue-Medium.woff2'
import HelveticaBoldWoff2 from './assets/fonts/HelveticaNeue-Bold.woff2'

import HelveticaUltraLightTtf from './assets/fonts/HelveticaNeue-UltraLight.ttf'
import HelveticaNormalTtf from './assets/fonts/HelveticaNeue-Normal.ttf'
import HelveticaMediumTtf from './assets/fonts/HelveticaNeue-Medium.ttf'
import HelveticaBoldTtf from './assets/fonts/HelveticaNeue-Bold.ttf'

import HelveticaUltraLightEot from './assets/fonts/HelveticaNeue-UltraLight.eot'
import HelveticaNormalEot from './assets/fonts/HelveticaNeue-normal.eot'
import HelveticaMediumEot from './assets/fonts/HelveticaNeue-Medium.eot'
import HelveticaBoldEot from './assets/fonts/HelveticaNeue-Bold.eot'

export const FONT = {
  helveticaNeue: [
    {
      url: HelveticaUltraLightWoff2,
      fontWeight: 100
    },
    {
      url: HelveticaNormalWoff2,
      fontWeight: 400
    },
    {
      url: HelveticaMediumWoff2,
      fontWeight: 500
    },
    {
      url: HelveticaBoldWoff2,
      fontWeight: 700
    },

    {
      url: HelveticaUltraLightTtf,
      fontWeight: 100
    },
    {
      url: HelveticaNormalTtf,
      fontWeight: 400
    },
    {
      url: HelveticaMediumTtf,
      fontWeight: 500
    },
    {
      url: HelveticaBoldTtf,
      fontWeight: 700
    },

    {
      url: HelveticaUltraLightEot,
      fontWeight: 100
    },
    {
      url: HelveticaNormalEot,
      fontWeight: 400
    },
    {
      url: HelveticaMediumEot,
      fontWeight: 500
    },
    {
      url: HelveticaBoldEot,
      fontWeight: 700
    }
  ]
}

export const FONT_FAMILY = {
  helveticaNeue: {
    isDefault: true,
    value: ['"HelveticaNeue"'],
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
  gold: 'rgba(220, 187, 140, 1)',
  white: 'rgba(245, 245, 245, 1)',
  seaBlue: 'rgba(30, 98, 123, 1)',
  blue2: '#3A5A75',
  blue3: 'rgba(30, 40, 49, 1)',
  backgroundBlue: 'rgba(208, 224, 228, 1)',
  backgroundBlue2: 'rgba(233, 250, 255, 1)',
  gray: '#454B4E',
  grey: '#5A5D5E'
}

export const GRADIENTS = {
  gold: 'linear-gradient(rgba(147, 119, 79, 1), rgba(242, 205, 128, 1))',
  blackGradient: 'radial-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .8))',
  green: 'radial-gradient(rgba(42, 81, 61, .75),rgba(42, 81, 61, .85))',
  radial: 'radial-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
  blueGradient: 'radial-gradient(rgba(30, 40, 49, .8), rgba(30, 40, 49, .83), rgba(30, 40, 49, .85), rgba(30, 40, 49, .95), rgba(30, 40, 49, 8), rgba(30, 40, 49, 1))'
}

// export const THEMES = {
//   primary: {
//     color: 'cream 0.65',
//     state: {
//       hover: {
//         color: 'cream 0.85'
//       }
//     }
//   },
//   link: {}
// }

export const MEDIA = {
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

export default init({
  color: COLORS,
  gradient: GRADIENTS,
  font: FONT,
  typography: {},
  spacing: {
    range: [-6, 20]
  },
  font_family: FONT_FAMILY,
  media: MEDIA,
  reset: {
    html: {
      width: '100%',
      height: '100%',
      fontSize: '16px',
      display: 'flex',
      position: 'relative',
      top: 0,
      left: 0,
      overflow: 'hidden',
      boxSizing: 'border-box',
      transform: 'none',
      background: 'black',
      a: { color: 'white' }
    },
    body: {
      width: '100%'
    },
    h4: { margin: 0 },
    h1: { margin: 0 },
    h3: { margin: 0 },
    h5: { margin: 0 },
    p: { margin: 0 },
    h6: { margin: 0 }
  }
})
