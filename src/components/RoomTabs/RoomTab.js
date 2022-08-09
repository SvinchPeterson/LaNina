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
  position: 'relative',
  round: 'V',
  '@tabletL': {
    minWidth: '100%',
    height: 'H'
  },
  '@mobileL': { height: 'G' },
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
    '@media only screen and (max-height: 673px)': {
      height: '350px !important'
    },
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
      cursor: 'pointer',
      '@media only screen and (max-width: 1366px)': {
        padding: '20px'
      }
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

      // element.parent.parent.update({
      //   minWidth: '0',
      //   opacity: 0
      // })

      // element.parent.parent.parent.rooms.update({
      //   style: {
      //     minWidth: '100%'
      //     // minHeight: '100%'
      //   }

      // })
      // element.parent.parent.update({
      //   style: {
      //     minWidth: '0 !important',
      //     width: '0 !important',
      //     padding: '0'
      //     // transition: 'all .5s ease-in-out'
      //   }
      // })

      // element.parent.update({
      //   // style: { display: 'none !important' }
      // })

      // element.parent.parent.parent.rooms.update({
      //   style: {
      //     minWidth: `100%`,
      //     transition: 'all 5s ease-in-out',
      //     transformOrigin: 'left',
      //     opacity: 1,
      //     flex: 3,
      //     // padding: `0 ${200 / 16}em`,
      //     // alignSelf: 'center',
      //     // minWidth: `100%`,
      //     '@media only screen and (max-width: 1366px)': {
      //       padding: `0 ${150 / 16}em`,
      //       minWidth: `${1000 / 16}em`
      //     },
      //     '@media only screen and (max-width: 1225px)': {
      //       padding: `0 ${100 / 16}em`
      //     },
      //     '@media only screen and (max-width: 1024px)': {
      //       minWidth: `${850 / 16}em`
      //     },
      //     '@media only screen and (max-width: 768px)': {
      //       padding: `0`,
      //       minWidth: `100%`
      //     }

      //   }
      // })
    }
  },

  content: {
    paragraph: { proto: tabParagraph },
    icon: { proto: icon }
  }
}
