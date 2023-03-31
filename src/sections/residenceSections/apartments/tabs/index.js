'use strict'

import { Flex } from 'smbls'

import { opacity } from '../../../../animations'

import { tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro, tabBlueLagoon, tabQvevri } from './tabs'

import ORNAMENT_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  position: 'relative',
  // padding: 'E -',
  width: `100%`,
  flow: 'column',
  align: 'center center',
  overflow: 'hidden',
  background: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  style: {
    padding: `${110 / 16}em 0`,
    '@media only screen and (max-height: 880px)': { padding: `${70 / 16}em 0`, },
    '@media only screen and (min-width: 1281px)': { backgroundAttachment: 'fixed !important' },
    '@media only screen and (max-height: 800px)': {
      height: '100% !important'
    }
    // '@media only screen and (min-width: 1281px) and (max-height: 820px)': { minHeight: '100%' },
    // '@media only screen and (max-width: 1280px) and (max-height: 850px)': { minHeight: '100%' }
  },
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% F1',
    top: '0',
    left: '0',
    background: 'linear-gradient(to right, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)',
    zIndex: '2',
    pointerEvents: 'none',
    '@mobileL': { boxSize: '100% E' }
  },

  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% F1',
    top: '0',
    right: '0',
    background: 'linear-gradient(to left, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)',
    zIndex: '2',
    pointerEvents: 'none',
    '@mobileL': { boxSize: '100% E' }
  },

  imageBackground: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(1, 57, 57, 0), rgba(1, 57, 57, .8), rgba(1, 57, 57, 1),rgba(1, 57, 57, 1))',
  },
  tabsContainer: {
    padding: '- F',
    maxWidth: `${1440 / 16}em`,
    gap: 'Z',
    '@tabletM': {
      maxWidth: `100%`,
      padding: '- D',
      gap: '0',
      style: { overflowX: 'auto', '::-webkit-scrollbar': { display: 'none' } }
    },
    '@mobileM': { padding: '- B1 - Z'},

    childProps: {
      '@tabletM': {
        minWidth: 'G2',
        minHeight: 'G2',
        round: 'F1 F1 0 0',
        border: 'solid, transparent',
        borderWidth: '20px',
        align: 'center space-between',
        padding: 'E - C -'
      },
      style: {
        // '@media only screen and (max-height: 600px)': {
        //   minHeight: `${250 / 16}em`

        // }
      },

      imageContainer: {
        '@tabletM': {
          round: 'F F 0 0',
          // boxSize: '90% 85%',
          top: 'initial',
          left: '50%',
          bottom: '0',
          transform: 'translate(-50%, 0)',
          border: 'solid, cream2 .65',
          borderWidth: '1px',
          align: 'flex-end center'
        },

        image: {
         '@tabletM': {
          minWidth: '85%',
          minHeight: '90%',
          round: 'F F 0 0',
         }
        }
      },

      icon: {
        '@tabletM': {
          boxSize: 'B2 B2'
        }
      },

      p: {
        '@tabletM': { display: 'none' }
      },
      title: {
        '@tabletM': {
          opacity: '1',
          transform: 'scale(1)',
          letterSpacing: '-2px',
          fontSize: 'E'
        }
      }
    }
  }
}

export const tabs = {
  extend: Flex,
  props,

  class: {
    // show: (element, state) => state.activeTab
    //   ? {
    //     width: 0,
    //     padding: '0'
    //     // display: 'none'
    //   }
    //   : {
    //     // display: 'flex',
    //     animationName: opacity,
    //     animationDuration: '.5s',
    //     animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
    //   }
  },

  imageBackground: {},

  tabsContainer: {
    tag: 'nav',
    extend: Flex,
    ...[tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro, tabBlueLagoon, tabQvevri]
  }
}
