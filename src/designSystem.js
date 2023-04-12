'use strict'

const FONTS_PATH = './assets/fonts'

export const FONT = {
  helveticaNeue: [
    { url: FONTS_PATH + '/HelveticaNeue-UltraLight.woff2', fontWeight: 100 },
    { url: FONTS_PATH + '/HelveticaNeue-Normal.woff2', fontWeight: 400},
    { url: FONTS_PATH + '/HelveticaNeue-Bold.woff2', fontWeight: 700 },

    { url: FONTS_PATH + '/HelveticaNeue-UltraLight.ttf', fontWeight: 100 },
    { url: FONTS_PATH + '/HelveticaNeue-Normal.ttf', fontWeight: 400 },
    { url: FONTS_PATH + '/HelveticaNeue-Bold.ttf', fontWeight: 700 },

    { url: FONTS_PATH + '/HelveticaNeue-UltraLight.eot', fontWeight: 100 },
    { url: FONTS_PATH + '/HelveticaNeue-normal.eot', fontWeight: 400 },
    { url: FONTS_PATH + '/HelveticaNeue-Bold.eot', fontWeight: 700 }
  ]
}


export const FONT_FAMILY = {
  helveticaNeue: {
    isDefault: true,
    value: ['"Helvetica Neue"'],
    type: 'serif'
  }
}

export const COLORS = {
  black: 'rgba(0, 0, 0, 1)',
  white: 'rgba(245, 245, 245, 1)',
  cream: 'rgba(255, 249, 237, 1)',
  orange3: 'rgba(255, 206, 168, 1)',
  backgroundBlue2: 'rgba(233, 250, 255, 1)',

  naviGreen: 'rgba(1, 57, 57, 1)',
  naviGreenDark: 'rgba(0, 49, 49, 1)',
  naviGreenLight: 'rgba(0, 70, 70, 1)',

  naviBlue: 'rgba(0, 47, 57, 1)',
  naviBlueLight: 'rgba(1, 59, 71, 1)',
  naviBlueLight2: 'rgba(2, 64, 77, 1)'
}

export const GRADIENTS = {
  gold: 'linear-gradient(rgba(147, 119, 79, 1), rgba(242, 205, 128, 1))',
  blackGradient: 'radial-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .8))',
  green: 'radial-gradient(rgba(42, 81, 61, .75),rgba(42, 81, 61, .85))',
  radial: 'radial-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
  blueGradient: 'radial-gradient(rgba(30, 40, 49, .8), rgba(30, 40, 49, .83), rgba(30, 40, 49, .85), rgba(30, 40, 49, .95), rgba(30, 40, 49, 8), rgba(30, 40, 49, 1))'
}

export const MEDIA = {
  // min - max width
  minScreenL: '(min-width: 1921px)',
  minScreenD: '(min-width: 1681px)',
  minScreenS: '(min-width: 1441px)',
  minTabletL: '(min-width: 1367px)',
  minTabletM: '(min-width: 1281px)',
  minTabletS: '(min-width: 1025px)',
  minMobileL: '(min-width: 769px)',
  minMobileM: '(min-width: 561px)',
  minMobileS: '(min-width: 481px)',
  minMobileXS: '(min-width: 351px)',

  maxScreenL: '(max-width: 1920px)',
  maxScreenD: '(max-width: 1680px)',
  maxScreenS: '(max-width: 1440px)',
  maxTabletL: '(max-width: 1366px)',
  maxTabletM: '(max-width: 1280px)',
  maxTabletO: '(max-width: 1150px)',
  maxTabletS: '(max-width: 1024px)',
  maxMobileL: '(max-width: 768px)',
  maxMobileM: '(max-width: 560px)',
  maxMobileS: '(max-width: 480px)',
  maxMobileO: '(max-width: 400px)',
  maxMobileXS: '(max-width: 350px)',


  // min - max height
  minHeightL: '(min-height: 1367px)',
  minHeightM: '(min-height: 1025px)',
  minHeightN: '(min-height: 769px)',
  minHeightS: '(min-height: 671px)',
  minHeightXS: '(min-height: 481px)',

  maxHeightL: '(max-height: 1366px)',
  maxHeightM: '(max-height: 1024px)',
  maxHeightN: '(max-height: 768px)',
  maxHeightS: '(max-height: 670px)',
  maxHeightXS: '(max-height: 480px)',


  light: '(prefers-color-scheme: light)'
}

export default {
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
}
