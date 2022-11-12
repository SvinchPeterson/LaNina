'use strict'
import { Img, Button, Flex } from 'smbls'
import { dailyTour } from './dailyTour'
import { standardTour } from './standardTour'
import { armeniaTour } from './armeniaTour'

import CLOSE_PNG from '../../../assets/icons/close.png'

const closeButton = {
  extend: Button,
  icon: { extend: Img },

  on: {
    click: (event, element, state) => {
      state.update({ activeTour: false, activeDailyTour: false, activeStandardTour: false, activeArmeniaTour: false })
    }
  }
}

const props = {
  boxSize: '100% 100%',
  position: 'fixed',
  background: 'seaBlue',
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
    top: 'Z',
    right: 'A',
    padding: 'A',
    icon: {
      src: CLOSE_PNG,
      boxSize: 'A1 '
    },
    '@tabletM': {
      left: 'initial',
      right: 'A',
      top: 'A'
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
  armeniaTour
}
