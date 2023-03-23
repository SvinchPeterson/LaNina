'use strict'

import { Paragraph } from './Paragraph'

const props = {
  maxWidth: 'H',
  color: 'cream2',
  title: {
    fontSize: 'F',
    border: 'solid, cream2 .5',
    borderWidth: '0 0 1px 0'
  },
  p: { color: 'cream2 .75' }
}

export const RoomDescription = {
  props,
  extend: Paragraph
}
