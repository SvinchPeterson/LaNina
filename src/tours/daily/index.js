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

export const daily = {
  extend: TourContainer,

  class: {
    show: (element, state) => state.activeDaily
      ? { opacity: '1', transform: 'scale(1)' }
      : { opacity: '0', zIndex: '-1', transform: 'scale(.98)' }
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
