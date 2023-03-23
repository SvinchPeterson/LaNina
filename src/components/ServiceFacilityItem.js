'use strict'

import { Flex } from 'smbls'

const props = {
  maxWidth: 'G1',
  padding: 'B1 C2 B1 B',
  background: 'cream2',
  flow: 'column',
  gap: '0',
  round: 'Z',
  whiteSpace: 'nowrap',

  title: {
    fontSize: 'A1',
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: '-0.5px'
  },

  p: {
    padding: 'V2 - - -',
    fontSize: `${15 / 16}em`
  }
}

export const ServiceFacilityItem = {
  extend: Flex,
  props,

  title: { tag: 'h5' },
  p: {}
}
