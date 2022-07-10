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
    zIndex: '20'
  },
  img: {
    proto: [Img, Box],
    props: { boxSize: 'A1 A1' },
    style: { opacity: '.75' }
  }
}

const tabParagraph = {
  proto: [Text, Box],
  props: {
    color: 'cream2',
    padding: `0 A`
  },
  style: {
    fontSize: `${14.1 / 16}em`,
    zIndex: 10,
    opacity: 0,
    maxWidth: `${320 / 14.1}em`,
    textAlign: 'justify',
    boxSizing: 'border-box',
    pointerEvents: 'none',
    transition: 'opacity .3s ease-in-out',
    transitionDelay: '.4s',
    lineHeight: `${21 / 14.1}em`,
    letterSpacing: '.8px',
    wordSpacing: '-1.3px'
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
    round: 'Y2'
  },

  style: {
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
    boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, .15)',
    '&:hover': {
      flex: 5.5,
      backdropFilter: 'blur(10px)',
      boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)'
    },
    '&:hover > div > p': { opacity: 1 },
    '&:not(:hover) > div > p': {
      transitionDelay: '0s',
      transition: 'opacity 0s ease-in-out'
    },
    '&:hover:before': { opacity: 1 },
    '&:hover img': { opacity: 1 },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: 'linear-gradient(rgba(60,84, 72, .5), rgba(60,84, 72, 1))',
      opacity: '.45',
      transition: 'opacity .7s ease-in-out',
      cursor: 'pointer'
    },
    '&:after': {
      content: '""',
      fontSize: `${9.8 / 14}em`,
      fontWeight: 500,
      position: 'absolute',
      width: '120px',
      padding: '12px 0 12px 8.2px',
      top: 0,
      left: 0,
      letterSpacing: '.5px',
      backdropFilter: 'blur(10px)',
      background: 'rgba(60,84, 72, .85)',
      boxSizing: 'border-box',
      borderBottomRightRadius: '8px',
      color: 'rgba(248, 241, 227, .85)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  },
  on: {
    click: (event, element, state) => {
      state.update({ activeTab: element.key })
      element.parent.parent.parent.rooms.update({
        style: {
          minHeight: `${500 / 16}em`,

          opacity: 1,
          padding: `0 ${200 / 16}em`
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
