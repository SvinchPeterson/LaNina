'use strict'

import { Paragraph } from './Paragraph'

const props = {
  maxWidth: 'H',
  color: 'cream',
  title: {
    fontSize: 'F',
    border: 'solid, cream .5',
    borderWidth: '0 0 1px 0',
    display: 'none'
  },
  p: { color: 'cream .75' }
}

export const RoomDescription = {
  props,
  extend: Paragraph,
  title: null
}
