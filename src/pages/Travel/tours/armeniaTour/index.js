'use strict'

import { Flex } from 'smbls'

import { tour } from '../tour'

export const armeniaTour = {
  extend: tour,
  props: {
    title: { text: 'tour', span: { text: 'georgia & armenia' } }
  },

  class: {
    show: (element, state) => state.activeArmeniaTour
      ? { display: 'block' }
      : { display: 'none' }
  },

  title: { extend: Flex, span: {} },
  tours: {
  }
}
