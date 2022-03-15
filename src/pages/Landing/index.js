'use strict'
import { Block, Flex, Link, Text } from '@rackai/symbols'

import { Logo } from '../../components'

import RUSTAVELI_JPG from '../../assets/images/rustaveli.jpg'
import SOLOLAKI_JPG from '../../assets/images/sololaki.jpg'

import style from './style'

const link = {
  proto: [Link, Flex],
  image: {}
}

const heading = {
  tag: 'h3',
  proto: [Block, Text],
  span: { proto: Text }
}

const sololaki = {
  proto: link,
  props: { href: '/Sololaki' },
  style: {
    '&:hover': {
      borderRight: '40px solid black',
      borderTop: '45px solid black'
    }
  },

  image: { style: { backgroundImage: 'radial-gradient(rgba(244, 233, 217, .3), rgba(42, 81, 61, .8)),url(' + SOLOLAKI_JPG + ')' } }
}

const rustaveli = {
  proto: link,
  style: {
    '&:hover': {
      borderTop: '45px solid black',
      borderLeft: '40px solid black'
    }

  },

  image: { style: { backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .8)),url(' + RUSTAVELI_JPG + ')' } }
}

const underConstruction = {
  tag: 'span',
  proto: Text,
  props: {
    text: 'under construction'
  }
}

export default {
  proto: [Block, Flex],
  style,

  Logo,
  sololaki,
  rustaveli,
  underConstruction
}
