'use strict'

import { Box, Link, Img, Text } from '@symbo.ls/symbols'

const book = {
  proto: [Link, Box],
  props: {
    flexAlign: 'center center',
    flexFlow: 'row',
    position: 'absolute',
    left: '50%',
    bottom: 'A',
    padding: 'Y1 A Y1 A',
    gap: 'Y',
    round: 'B1'
  },
  style: {
    pointerEvents: 'pointed !important',
    zIndex: 10,
    textTransform: 'uppercase',
    fontWeight: 900,
    letterSpacing: '0px',
    backdropFilter: 'blur(2px)',
    border: '1px solid rgba(248, 241, 227, .5)',
    textDecoration: 'none',
    transform: 'translate(-50%, -50%)',
    '&:hover': { opacity: 1 },
    '@media only screen and (max-width: 480px)': { bottom: '5%' },
    '> span': { fontSize: `${13 / 16}em` }
  },

  icon: {
    proto: [Img, Box],
    props: { boxSize: 'Z1 Z1' }
  },
  span: {
    proto: [Text, Box],
    props: {
      text: 'book',
      color: 'cream'
    }
  }
}

export const RoomTab = {
  proto: [Link, Box],
  props: {
    height: 'G3',
    padding: 'B',
    position: 'relative',
    round: 'X',
    '@tabletL': {
      minWidth: '100%',
      height: 'H'
    },
    '@mobileL': {
      minWidth: `100%`,
      minHeight: '100%',
      height: 'G3'
    },
    '@mobileM': { height: 'G' }
  },

  style: {
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
    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, .35)',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: 'linear-gradient(rgba(42, 81, 61, .4), rgba(42, 81, 61, .9))',
      opacity: '.5',
      transition: 'opacity .7s ease-in-out',
      cursor: 'pointer'
    },
    '&:after': {
      content: '""',
      fontSize: `${14 / 16}em`,
      fontWeight: '900',
      position: 'absolute',
      top: `${25 / 14}em`,
      left: `${5 / 14}em`,
      color: 'rgba(244, 233, 217, .85)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      '@media only screen and (max-width: 1225px)': {
        left: `${15 / 14}em`,
        top: `${30 / 14}em`
      }
    },

    '@media only screen and (min-width: 1225px)': {
      '&:hover': { flex: 5.5, backdropFilter: 'blur(10px)' },
      '&:hover > div > p': { opacity: 1 },
      '&:not(:hover) > div > p': {
        transitionDelay: '0s',
        transition: 'opacity 0s ease-in-out'
      },
      '&:hover:before': { opacity: 1 }
    }
  },
  on: {
    click: (event, element, state) => {
      state.update({ activeTab: element.key })
      element.parent.parent.parent.rooms.update({
        style: {
          minHeight: `${700 / 16}em`,
          opacity: 1,
          padding: `0 ${200 / 16}em`,
          '@media only screen and (max-width: 1366px)': { padding: '0' }
        }
      })
    }
  },

  content: {
    proto: Box,
    props: {
      position: 'absolute',
      boxSize: '100% 100%',
      top: '0',
      left: '0',
      flexFlow: 'column',
      flexAlign: 'center center'
    },
    style: { overflow: 'hidden' },

    p: {
      proto: [Text, Box],
      props: {
        color: 'cream 1',
        fontSize: 'Z',
        maxWidth: 'G2',
        padding: `0 B2 0 C1`,
        '@tabletL': {
          fontSize: 'A',
          maxWidth: 'H'
        },
        '@mobileL': { padding: 'C1 B1' },
        '@mobileS': { padding: 'C1' }
      },
      style: {
        zIndex: 10,
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity .3s ease-in-out',
        transitionDelay: '.4s',
        lineHeight: `${17 / 14}em`,
        letterSpacing: '.5px',
        fontWeight: 400,
        textAlign: 'left'
      },
      class: {
        show: (element, state) => state.activeTab === element.parent.parent.key ? { opacity: 1 } : {}
      }
    },

    book: { proto: book }
  }
}
