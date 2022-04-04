'use strict'

import { Block } from '@rackai/symbols'

import style from './style'

export default {
  style,
  childProto: {
    tag: 'span',
    proto: Block,
    class: {
      show: (element, state) => state.activeImage === parseInt(element.key) ? { zIndex: '30', opacity: 1, backgroundPosition: 'center right' } : { zIndex: 0, opacity: 0 }
    }
  },
  ...[]
}
