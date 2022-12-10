'use strict'

import { Input, Flex } from 'smbls'

const props = {
  alignSelf: 'center',
  maxWidth: 'fit-content',
  flow: 'column',
  gap: 'A',
  padding: '- - D -',
  childProps: {
    height: 'C+X1',
    width: 'G',
    textAlign: 'center',
    background: 'transparent',
    border: 'solid, silver',
    borderWidth: '.5px',
    letterSpacing: '.5px',
    '@mobileS': { width: 'F2' },
    '@mobileXS': { width: 'F1' },
    style: {
      outline: 'none !important',
      '::placeholder': { letterSpacing: '2px' }
    },
    ':last-child': {
      cursor: 'pointer',
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: '.5px',
      color: 'black .7',
      alignSelf: 'center',
      transition: 'color .3s ease-in-out, background .3s ease-in-out',
      ':hover': { color: 'black 1', background: 'black .05' }
    }
  }
}

export const BookingForm = {
  tag: 'form',
  extend: Flex,
  props,

  childExtend: Input,
  ...[
    { attr: { type: 'email', placeholder: 'Email' } },
    { attr: { type: 'password', placeholder: 'Password' } },
    { attr: { type: 'submit', value: 'send' } }
  ]
}
