'use strict'

import { Paragraph } from './Paragraph'

const props = {
  minWidth: `${464 / 16}em`,
  height: 'F3',
  gap: '0',
  border: 'solid, cream 0',
  borderWidth: `${12 / 16}em`,
  style: {fontStyle: 'italic'},

  content: {
    boxSize: '100% 100%',
    justifyContent: 'flex-start',
    padding: 'Z1 A2',
    border: 'solid, black .5',
    borderWidth: '.7px',
    round: 'A2',

    title: {
      fontSize: 'C',
      letterSpacing: `${-1 / 23}em`
    },

    p: {
      fontSize: `${14.5 / 16}em`,
      margin: 'Z - - Y',
      letterSpacing: `${0.25 / 14.5}em`,
      color: 'black .65',
      lineHeight: `${21 / 14.5}em`
    },

    date: {
      margin: 'auto - - -',
      alignSelf: 'flex-end',
      fontSize: `${11 / 16}em`,
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: `${1 / 11}em`,
      opacity: '.85'
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
