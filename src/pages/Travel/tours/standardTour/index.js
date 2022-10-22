'use strict'

import { Flex } from 'smbls'

import { tour } from '../tour'

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
  }
}
