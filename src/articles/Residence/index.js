'use strict'
import { Block, Text } from '@rackai/symbols'

import { bbSololaki } from '../../texts'

import LUGGAGE_PNG from '../../assets/luggage.PNG'

import style, { styleResidenceOrigin, styleEntrence } from './style'

const residenceOrigin = {
  tag: 'section',
  proto: Block,
  style: styleResidenceOrigin,
  props: {
    flexAlign: '0 center'
  },
  image: {},
  p: {
    proto: [bbSololaki, Block],
    props: { padding: 'F 0 E E' }
  }
}

const entrence = {
  tag: 'section',
  proto: Block,
  style: styleEntrence,
  props: { flexFlow: 'column' },
  image: {},
  p: {
    proto: [Block, Text]
  }
}

export default {
  tag: 'article',
  proto: Block,
  attr: { id: 'residence' },
  style,
  props: {
    padding: 'F 0 F 0',
    flexFlow: 'column',
    gap: 'G'
  },

  residenceOrigin,
  entrence
}
