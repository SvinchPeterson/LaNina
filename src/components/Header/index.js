'use strict'
import { Block, Img, Text, Flex, Link, Shape, SVG } from '@rackai/symbols'

import style from './style'

import PHONE_SVG from '../../assets/phoneRight.svg'
import LOGO_PNG from '../../assets/logos.png'

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
    padding: 'B A2'
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
  proto: [SVG, Block],
  src: PHONE_SVG,
  props: {
    boxSize: 'A2 A2'
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
    padding: 'D 0 0 0'
  },

  check,

  menuIcon,
  book,
  call,
  langs
}
