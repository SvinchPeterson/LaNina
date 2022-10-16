'use strict'

import { Box, Link, Img } from 'smbls'

const icon = {
  extend: Box,
  props: {
    padding: 'B',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: '20'
  },

  img: {
    extend: [Img, Box],
    props: {
      boxSize: 'A1 A1',
      '@tabletL': { boxSize: 'B1 B1' },
      '@mobileL': { boxSize: 'A2 A2' }
    }
  }
}

const tabParagraph = {
  props: {
    color: 'cream2',
    padding: `0 A2`,
    width: 'H',
    fontWeight: '400',
    '@tabletL': {
      position: 'absolute',
      top: '-D2'
    },
    '@mobileS': {
      fontSize: `${14.5 / 16}em`,
      top: '-D1'
    },
    style: {
      zIndex: 10,
      opacity: 0,
      boxSizing: 'border-box',
      pointerEvents: 'none',
      transition: 'opacity .3s ease-in-out',
      transitionDelay: '.4s',
      textAlign: 'center',
      '@media only screen and (max-width: 1366px)': {
        opacity: 1
      }
    }
  },

  class: {
    show: (element, state) => state.activeTab === element.parent.parent.key ? { opacity: 1 } : {}
  }
}

export const props = {
  height: 'G1',
  padding: 'B',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  '@tabletL': {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    round: 'V2'
  },

  style: {
    flex: 1,
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'all .7s ease-in-out',
    textDecoration: 'none',
    '@media only screen and (max-width: 1366px)': {
      boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, .25)'
    },
    '&:hover': {
      '@media only screen and (min-width: 1366px)': {
        flex: 5.5,
        '> div > div': { opacity: 1 },
        ':before': { opacity: 1 }
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
      opacity: '.4',
      transition: 'opacity .7s ease-in-out',
      cursor: 'pointer',
      '@tabletL': { display: 'none' }
    }

  },

  title: {
    text: 'ballerina',
    color: 'cream2',
    position: 'absolute',
    right: 'B',
    bottom: 'B',
    fontWeight: '700',
    '@tabletL': { fontSize: 'C' },
    '@mobileL': {
      fontSize: 'B'
    },
    '@mobileS': {
      right: 'A',
      bottom: 'Z'
    },
    style: {
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
    flexAlign: 'center center'
  }
}

export const RoomTab = {
  extend: Link,
  props,

  on: {
    click: (event, element, state) => {
      state.update({ activeTab: element.key, back: true })
    }
  },

  title: { tag: 'caption' },

  content: {
    paragraph: { extend: tabParagraph },
    icon: { extend: icon }
  }
}
