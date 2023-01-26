'use strict'

import { keyframes } from '@emotion/css'

import { Flex } from 'smbls'

import { deopacity, letterSpacing, opacity, scale } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/residence/sololaki/residencee.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/residence/sololaki/residence-tablet.jpg'

export const bannerAnimation = keyframes`
  from {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    min-height: 0%;
  }
  to {
    border-bottom-right-radius: 800px;
    border-bottom-left-radius: 800px;
    min-height: 100%;
  }
`

export const positionBanner = keyframes`
  from {
    // height: 0;
    background-position: top left;
  }
  to {
    // height: 100%;
    background-position: center center;
  }
`

const props = {
  width: '100%',
  minHeight: '100%',
  position: 'relative',
  padding: '0 0 0 0',
  top: '0',
  // margin: '- auto',
  // round: '0 0 800px 800px',
  background: 'transparent',
  align: 'center center',
  alignSelf: 'center',
  // ':before': {
  //   content: '""',
  //   boxSize: '100% 100%',
  //   background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .35))',
  //   position: 'absolute',
  //   zIndex: '2',
  //   bottom: '0',
  //   pointerEvents: 'none'
  // },
  // ':after': {
  //   content: '""',
  //   boxSize: '100% 100%',
  //   background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
  //   opacity: '0',
  //   position: 'absolute',
  //   pointerEvens: 'none',
  //   style: {
  //     animationName: deopacity,
  //     animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
  //     animationDuration: '5s'
  //   }
  // },
  style: {
    // transformOrigin: 'top',
    // animationName: bannerAnimation,
    animationDuration: '3s',
    animatonTimingFunction: 'cubic-bezier(.37,.59,.65,.6)',
    overflow: 'hidden',
    '@media only screen and (max-height: 500px)': { padding: '0' }
  },

  image: {
    boxSize: '100% 100%',
    position: 'absolute',
    overflow: 'hidden',
    bottom: '0',
    right: '0',
    backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
    backgroundSize: 'cover',
    ':before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'radial-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .8))'
    },
    style: {
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      // animationName: positionBanner,
      // animationDuration: '4s',
      // animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      backgroundPosition: 'center center',
      '@media only screen and (max-width: 1366px)': {
        backgroundAttachment: 'initial',
        animationName: scale
      }
    },
    '@tabletM': { backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')' },
    '@mobileL': { backgroundPosition: 'bottom center' }
  },
  titleContainer: {
    position: 'absolute',
    flow: 'column',
    gap: 'A',
    // zIndex: '100',
    // style: { mixBlendMode: 'difference' },

    title: {
      text: 'BB Residence',
      fontSize: 'H',
      padding: '0',
      margin: '0',
      minHeight: 'fit-content',
      fontWeight: '700',
      color: 'cream2',
      letterSpacing: `${-2.5 / 57}em`,
      style: {
        textShadow: '.5px .5px rgba(0, 0, 0, .5)'
      }
    },
    subTitle: {
      text: 'sololaki',
      color: 'cream2 .75',
      fontSize: 'A',
      textTransform: 'uppercase',
      letterSpacing: `${10 / 16}em`,
      margin: '-Z2 -Y2 - -',
      alignSelf: 'center'
    }
  }
}

export const banner = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'banner' },

  image: {},

  titleContainer: {
    extend: Flex,
    title: {},
    subTitle: {}
  }
}
