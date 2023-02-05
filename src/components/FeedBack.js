'use strict'

import { Paragraph } from './Paragraph'

const props = {
  minWidth: 'H',
  minHeight: 'G',
  border: 'solid, black .5',
  borderWidth: '.7px',
  round: 'B',
  gap: '0',
  justifyContent: 'flex-start',
  padding: 'A B',

  title: { fontSize: 'D' },
  p: {
    fontSize: `${15.5 / 16}em`,
    margin: 'A2 - - Y',
    letterSpacing: `${0.25 / 15.5}em`,
    color: 'black .65',
    lineHeight: `${23 / 15.5}em`
  },
  date: {
    margin: 'auto - - -',
    alignSelf: 'flex-end',
    fontSize: 'Z',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    style: { wordSpacing: `${5 / 13}em` }
  }
}

export const FeedBack = {
  extend: Paragraph,
  props,

  title: {},
  p: {},
  date: { tag: 'h6' }
}
