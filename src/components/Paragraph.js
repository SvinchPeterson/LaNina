'use strict'
import { Flex } from 'smbls'

const props = {
  flow: 'column',
  color: 'black',
  style: { zIndex: '2' },

  title: {
    fontSize: 'J',
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: `${-4 / 83}em`,
    color: 'orange',
    '@maxMobileM': { fontSize: 'H' }
  },

  p: {
    fontSize: `${15 / 16}em`,
    flow: 'column',
    gap: 'Z',
    letterSpacing: `${0.5 / 15}em`
  }
}

export const Paragraph = {
  extend: Flex,
  props,

  title: { tag: 'h3' },
  p: { extend: Flex }
}
