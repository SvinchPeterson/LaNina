'use strict'

import { Box, Link, Img, Text } from '@symbo.ls/symbols'

const icon = {
  proto: Box,
  props: {
    padding: 'B',
    position: 'absolute',
    right: '0',
    bottom: '0'
  },
  style: {
    zIndex: '20',
    opacity: '.75'
  },
  img: {
    proto: [Img, Box],
    props: { boxSize: 'A1 A1' }
  }
}

const tabParagraph = {
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

}

export const RoomTab = {
  proto: [Link, Box],
  props: {
    height: 'G1',
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
    }
    // '@mobileM': { height: 'G' }
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
    // overflow: 'hidden',
    // '&:hover:after': {
    //   color: '#FFCEA8',
    //   opacity: '.85'
    // },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: 'linear-gradient(rgba(42, 81, 61, .4), rgba(42, 81, 61, .9))',
      opacity: '.35',
      transition: 'opacity .7s ease-in-out',
      cursor: 'pointer'
    },
    '&:after': {
      content: '""',
      fontSize: `${10 / 14}em`,
      fontWeight: 700,
      position: 'absolute',
      width: '125px',
      padding: '12px 0',
      top: `${0 / 10}em`,
      left: `${0 / 10}em`,
      backdropFilter: 'blur(10px)',
      background: 'rgba(60,84, 72, .45)',
      textAlign: 'center',
      borderBottomRightRadius: '4px',
      color: 'rgba(248, 241, 227, 1)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
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
          minHeight: `${500 / 16}em`,

          opacity: 1,
          padding: `0 ${200 / 16}em`,
          '@media only screen and (max-width: 1366px)': { padding: '100px 100px' }
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

    p: { proto: tabParagraph },

    icon: { proto: icon }
  }
}
