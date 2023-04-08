'use strict'

import { Flex } from 'smbls'

import { opacity } from '../../../../animations'

import {
  tabBallerina, tabRedBrick, tabYellowCouch,
  tabGreenForest, tabRetro, tabBlueLagoon,
  tabQvevri, tabGela, tabGocha
}
from './tabs'

import ORNAMENT_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  position: 'relative',
  padding: 'D -',
  width: `100%`,
  flow: 'column',
  align: 'center center',
  overflow: 'hidden',
  background: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '@minTabletL': { style: {backgroundAttachment: 'fixed !important'} },
  '@maxTabletL': {
    background: 'none',
  },
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% F1',
    top: '0',
    left: '0',
    background: 'linear-gradient(to right, rgba(0, 70, 70, 1) 0%, rgba(0, 70, 70, 0) 100%)',
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
    background: 'linear-gradient(to left, rgba(0, 70, 70, 1) 0%, rgba(0, 70, 70, 0) 100%)',
    zIndex: '2',
    pointerEvents: 'none',
    '@mobileL': { boxSize: '100% E' }
  },

  imageBackground: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(0, 49, 49, .65),rgba(0, 49, 49, .75), rgba(0, 70, 70, 1))',
    '@maxTabletL': { background: 'naviGreenLight'},
  },
  tabsContainer: {
    padding: '- F',
    maxWidth: `${1440 / 16}em`,
    gap: 'Z',
    '@maxTabletL': {
      maxWidth: '100%',
      gap: 'C',
      style: { overflowX: 'auto' },
      padding: 'C E',
    },
    childProps: {
      '@maxTabletL': {
        minWidth: 'F'
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
    ...[
      tabBallerina,
      tabRedBrick,
      tabYellowCouch,
      tabGreenForest,
      tabRetro,
      tabBlueLagoon,
      tabQvevri,
      // tabGela,
      // tabGocha
    ]
  }
}
