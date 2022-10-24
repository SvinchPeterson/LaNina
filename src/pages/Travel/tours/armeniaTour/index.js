'use strict'

import { Flex } from 'smbls'

import { tour } from '../tour'

import { geoArmTour } from './geoArmTour'

export const armeniaTour = {
  extend: tour,
  props: {
    padding: 'E - C -',
    title: { text: 'tour', span: { text: 'georgia & armenia' } }
  },

  class: {
    show: (element, state) => state.activeArmeniaTour
      ? { display: 'block' }
      : { display: 'none' }
  },

  title: { extend: Flex, span: {} },
  tours: {
    geoArmTour
  }
}
