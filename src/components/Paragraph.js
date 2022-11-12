'use strict'
import { Flex } from 'smbls'

const props = {
  maxWidth: 'I',
  flow: 'column',
  gap: 'B',
  style: { zIndex: '2' },

  title: {
    tag: 'h3',
    fontWeight: '500',
    fontSize: `${12 / 16}em`,
    style: {
      textTransform: 'uppercase',
      letterSpacing: '3.5px'
    }
  },

  p: {
    flow: 'column',
    gap: 'Z',
    style: { letterSpacing: '.38px' },
    fontSize: `${15 / 16}em`
  }
}

export const Paragraph = {
  extend: Flex,
  props,

  title: {},
  p: { extend: Flex }
}
