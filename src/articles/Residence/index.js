'use strict'
import { Block, Img } from '@rackai/symbols'

import { bbSololaki } from '../../texts'

import LUGGAGE_PNG from '../../assets/luggage.PNG'

import style, { styleResidenceOrigin } from './style'

const residenceOrigin = {
  tag: 'section',
  proto: Block,
  style: styleResidenceOrigin,
  props: {
    flexFlow: 'row'
  },
  image: {},
  p: {
    proto: bbSololaki
  }
}

export default {
  tag: 'article',
  proto: Block,
  attr: { id: 'residence' },
  style,
  props: {
    padding: 'G 0 F 0',
    flexFlow: 'column',
    gap: 'G'
  },

  residenceOrigin
}
