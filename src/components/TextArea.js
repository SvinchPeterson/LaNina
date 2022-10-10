'use strict'

import { Flex } from 'smbls'

const heading = { tag: 'h3' }

const textArea = { tag: 'textarea' }

const footerParagraph = { tag: 'p' }

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
    style: { textTransform: 'uppercase' },
    '@tabletS': { fontSize: 'Z' }
  },

  textArea: {
    padding: 'A',
    outline: 'none',
    background: 'transparent',
    minWidth: `375px`,
    minHeight: 'F1',
    round: 'B',
    style: { border: '1.5px solid rgba(0, 0, 0, .55)' },
    '@mobileS': { minWidth: `287px` }
  },

  footerParagraph: {
    fontSize: 'Z',
    text: 'tell us your plan, your wishes, your budget for planning your trip',
    color: 'black .55',
    maxWidth: 'G1',
    padding: 'X 0 0 0',
    style: { textAlign: 'center' }
  }
}

export const TextArea = {
  extend: Flex,
  props,

  heading,
  textArea,
  footerParagraph
}
