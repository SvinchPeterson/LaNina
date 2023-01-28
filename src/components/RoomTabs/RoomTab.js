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
      boxSize: 'B B',
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
    fontSize: 'B',
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
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  round: 'F1',
  // border: 'solid, cream2 .25',
  // borderWidth: '2px',
  '@tabletL': {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    round: 'V2'
  },

  style: {
    // boxShadow: '0px 0px 5px 1px rgba(0, 0, 0, .1)',
    flex: 1,
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'flex .7s cubic-bezier(.6,.37,.52,.74)',
    textDecoration: 'none',
    '@media only screen and (max-height: 650px) and (min-width: 1366px)': {
      height: `${250 / 16}em`
    },
    '@media only screen and (max-width: 1366px)': {
      boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, .25)'
    },
    '&:hover': {
      '@media only screen and (min-width: 1366px)': {
        flex: 5.5,
        '> div > div': { opacity: 1 },
        '> div:before': { opacity: 1 },
        '> h1': {
          transform: 'translate(-50%, -50%) scale(.7)',
          letterSpacing: '-2px'
        }
      }
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
      // background: 'linear-gradient(rgba(60,84, 72, .5), rgba(60,84, 72, 1))',
      // opacity: '.65',
      transition: 'opacity .7s cubic-bezier(.6,.37,.52,.74)',
      cursor: 'pointer',
      // round: 'I',
      '@tabletL': { display: 'none' }
    }
  },

  title: {
    text: 'ballerina',
    color: 'cream2',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translate(-5%, -50%)',
    fontWeight: '700',
    zIndex: '5',
    fontSize: `H`,
    textTransform: 'capitalize',
    letterSpacing: `-1px`,
    '@tabletL': { fontSize: 'C' },
    '@mobileL': {
      fontSize: 'B'
    },
    '@mobileS': {
      right: 'A',
      bottom: 'Z'
    },
    style: {
      textShadow: '.5px .5px 1px black',
      whiteSpace: 'nowrap',
      mixBlendMode: 'screen',
      transition: 'transform .7s cubic-bezier(.6,.37,.52,.74), letter-spacing .7s cubic-bezier(.6,.37,.52,.74)'
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
