'use strict'

import { $aboutUs } from '../../../texts/travel'

import { contact } from '../contact'

const props = {
  align: 'flex-start flex-start',
  minWidth: 'G1',
  maxWidth: 'H',
  gap: 'A1',
  position: 'relative',
  padding: 'B - - -',
  margin: '- C1 - -',
  title: {
    fontSize: 'E',
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: '-1px',
    padding: '- - Y -'
  },
  p: {
    gap: 'Z',
    letterSpacing: `${0.2 / 16}em`,
    style: {
      span: { fontWeight: '700' }
    }
  },

  contact: {
    margin: 'D - - A'
  }
}

export const article = {
  tag: 'article',
  props,

  title: { text: 'about us' },
  p: { extend: $aboutUs },
  contact: { extend: contact }
}
