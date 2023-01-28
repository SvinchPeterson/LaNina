'use strict'
import { Flex } from 'smbls'

const props = {
  maxWidth: 'H2',
  flow: 'column',
  gap: 'Z2',
  color: 'black',
  style: { zIndex: '2' },

  title: {
    fontWeight: '700',
    fontSize: 'E',
    textTransform: 'capitalize',
    letterSpacing: '-1px'
  },

  p: {
    flow: 'column',
    gap: 'Z',
    letterSpacing: '.5px'
  }
}

export const Paragraph = {
  extend: Flex,
  props,

  title: { tag: 'h3' },
  p: { extend: Flex }
}
