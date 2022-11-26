'use strict'

import { Flex } from 'smbls'

import { tour } from '../tour'
import { oldTbilisiTour } from './oldTbilisiTour'
import { ananuriGudauriTour } from './ananuriGdauriTour'
import { canyonTour } from './canyonTour'
import { kakhetiTour } from './kakhetiTour'
import { kutaisiTour } from './kutaisiTour'
import { goriTour } from './goriTour'
import { borjomiTour } from './borjomiTour'
import { rabatiTour } from './rabatiTour'
import { mtsketaTour } from './mtsketaTour'

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
    mtsketaTour,
    kakhetiTour,
    kutaisiTour,
    goriTour,
    borjomiTour,
    rabatiTour
  }
  // fullDescription: { extend: descriptionsContainer }
}
