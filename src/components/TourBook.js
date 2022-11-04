'use strict'

import { Flex, Button, Input, Img } from 'smbls'

import TICK_PNG from '../assets/icons/tick.png'

const props = {
  round: 'C',
  gap: 'Z',
  height: 'B2',
  border: '1px solid red',
  form: {
    border: '2px solid red',
    height: '100%',
    childProps: {
      height: '100%'
    }

  }
}

const form = {
  tag: 'form',
  attr: {
    // action: 'mailto:svinchy@gmail.com',
    method: 'post',
    enctype: 'text/plain'
  },

  book: { text: 'book' },

  input: {
    attr: {
      type: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'type mail'
    }
  },

  input2: {
    tag: 'input',
    attr: {
      type: 'password',
      id: 'password',
      placeholder: 'password'
    }
  }

  // input3: {
  //   tag: 'input',
  //   attr: {
  //     type: 'submit',
  //     id: 'password'
  //   }
  // }
}

export const TourBook = {
  extend: Flex,
  props,
  book: { exend: Button },
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
