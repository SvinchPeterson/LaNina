'use strict'

import { Flex } from 'smbls'

const props = {
  maxWidth: 'I',
  padding: 'C1 - C1 B',
  background: 'cream2',
  flow: 'column',
  gap: '0',
  round: 'Y',

  '@mobileS': {
    maxWidth: '100%',
    padding: 'C Z C Z'
  },

  title: {
    fontSize: '16px',
    fontWeight: '700',
    textTransform: 'capitalize'
  },

  p: {
    padding: 'V2 - - -',
    fontSize: `15px`,
    color: 'black .8'
  }
}

export const ServiceFeature = {
  extend: Flex,
  props,

  title: { tag: 'h5' },
  p: {}
}
