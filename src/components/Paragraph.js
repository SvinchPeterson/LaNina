'use strict'
import { Flex } from 'smbls'

const props = {
  maxWidth: 'I',
  flow: 'column',
  gap: 'B',
  align: 'center center',
  style: { zIndex: '2' },

  title: {
    tag: 'h3',
    fontSize: 'Z',
    fontWeight: '500',
    style: {
      textTransform: 'uppercase',
      letterSpacing: '3.5px'
    }
  },

  p: {
    flow: 'column',
    gap: 'Z',
    textAlign: 'center',
    leterSpacing: '.1px',
    '@mobileS': {
      fontSize: `${15 / 16}em`,
      textAlign: 'left'
    }
  }
}

export const Paragraph = {
  extend: Flex,
  props,

  title: {},
  p: { extend: Flex }
}
