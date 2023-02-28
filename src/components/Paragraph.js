'use strict'
import { Flex } from 'smbls'

const props = {
  flow: 'column',
  gap: 'A',
  color: 'black',
  style: { zIndex: '2' },

  title: {
    fontWeight: '700',
    fontSize: 'E',
    textTransform: 'capitalize',
    letterSpacing: '-2px',
    margin: '0'
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
