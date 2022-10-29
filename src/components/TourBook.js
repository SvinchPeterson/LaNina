'use strict'

import { Flex, Button, Input, Img } from 'smbls'

import TICK_PNG from '../assets/icons/tick.png'

const props = {
  round: 'C',
  gap: 'Z',
  alignItems: 'center',
  '@mobileXS': { gap: 'Y' },

  book: {
    border: '1px solid gray',
    padding: 'Z2 -',
    width: 'E2',
    fontSize: `${12 / 16}em`,
    fontWeight: '700',
    color: 'cream2',
    textTransform: 'uppercase',
    opacity: '.85',
    ':hover': { opacity: '1' },
    span: { text: 'book' },
    booked: {
      align: 'center center',
      gap: 'B',
      color: '#AFFFD2',
      span: { text: 'booked' },
      icon: {
        src: TICK_PNG,
        boxSize: ' A1',
        margin: '- - - Z'
      }
    },
    '@mobileS': { fontSize: `${10 / 16}em` }
  },

  email: {
    // border: '1px solid red',
    placeholder: '. . . email',
    background: 'transparent',
    color: 'cream2',
    // position: 'relative',
    // border: 'none',
    outline: 'none',
    minHeight: '100%',
    fontSize: 'Z',
    padding: 'Z A',
    width: 'F',
    '@mobileS': { padding: 'Y Z', width: 'E' },
    style: {
      textAlign: 'center',
      outline: 'none',
      letterSpacing: '1px',
      overflowX: 'auto'
    }
  }
}

export const TourBook = {
  extend: Flex,
  props,

  book: {
    extend: Button,
    span: {},
    booked: {
      extend: Flex,
      span: {},
      icon: { extend: Img }
    }
  },

  email: {
    extend: Input,
    attr: {
      type: 'email',
      id: 'email'
    },
    style: { outline: 'none !important' }
  }
}
