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
    fontSize: 'Z',
    padding: `0 Z1 0 Z1`
  },
  style: {
    zIndex: 10,
    opacity: 0,
    maxWidth: `${330 / 14}em`,
    textAlign: 'justify',
    boxSizing: 'border-box',
    pointerEvents: 'none',
    transition: 'opacity .6s ease-in-out',
    transitionDelay: '.4s',
    lineHeight: `${20 / 14}em`,
    letterSpacing: '.5px',
    wordSpacing: '-1.5px',
    fontWeight: 400
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
    round: 'X'
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
      fontSize: `${10 / 14}em`,
      fontWeight: 700,
      position: 'absolute',
      width: `${125 / 16}em`,
      padding: `${12 / 16}em 0`,
      top: `${0 / 10}em`,
      left: `${0 / 10}em`,
      backdropFilter: 'blur(10px)',
      background: 'rgba(60,84, 72, .75)',
      textAlign: 'center',
      borderBottomRightRadius: '4px',
      color: 'rgba(248, 241, 227, 1)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  },
  on: {
    click: (event, element, state) => {
      state.update({ activeTab: element.key })
      element.parent.parent.parent.rooms.update({
        style: {
          minHeight: `100%`,

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
