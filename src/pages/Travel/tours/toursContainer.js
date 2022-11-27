'use strict'
import { Img, Button, Flex } from 'smbls'

import { dailyTour } from './dailyTour'
import { standardTour } from './standardTour'
import { armeniaTour } from './armeniaTour'
import { exclusive } from './exclusiveTour'
import { adventure } from './adventureTour'

import { articlesContainer } from './articleContainer/articlesContainer'

import CLOSE_PNG from '../../../assets/icons/closeBlack.png'

const closeButton = {
  extend: Button,
  icon: { extend: Img },

  on: {
    click: (event, element, state) => {
      state.update({ activeTour: false, activeDailyTour: false, activeStandardTour: false, activeArmeniaTour: false, activeExclusiveTour: false, activeAdventureTour: false })
    }
  }
}

const props = {
  boxSize: '100% 100%',
  position: 'fixed',
  background: 'rgba(229, 249, 252, 1)',
  justifyContent: 'center',
  zIndex: '100',
  top: '0',
  left: '0',
  flow: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  style: { backdropFilter: 'blur(1px)' },

  ':after': {
    content: '""',
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0'
  },

  closeButton: {
    boxSize: 'fit-content',
    background: 'transparent',
    position: 'absolute',
    zIndex: '3',
    top: '0',
    right: '0',
    padding: 'B',
    '@mobileS': { padding: 'A' },
    icon: {
      src: CLOSE_PNG,
      boxSize: 'A1 '
    }
  }
}

export const toursContainer = {
  extend: Flex,
  props,
  class: {
    show: (element, state) => state.activeTour
      ? {
        display: 'block'
      }
      : {
        display: 'none !important'
      }
  },

  closeButton,

  dailyTour,
  standardTour,
  armeniaTour,
  exclusive,
  adventure,
  articlesContainer
}
