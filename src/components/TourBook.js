'use strict'
// background: '#1E5E6B',
import { Flex, Button, Input, Img } from 'smbls'

import TICK_PNG from '../assets/icons/tick.png'

const props = {
  round: 'C',
  gap: 'A',
  align: 'center flex-start',
  height: 'B2',
  '@mobileL': {
    flow: 'column',
    gap: 'A',
    align: 'flex-start flex-start'
  },
  book: {
    round: 'C',
    textTransform: 'uppercase',
    fontSize: 'Z',
    fontWeight: '700',
    background: 'transparent',
    // border: '.8px solid silver',
    color: 'cream2 .75',
    boxSize: 'C fit-content',
    padding: '- B1',
    transition: 'color .3s ease-in-out',
    ':hover': { color: 'cream2' },
    span: { text: 'book' },
    booked: {
      align: 'center center',
      gap: 'Z',
      color: '#0EB393',
      span: { text: 'booked', display: 'block' },
      icon: {
        src: TICK_PNG,
        boxSize: 'Z A'
      }
    }
  },
  form: {
    gap: 'Y',
    align: 'center center',
    margin: '0',
    border: '.5px solid silver',
    position: 'relative',
    round: 'C',
    ':after': {
      content: '""',
      boxSize: '70% U',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      round: 'A',
      background: 'radial-gradient(rgba(248, 241, 227, 1), rgba(248, 241, 227, 0))'
    },
    childProps: {
      boxSize: 'C E3',
      padding: '0 Y2',
      background: 'transparent',
      color: 'cream2 .75',
      round: '0',
      fontSize: '14px',
      // border: '.5px solid silver',
      style: {
        textAlign: 'center',
        outline: 'none !important',
        '::placeholder': { color: 'rgba(248, 241, 227, .4)', letterSpacing: '1px' }
      }
    }
  }
}

const form = {
  tag: 'form',
  extend: Flex,
  attr: {
    // action: 'mailto:svinchy@gmail.com',
    method: 'post',
    enctype: 'text/plain'
  },

  childExtend: {
    extend: Input
  },
  ...[
    {
      attr: {
        type: 'emain',
        id: 'email',
        name: 'emain',
        placeholder: 'email'
      }
    },
    {
      attr: {
        // type: 'password',
        id: 'pwd',
        name: 'pwd',
        placeholder: 'password'
      }
    }
  ]
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
  form

  // book: {
  //   extend: Button,
  //   span: {},
  //   booked: {
  //     extend: Flex,
  //     span: {},
  //     icon: { extend: Img }
  //   }
  // },

  // form: {

  // }
}
