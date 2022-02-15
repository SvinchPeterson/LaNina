'use strict'
import { Block, Flex, Link, Text } from '@rackai/symbols'

import { LaninaBanner } from '../../components'

import RUSTAVELI_JPG from '../../assets/images/rustaveli.jpg'
import SOLOLAKI_JPG from '../../assets/images/sololaki.jpg'

import style from './style'

const link = {
  proto: [Link, Flex],
  style: {
  },
  image: {}
}

const heading = {
  tag: 'h3',
  proto: [Block, Text],
  props: {
    size: 'A',
    flexAlign: 'center center'
  }
}

const sololaki = {
  proto: link,
  props: { href: '/Sololaki' },

  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(243, 231, 219, .4), rgba(243, 231, 219, .3)), url(' + SOLOLAKI_JPG + ')',
      cursor: 'pointer'
    }
  },

  heading: {
    proto: heading,
    props: { text: 'sololaki' },
    style: {
      right: 0
    }
  }
}

const rustaveli = {
  proto: link,
  style: {
    '&:hover ~ span': { opacity: 1 },
    '&:not(:hover) ~ span': { transition: 'opacity .2s ease-in-out' }
  },

  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(243, 231, 219, .4), rgba(243, 231, 219, .3)),url(' + RUSTAVELI_JPG + ')',
      transformOrigin: 'left'
    }
  },

  heading: {
    proto: heading,
    props: { text: 'rustaveli' },
    style: {
      left: 0
    }
  }
}

const banner = {
  proto: LaninaBanner

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

  sololaki,
  rustaveli,
  banner,
  underConstruction
}
