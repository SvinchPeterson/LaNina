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
  backgroundColor: 'orange',
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '@minTabletL': { style: { backgroundAttachment: 'fixed' } },
  '@maxHeightS': { padding: 'C -' },
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% F1',
    top: '0',
    left: '0',
    background: 'linear-gradient(to right,  rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)',
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

    style: {
      backgroundColor: 'rgba(1, 57, 57, .75)',
      backgroundImage: 'linear-gradient(160deg, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)'
    }

//     background-color: #0093E9;
// background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

    // background: 'radial-gradient(rgba(0, 49, 49, .65),rgba(0, 49, 49, .75), rgba(0, 70, 70, 1), rgba(0, 70, 70, 1))',
    // '@maxTabletL': { background: 'naviGreenLight'},
  },
  tabsContainer: {
    padding: '- F',
    maxWidth: `${1440 / 16}em`,
    gap: 'Z',
    overflow: 'hidden',
    '@maxTabletS': {
      maxWidth: '100%',
      gap: '0',
      style: { overflowX: 'auto'},
      padding: '- C',
    },
    childProps: {
      border: 'solid, naviGreenDark 0',
      borderWidth: `A`,
      '@maxTabletL': {
        minWidth: 'E2',
        align: 'center flex-start',
        padding: 'C1 - - -'
      },
      '@maxHeightS': {
        height: 'F3'
      }
    }
  }
}

export const tabs = {
  extend: Flex,
  props,

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
      tabQvevri
    ]
  }
}
