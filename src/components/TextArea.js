'use strict'

import { Flex } from 'smbls'

const heading = { tag: 'h3' }

const textArea = { tag: 'textarea' }

const props = {
  flow: 'column',
  alignItems: 'center',
  gap: '',
  position: 'relative',
  width: 'fit-content',

  heading: {
    fontSize: 'A',
    text: 'WHAT WOULD YOU LIKE TO EXPERIENCE ?',
    padding: '0 0 A 0',
    textAlign: 'center',
    '@mobileM': { maxWidth: 'G' },
    style: { textTransform: 'uppercase' }
    // '@tabletS': { fontSize: 'Z' }
  },

  textArea: {
    padding: 'A',
    outline: 'none',
    background: 'transparent',
    width: `G3`,
    minHeight: 'F1',
    round: 'B',
    border: '1.3px solid gray',
    '@mobileM': { width: 'G1' }
  }
}

export const TextArea = {
  extend: Flex,
  props,

  heading,
  textArea
}
