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

export const props = {
  style: {
    '> div:nth-child(odd)': {
      '> div > div': {
        borderRadius: `0 ${200 / 16}em ${200 / 16}em 0`,
        ':before': {
          top: '0',
          left: '0',
          background: 'linear-gradient(to right, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
        }
      }
    },

    '> div:nth-child(even)': {
      '> div > div': {
        borderRadius: `${200 / 16}em 0 0 ${200 / 16}em `,
        ':before': {
          top: '0',
          right: '0',
          background: 'linear-gradient(to left, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
        }
      },
      '> div > footer': { alignSelf: 'flex-end' },
      '> div > h5': { alignSelf: 'flex-end' }
    }
  }
}

export const daily = {
  extend: TourContainer,
  // attr: { id: 'daily' },
  props,

  class: {
    show: (element, state) => state.activeDaily
      ? { opacity: '1', transform: 'scale(1)' }
      : { opacity: '0', zIndex: '-1', transform: 'scale(1.01)' }
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
