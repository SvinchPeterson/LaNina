
'use strict'

import { aboutText } from '../../../texts'
import { Paragraph } from '../../../components'

const props = {
  align: 'flex-start flex-start',
  minWidth: 'G1',
  maxWidth: 'H',
  gap: 'A1',
  position: 'relative',
  padding: 'B - - -',
  margin: '- C1 - -',
  '@tabletL': {
    maxWidth: 'H1',
    margin: '0',
    minHeight: 'fit-content'
  },
  '@mobileS': { minWidth: '100%' },
  title: {
    text: 'about us',
    fontSize: 'A'
  },
  p: {
    gap: 'Z',
    fontSize: 'A',
    style: {
      span: { fontWeight: '700' }
    },
    '@mobileS': { fontSize: `${15 / 16}em` }
  }
}

export const paragraph = {
  extend: Paragraph,
  props,

  title: {},
  p: { extend: aboutText }
}
