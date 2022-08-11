'use strict'

import { Box, Link, Img } from 'smbls'

const icon = {
  proto: Box,
  props: {
    padding: 'B',
    position: 'absolute',
    left: '0',
    top: '0',
    '@tabletL': {
      padding: 'B2'
    },
    '@mobileL': { padding: 'A2' },
    '@mobileS': { padding: 'Z2' },
    css: { zIndex: '20' }
  },

  img: {
    proto: [Img, Box],
    props: {
      boxSize: 'A1 A1',
      '@tabletL': { boxSize: 'B B' },
      '@mobileL': { boxSize: 'A1 A1' },
      css: {
        // opacity: '.85',
        // '@media only screen and (max-width: 1366px)': { opacity: 1 }
      }
    }
  }
}

const tabParagraph = {
  props: {
    color: 'cream2',
    padding: `0 A2`,
    width: 'H',
    fontWeight: '400',
    css: {
      zIndex: 10,
      opacity: 0,
      boxSizing: 'border-box',
      pointerEvents: 'none',
      transition: 'opacity .3s ease-in-out',
      transitionDelay: '.4s',
      textAlign: 'center'
    }
  },

  class: {
    show: (element, state) => state.activeTab === element.parent.parent.key ? { opacity: 1 } : {}
  }
}

export const props = {
  height: 'G1',
  padding: 'B',
  round: 'V',
  '@tabletL': {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0'
  },
  css: {
    // overflow: 'hidden',
    flex: 1,
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'all .7s ease-in-out',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
    textDecoration: 'none',
    position: 'relative',
    backdropFilter: 'blur(2px)',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, .15)',
    '&:hover': {
      '@media only screen and (min-width: 1366px)': {
        flex: 5.5,
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
        '> div > div': { opacity: 1 },
        ':before': { opacity: 1 },
        img: { opacity: 1 }
      }
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: 0,
      background: 'linear-gradient(rgba(60,84, 72, .5), rgba(60,84, 72, 1))',
      // background: 'red',
      opacity: '.4',
      transition: 'opacity .7s ease-in-out',
      cursor: 'pointer',
      '@media only screen and (max-width: 1366px)': {
        padding: '20px'
      }
    }

  },

  title: {
    text: 'ballerina',
    color: 'cream2',
    position: 'absolute',
    right: '-A1',
    bottom: 'B',
    fontWeight: '900',
    fontSize: 'A',
    '@tabletL': {
      right: 'C',
      bottom: 'C',
      fontSize: `${22 / 16}em`
    },
    css: {
      textTransform: 'uppercase',
      textShadow: '.5px .5px 1px black',
      whiteSpace: 'nowrap'
    }
  },

  content: {
    position: 'absolute',
    boxSize: '100% 100%',
    top: '0',
    left: '0',
    flexFlow: 'column',
    flexAlign: 'center center',
    css: { overflow: 'hidden' }
  }
}

export const RoomTab = {
  proto: Link,
  props,

  on: {
    click: (event, element, state) => {
      state.update({ activeTab: element.key, back: true })
    }
  },

  title: { tag: 'caption' },

  content: {
    paragraph: { proto: tabParagraph },
    icon: { proto: icon }
  }
}
