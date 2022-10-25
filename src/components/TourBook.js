'use strict'

import { Flex, Button, Input } from 'smbls'

const props = {
  round: 'C',
  gap: 'Z',
  alignItems: 'center',

  book: {
    border: '1px solid gray',
    padding: 'A -',
    width: 'E2',
    fontSize: `${12 / 16}em`,
    fontWeight: '700',
    color: 'cream2',
    textTransform: 'uppercase',
    opacity: '.85',
    ':hover': { opacity: '1' },
    span: { text: 'book' },
    booked: { text: 'booked' },
    '@mobileS': { fontSize: `${10 / 16}em` }
  },

  email: {
    placeholder: 'type email',
    background: 'transparent',
    color: 'cream2',
    border: 'none',
    outline: 'none',
    minHeight: '100%',
    fontSize: 'Z',
    padding: 'Z A',
    style: {
      textAlign: 'center',
      outline: 'none',
      letterSpacing: '1px'
    }
  },

  paragraph: {
    text: 'received your request !',
    color: '#66e394',
    fontSize: 'Z'
  }
}

export const TourBook = {
  extend: Flex,
  props,

  book: {
    extend: Button,
    span: {},
    booked: {}
  },

  email: {
    extend: Input,
    attr: {
      type: 'email',
      id: 'email'
    },
    style: { outline: 'none !important' }
  },

  paragraph: {}
}
