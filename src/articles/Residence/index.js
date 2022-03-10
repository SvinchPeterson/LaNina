'use strict'
import { Block } from '@rackai/symbols'

import { bbSololaki } from '../../texts'

import commonStyle from '../style'
import style, { styleBBresidence } from './style'

const bbResidence = {
  tag: 'section',
  proto: Block,
  props: { flexAlign: 'flex-start center' },
  style: styleBBresidence,

  p: {
    proto: [Block, bbSololaki],
    props: {
      padding: 'E'
    }
  }
}

export default {
  tag: 'article',
  proto: Block,
  attr: { id: 'residence' },
  style,
  class: [commonStyle],
  props: {
    padding: 'F 0 0 E'
  },

  bbResidence
}
