'use strict'
import { Flex } from 'smbls'

const props = {
  flow: 'column',
  color: 'black',
  style: { zIndex: '2' },

  title: {
    fontWeight: '700',
    textTransform: 'capitalize',
    margin: '0',
    letterSpacing: '-1.5px'
  },

  p: {
    flow: 'column',
    gap: 'Z',
    letterSpacing: `${0.5 / 16}em`
  }
}

export const Paragraph = {
  extend: Flex,
  props,

  title: { tag: 'h3' },
  p: { extend: Flex }
}
