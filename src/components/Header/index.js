'use strict'
import { Block, Text, Flex, Shape, SVG, Link } from '@rackai/symbols'
import { logoB } from '../../components/Logo'

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
    boxSize: 'A2 A2',
    padding: 'A'
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

  ...[{}, {}, {}]
}

const langs = {
  proto: Block,
  props: {
    flexAlign: 'flex-start center',
    gap: 'Z2'
  },

  childProto: {
    proto: [Text, Block],
    props: { padding: 'Y 0' }
  },

  ...[
    { props: { text: 'ქარ' }, style: { fontFamily: 'BPG ExtraSquare Mtavruli' } },
    { props: { text: 'eng' } },

    { props: { text: 'rus' } }

  ]
}

const call = {
  tag: 'span',
  proto: Block,
  props: {
    boxSize: 'A2 A2',
    padding: 'A'
  },
  numb: {
    proto: Link,
    props: {
      href: 'https://api.whatsapp.com/send?phone=+995571017170',
      target: '_blank'
    },
    svg: {
      proto: [SVG, Block],
      src: PHONE_PNG,
      props: { boxSize: 'A1 A1' }
    }
  }
}

const book = {
  // tag: 'button',
  proto: [Link, Text, Block],
  props: {
    text: 'book',
    size: 'B',
    padding: 'Y2 B',
    href: `https://www.airbnb.com/users/404104381/listings?fbclid=IwAR3RqnCcBkIXwGaJauHmAlgdNYGa9ASOcUMk7ph2i1XBqDG0DqvOMx7XnrM`,
    target: '_blank'
  }
}

export default {
  tag: 'header',
  style,
  proto: [Block, Flex],
  props: {
    flexAlign: 'center center',
    gap: 'E',
    padding: 'C 0 A 0'
  },

  check,

  menuIcon,
  // book,
  langs,
  call
}
