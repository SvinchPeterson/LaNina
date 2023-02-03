'use strict'

import { Flex } from 'smbls'

import { opacity } from '../../../../animations'

import { tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro } from './tabs'

const props = {
  position: 'relative',
  padding: '0 F',
  width: `${1440 / 16}em`,
  flow: 'column',
  alignItems: 'center',
  tabsContainer: { gap: 'Z' }
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

  tabsContainer: {
    tag: 'nav',
    extend: Flex,
    ...[tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro]
  }
}
