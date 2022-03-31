'use strict'
import { Block, Text, Flex, Shape, SVG, Link } from '@rackai/symbols'

import style from './style'

import PHONE_PNG from '../../assets/icons/phoneRight.svg'

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
    proto: [Text, Block, Link],
    props: { padding: 'Y 0' },
    on: {
      click: (event, element, state) => {
        state.update({ activeLang: element.key })
        console.log(state.activeLang, element.key)
      }
    },

    class: {
      show: (element, state) => state.activeLang === element.key ? { color: 'rgba(244, 233, 217, .55)' } : { color: 'rgba(244, 233, 217, 1)' }
    }
  },

  ...[
    {
      props: { text: 'ქარ' },
      style: { fontFamily: 'BPG ExtraSquare Mtavruli' }
    },
    {
      props: { text: 'eng' }
    },

    {
      props: { text: 'rus' }
    }

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

export default {
  tag: 'header',
  style,
  proto: [Block, Flex],
  props: {
    flexAlign: 'center center',
    gap: 'E'
  },

  check,

  menuIcon,
  langs,
  call
}
