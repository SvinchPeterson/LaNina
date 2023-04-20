'use strict'

import { $aboutUs } from '../../../texts/travel'

import { contact } from '../contact'

const props = {
  // align: 'flex-start flex-start',
  minWidth: 'G1',
  maxWidth: 'H',
  gap: 'A1',
  position: 'relative',
  padding: 'B - - -',
  margin: '- C1 - -',
  '@maxTabletS': {
    textAlign: 'center',
    margin: '0'
  },

  '@maxMobileM': { padding: 'B A - A' },

  title: {
    fontSize: 'D',
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: '-1px',
    padding: '- - Y -'
  },
  p: {
    fontSize: `${15 / 16}em`,
    gap: 'Z',
    letterSpacing: `${0.2 / 15}em`,
    style: {
      span: { fontWeight: '700' }
    }
  },

  contact: {
    margin: 'D - - A',
    '@maxTabletS': {display: 'none'}
  }
}

export const article = {
  tag: 'article',
  props,

  title: { text: 'about us' },
  p: { extend: $aboutUs },
  // contact: { extend: contact }
}
