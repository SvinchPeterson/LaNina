'use strict'

import { Box, Link, Img } from 'smbls'

const icon = {
  extend: Box,
  props: {
    padding: 'B',
    position: 'absolute',
    top: 'D',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '20'
  },

  img: {
    extend: [Img, Box],
    props: {
      boxSize: 'B B'
    }
  }
}

const tabParagraph = {
  props: {
    color: 'cream2',
    padding: `0 A2`,
    width: 'H',
    fontWeight: '400',
    fontSize: 'B',
    style: {
      zIndex: 10,
      opacity: 0,
      boxSizing: 'border-box',
      pointerEvents: 'none',
      transition: 'opacity 1s ease-in-out',
      textAlign: 'center'
    }
  },

  class: {
    show: (element, state) => state.activeTab === element.parent.parent.key ? { opacity: 1 } : {}
  }
}

export const props = {
  height: 'G1',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  round: 'F1',
  flex: 1,
  cursor: 'pointer',
  boxSizing: 'border-box',

  style: {
    transition: 'flex .7s linear',
    textDecoration: 'none',
    '&:hover': {
      '@media only screen and (min-width: 1366px)': {
        flex: 5.5,
        '> div > div': { opacity: 1 },
        '> div:before': { opacity: 1 },
        '> h1': {
          transform: 'translate(-50%, -50%) scale(.6)',
          letterSpacing: '-2px'
        }
      }
    },
    '&:not(:hover)': {
      '> div > div': { transition: 'opacity .1s ease-in-out' }
    }

  },

  image: {
    boxSize: '101% 101%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    style: {
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    },
    ':before': {
      content: '""',
      position: 'absolute',
      width: '105%',
      height: '105%',
      top: '0',
      left: '0',
      background: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, 1))',
      transition: 'opacity .7s cubic-bezier(.6,.37,.52,.74)',
      cursor: 'pointer'
    }
  },

  title: {
    text: 'ballerina',
    color: 'cream2',
    position: 'absolute',
    bottom: '-Z',
    left: '50%',
    transform: 'translate(-3%, -50%)',
    fontWeight: '700',
    zIndex: '5',
    fontSize: `I`,
    textTransform: 'capitalize',
    letterSpacing: `-1px`,
    style: {
      textShadow: '.5px .5px 1px black',
      whiteSpace: 'nowrap',
      mixBlendMode: 'screen',
      // transition: 'transform .7s cubic-bezier(.6,.37,.52,.74), letter-spacing .7s cubic-bezier(.6,.37,.52,.74)'
      transition: 'transform .7s linear, letter-spacing .5s linear'
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

  image: {},

  title: { tag: 'h1' },

  content: {
    paragraph: { extend: tabParagraph },
    icon: { extend: icon }
  }
}
