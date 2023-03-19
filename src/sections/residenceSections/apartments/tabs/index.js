'use strict'

import { Flex } from 'smbls'

import { opacity } from '../../../../animations'

import { tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro } from './tabs'

import ORNAMENT_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  position: 'relative',
  padding: 'E F',
  width: `${1440 / 16}em`,
  flow: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  background: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  style: { backgroundAttachment: 'fixed' },
  imageBackground: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(1, 57, 57, 0), rgba(1, 57, 57, .8), rgba(1, 57, 57, 1))'
  },
  tabsContainer: {
    gap: 'Z',
    '@tabletM': {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '- D',
      gap: 'B',
      style: { overflowY: 'auto' }
    },

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
        padding: '0',
        display: 'none'
      }
      : {
        display: 'block',
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
