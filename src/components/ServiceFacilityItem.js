'use strict'

import { Flex } from 'smbls'

import { Paragraph } from './Paragraph'

const props = {
  maxWidth: 'G1',
  padding: 'B1 C2 B1 B',
  background: 'cream',
  round: 'Z',
  whiteSpace: 'nowrap',

  title: {
    fontSize: `${14 / 16}em`,
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: '.2px',
    color: 'black .76'
  },

  p: {
    padding: 'V2 - - -',
    fontSize: `${14 / 16}em`,
    color: 'black .75'
  }
}

export const ServiceFacilityItem = {
  extend: Paragraph,
  props,

  title: { tag: 'h5' },
  p: {}
}
