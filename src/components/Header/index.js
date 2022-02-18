'use strict'
import { Block, Text, Flex, Shape, SVG } from '@rackai/symbols'

import style from './style'

import PHONE_PNG from '../../assets/phoneRight.svg'

const check = {
  tag: 'input',
  attr: {
    type: 'checkbox',
    id: 'toggle'
  }
}

const menuIcon = {
  tag: 'label',
  attr: { for: 'toggle' },
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: 'Y',
    padding: 'A1 A'
  },

  on: {
    click: (event, element, state) => {
      state.active ? state.update({ active: false }) : state.update({ active: true })
    }
  },

  childProto: {
    proto: [Block, Shape],
    props: {
      round: 'A'
    }
  },

  ...[
    { props: { width: 'A2' } },
    { props: { width: 'A2' } },
    { props: { width: 'A2' } }
  ]
}

const langs = {
  proto: Block,
  props: {
    flexFlow: 'column',
    flexAlign: 'flex-start center',
    gap: 'A'
  },

  childProto: {
    proto: [Text, Block],
    props: {
      padding: '0 0 A 0'
    }
  },

  ...[
    { props: { text: 'en' } },

    { props: { text: 'ru' } }
  ]
}

const call = {
  tag: 'span',
  proto: Block,
  props: {
    boxSize: 'A2 A2',
    padding: '20px'
  },

  svg: {
    proto: [SVG, Block],
    src: PHONE_PNG,
    props: { boxSize: 'A1 A1' }
  }
}

const book = {
  tag: 'button',
  proto: [Block, Text],
  props: {
    text: 'book',
    size: 'B'
  }
}

export default {
  tag: 'header',
  style,
  proto: [Block, Flex],
  props: {
    flexAlign: 'center center',
    gap: 'F',
    padding: 'B 0'
  },

  check,

  menuIcon,
  book,
  call,
  langs
}
