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
        opacity: '.85',
        '@media only screen and (max-width: 1366px)': { opacity: 1 }
      }
    }
  }
}

const tabParagraph = {
  props: {
    color: 'cream2',
    padding: `0 A2`,
    fontSize: `${14 / 16}em`,
    '@mobileS': { padding: `0 A` },
    css: {
      zIndex: 10,
      opacity: 0,
      width: `${350 / 14}em`,
      boxSizing: 'border-box',
      pointerEvents: 'none',
      transition: 'opacity .3s ease-in-out',
      transitionDelay: '.4s',
      // letterSpacing: `${0.15 / 14}em`,
      fontWeight: '400',
      // wordSpacing: '-1.5px',
      '> p': {
        textAlign: 'justify',
        wordSpacing: '-2px'
      },
      '@media only screen and (max-width: 1366px)': {
        fontSize: `${15 / 16}em`,
        width: `${500 / 15}em`
      },
      '@media only screen and (max-width: 768px)': {
        fontSize: `${13.5 / 16}em`,
        width: `${300 / 13.5}em`
      },
      '@media only screen and (max-width: 350px)': {
        fontSize: `${12.8 / 16}em`,
        width: `${250 / 12.8}em`
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
  position: 'relative',
  round: 'Y2',
  '@tabletL': {
    minWidth: '100%',
    height: 'H'
  },
  '@mobileL': { height: 'G1' },
  '@mobileS': { height: 'F2' },
  css: {
    overflow: 'hidden',
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
      flex: 5.5,
      backdropFilter: 'blur(10px)',
      boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)'
    },
    '&:hover > div > div': { opacity: 1 },
    '&:hover:before': { opacity: 1 },
    '&:hover img': { opacity: 1 },
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
      cursor: 'pointer'
    },
    '&:after': {
      content: '""',
      fontSize: `${13 / 16}em`,
      // fontWeight: 900,
      position: 'absolute',
      textShadow: '2px 2px 30px 1px rgba(0, 0, 0, .4)',
      bottom: `${35 / 13}em`,
      right: `${35 / 13}em`,
      letterSpacing: '.4px',
      wordSpacing: '.35px',
      boxSizing: 'border-box',
      borderBottomRightRadius: '8px',
      color: 'rgba(248, 241, 227, 1)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      '@media only screen and (max-width: 1366px)': {
        fontSize: `${16 / 16}em`,
        bottom: `${40 / 16}em`,
        right: `${40 / 16}em`
      },
      '@media only screen and (max-width: 768px)': {
        fontSize: `${14 / 16}em`,
        bottom: `${20 / 14}em`,
        right: `${20 / 14}em`
      },
      '@media only screen and (max-width: 350px)': { bottom: `${10 / 14}em` }
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
      element.parent.parent.parent.rooms.update({
        style: {
          minHeight: `${500 / 16}em`,
          opacity: 1,
          padding: `0 ${200 / 16}em`,
          alignSelf: 'center',
          minWidth: `${1440 / 16}em`,
          '@media only screen and (max-width: 1366px)': {
            padding: `0 ${150 / 16}em`,
            minWidth: `${1000 / 16}em`
          },
          '@media only screen and (max-width: 1225px)': {
            padding: `0 ${100 / 16}em`
          },
          '@media only screen and (max-width: 1024px)': {
            minWidth: `${850 / 16}em`
          },
          '@media only screen and (max-width: 768px)': {
            padding: `0`,
            minWidth: `100%`
          }

        }
      })
    }
  },

  content: {
    paragraph: { proto: tabParagraph },
    icon: { proto: icon }
  }
}
