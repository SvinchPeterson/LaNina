'use strict'

import { Paragraph } from './Paragraph'

const props = {
  padding: 'B',
  round: 'B',
  color: 'cream',
  background: 'naviGreenLight .5',
  border: 'solid, cream .15',
  borderWidth: '.3px',
  style: {
    fontStyle: 'italic',
    backdropFilter: 'blur(1px)',
  },
  title: {
    fontSize: 'F',
    border: 'solid, cream .5',
    borderWidth: '0 0 1px 0',
    display: 'none'
  },
  p: {
    fontSize: `${14.5 / 16}em`,
    color: 'cream .75',
  }
}

export const RoomDescription = {
  props,
  extend: Paragraph,
  title: null
}
