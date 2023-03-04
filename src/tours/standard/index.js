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
  attr: { id: 'standard' },
  class: {
    show: (element, state) => state.activeStandard
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  },

  tourCapital,
  tourCultural,
  tourHistorical,
  tourRoyal,
  tourCaucasusMountain
}
