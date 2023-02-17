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
  p: {
    gap: 'Z',
    letterSpacing: `${0.2 / 16}em`,
    style: {
      span: { fontWeight: '700' }
    }
  }
}

export const paragraph = {
  extend: Paragraph,
  props,

  title: { text: 'about us' },
  p: { extend: aboutText }
}
