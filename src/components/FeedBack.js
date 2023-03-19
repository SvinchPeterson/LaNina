'use strict'

import { Paragraph } from './Paragraph'

const props = {
  minWidth: `${464 / 16}em`,
  minHeight: 'G',
  gap: '0',
  border: 'solid, cream2 0',
  borderWidth: `${10 / 16}em`,

  content: {
    boxSize: '100% 100%',
    justifyContent: 'flex-start',
    padding: 'A B',
    border: 'solid, black .5',
    borderWidth: '.7px',
    round: 'B',

    title: { fontSize: 'D' },
    p: {
      fontSize: `${15.5 / 16}em`,
      margin: 'A - - Y',
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
}

export const FeedBack = {
  props,

  content: {
    extend: Paragraph,
    title: {},
    p: {},
    date: { tag: 'h6' }
  }
}
