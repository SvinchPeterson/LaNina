'use strict'

import { Flex } from 'smbls'

import { tour } from '../tour'
import { oldTbilisiTour } from './oldTbilisiTour'
import { ananuriGudauriTour } from './ananuriGdauriTour'
import { canyonTour } from './canyonTour'
import { kakhetiTour } from './kakhetiTour'

export const dailyTour = {
  extend: tour,
  class: {
    show: (element, state) => state.activeDailyTour
      ? { display: 'block' }
      : { display: 'none' }
  },

  title: { extend: Flex, span: {} },
  tours: {
    oldTbilisiTour,
    ananuriGudauriTour,
    canyonTour,
    kakhetiTour
  }
}
