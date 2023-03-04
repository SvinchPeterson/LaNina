'use strict'

import { TourContainer } from '../../components'

import { tourCapital } from './tourCapital'
import { tourCultural } from './tourCultural'
import { tourHistorical } from './tourHistorical'
import { tourRoyal } from './tourRoyal'
import { tourCaucasusMountain } from './tourCaucasusMountain'

import { commonToursProps } from '../commonProps'

export const standard = {
  extend: TourContainer,
  props: commonToursProps,
  class: {
    show: (element, state) => state.activeStandard
      ? {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'
      }
      : {
        opacity: '0',
        pointerEvents: 'none',
        transform: 'translateY(-30px)',
        transition: 'opacity .25s ease-in-out, transform .35s ease-in-out'
      }
  },

  childExtend: {
    class: {
      show: (element, state) => state.activeStandard
        ? { opacity: '1', transition: 'opacity 1.5s ease-in-out' }
        : { opacity: '0', transition: 'opacity .35s ease-in-out' }
    },

    gallery: {},
    description: {
      class: {
        show: (element, state) => state.activeStandard
          ? {
            opacity: '1',
            transform: 'translateY(0)',
            transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'
          }
          : {
            opacity: '0',
            transform: 'translateY(50px)',
            transition: 'opacity .35s ease-in-out, transform .35s ease-in-out'
          }
      }
    }
  },

  tourCapital,
  tourCultural,
  tourHistorical,
  tourRoyal,
  tourCaucasusMountain
}
