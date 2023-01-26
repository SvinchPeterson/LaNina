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
    fontSize: 'D',
    textTransform: 'capitalize'
  },

  p: {
    flow: 'column',
    gap: 'Z',
    letterSpacing: '.4px'
  }
}

export const Paragraph = {
  extend: Flex,
  props,

  title: { tag: 'h3' },
  p: { extend: Flex }
}
