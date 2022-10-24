'use strict'

import { Flex } from 'smbls'

import { tour } from '../tour'

import { $3n4dTour } from './3n4dTour'

export const standardTour = {
  extend: tour,
  props: { title: { span: { text: 'standard' } } },

  class: {
    show: (element, state) => state.activeStandardTour
      ? { display: 'block' }
      : { display: 'none' }
  },

  title: { extend: Flex, span: {} },
  tours: {
    $3n4dTour
  }
}
