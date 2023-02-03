'use strict'

import { Paragraph } from './Paragraph'

const props = {
  minWidth: 'H',
  minHeight: 'G',
  border: 'solid, black .5',
  borderWidth: '.7px',
  round: 'B2',
  gap: '0',
  justifyContent: 'flex-start',
  padding: 'A B',

  title: { fontSize: 'D' },
  p: {
    margin: 'A - - -',
    letterSpacing: `${0.25 / 16}em`,
    color: 'black .65'
  },
  date: {
    margin: 'auto - - -',
    alignSelf: 'flex-end',
    fontSize: 'Z',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
}

export const FeedBack = {
  extend: Paragraph,
  props,

  title: {},
  p: {},
  date: { tag: 'h6' }
}
