'use strict'

import { TourContainer } from '../../components'

import { tourTbilisi } from './tourTbilisi'
import { tourAnanuriGudauri } from './tourAnanuriGudauri'
import { tourDashbashi } from './tourDashbashi'
import { tourMtsketa } from './tourMtsketa'
import { tourKakheti } from './tourKakheti'
import { tourKutaisi } from './tourKutaisi'
import { tourGori } from './tourGory'
import { tourBorjomi } from './tourBorjomi'
import { tourRabati } from './tourRabati'

import { commonToursProps } from '../commonProps'

const props = {
  ...commonToursProps,
  childProps: {
    padding: 'C2 - C1 -',
    article: {
      package: {
        padding: 'B - - -',
        packageSchedule: {
          childProps: {
            gap: 'Z',
            border: 'none',
            places: {
              padding: 'A1 - - -',
              border: 'solid, cream .5',
              borderWidth: '.5px 0px 0px 0px'
            }
          }
        }
      }
    }

  }

}

export const daily = {
  extend: TourContainer,
  props,

  class: {
    show: (element, state) => state.activeDaily
      ? {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'
      }
      : {
        opacity: '0',
        pointerEvents: 'none',
        transform: 'translateY(-30px)',
        transition: 'opacity .25s ease-in-out, transform .25s ease-in-out'
      },
    show2: (element, state) => state.activeDailyPackages
      ? { overflowY: 'hidden' }
      : { overflowY: 'auto' }
  },

  childExtend: {
    class: {
      show: (element, state) => state.activeDaily
        ? { opacity: '1', transition: 'opacity 1.5s ease-in-out' }
        : { opacity: '0', transition: 'opacity .25s ease-in-out' }
    },
    gallery: {},
    article: {
      class: {
        show: (element, state) => state.activeDaily
          ? {
            opacity: '1',
            transform: 'translateY(0)',
            transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'

          }
          : {
            opacity: '0',
            transform: 'translateY(50px)',
            transition: 'opacity .25s ease-in-out, transform .25s ease-in-out'
          }
      }
    }
  },

  tourTbilisi,
  tourAnanuriGudauri,
  tourDashbashi,
  tourMtsketa,
  tourKakheti,
  tourKutaisi,
  tourGori,
  tourBorjomi,
  tourRabati
}
