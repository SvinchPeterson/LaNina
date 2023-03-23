'use strict'

import { Input, Flex, Button } from 'smbls'

const props = {
  alignSelf: 'center',
  maxWidth: 'fit-content',
  flow: 'column',
  align: 'center flex-start',
  gap: 'A',
  padding: '- - D -',
  style: { '@media only screen and (max-height: 700px)': { paddingBottom: '0' } },
  childProps: {
    height: 'C+X1',
    minWidth: 'G',
    textAlign: 'center',
    background: 'transparent',
    border: 'solid, silver',
    borderWidth: '.5px',
    letterSpacing: '.5px',
    '@mobileS': { minWidth: 'F3' },
    style: {
      outline: 'none !important',
      '::placeholder': { letterSpacing: '2px' }
    }
  },

  sendButton: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '0',
    color: 'black .85',
    border: '.5px solid silver',
    height: 'fit-content',
    transition: 'color .3s ease-in-out, background .3s ease-in-out',
    childProps: { fontSize: `${14 / 16}em` }
    // ':hover': { color: 'black 1', background: 'black .05' }
  }
}

const sendButton = {
  extend: Button,

  attr: {
    type: 'submit'
  },
  on: {
    click: (event, element, state) => {
      state.update({ activeBookSent: true, activeBookSend: false })
    }
  },
  class: {
    show: (element, state) => state.activeBookSent
      ? {
        pointerEvents: 'none',
        background: 'black .05',
        '> div': { color: 'black' }
      }
      : { },

    show2: (element, state) => state.activeBookSend
      ? { transition: 'background 1.5s ease-in-out' }
      : { }
  },

  send: {
    class: {
      show: (element, state) => state.activeBookSend
        ? { display: 'block' }
        : { display: 'none' }
    }
  },

  sent: {
    class: {
      show: (element, state) => state.activeBookSent
        ? { display: 'block' }
        : { display: 'none' }
    }
  },

  props: {
    send: { text: 'send' },
    sent: { text: 'request sent' }
  }
}

export const BookingForm = {
  tag: 'form',
  extend: Flex,
  props,
  attr: {
    action: 'https://formspree.io/f/xpznvvzp',
    method: 'POST'
  },

  tour: {
    extend: Input,
    props: {
      fontWeight: '700',
      padding: '0',
      letterSpacing: '0',
      color: 'black .85',

      '@mobileS': { fontSize: `${14.5 / 16}em` },
      style: {
        pointerEvents: 'none',
        width: '100%',
        border: 'none'
      }
    },
    attr: { type: 'text', name: 'tour' }
  },

  fullName: {
    extend: Input,
    attr: { type: 'text', placeholder: 'full name', name: 'name' }
  },

  mail: {
    extend: Input,
    attr: { type: 'email', placeholder: 'Email', name: 'email' }
  },

  sendButton
}
