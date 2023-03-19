'use strict'

import { Flex } from 'smbls'

import { opacity } from '../../../../animations'

import { tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro } from './tabs'

import ORNAMENT_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  position: 'relative',
  padding: 'E -',
  width: `100%`,
  flow: 'column',
  align: 'center center',
  overflow: 'hidden',
  background: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  style: {
    backgroundAttachment: 'fixed',
    '@media only screen and (min-width: 1281px) and (max-height: 820px)': { minHeight: '100%' }
  },
  imageBackground: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(1, 57, 57, 0), rgba(1, 57, 57, .8), rgba(1, 57, 57, 1),rgba(1, 57, 57, 1))'
  },
  tabsContainer: {
    padding: '- F',
    maxWidth: `${1440 / 16}em`,
    gap: 'Z',
    childProps: {
      image: {
      },

      icon: {
        '@tabletM': {
          boxSize: 'C2 C2'
        }
      },

      p: {
        '@tabletM': { display: 'none' }
      },
      title: {
        '@tabletM': {
          opacity: '1',
          transform: 'scale(1)',
          letterSpacing: '-3px',
          fontSize: 'G'
        }
      }
    }
  }
}

export const tabs = {
  extend: Flex,
  props,

  class: {
    show: (element, state) => state.activeTab
      ? {
        width: 0,
        padding: '0'
        // display: 'none'
      }
      : {
        // display: 'flex',
        animationName: opacity,
        animationDuration: '.5s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
      }
  },

  imageBackground: {},

  tabsContainer: {
    tag: 'nav',
    extend: Flex,
    ...[tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro]
  }
}
