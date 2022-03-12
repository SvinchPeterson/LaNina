'use strict'
import { Block, Flex, Link, Text } from '@rackai/symbols'

import { BBbanner } from '../../components'

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
    // size: 'A',
    flexAlign: 'center center'
  }
}

const sololaki = {
  proto: link,
  props: { href: '/Sololaki' },

  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .3)),url(' + SOLOLAKI_JPG + ')',
      cursor: 'pointer',
      '@media only screen and (max-width: 768px)': {

        backgroundPosition: 'bottom bottom'
      }
    }
  },

  heading: {
    proto: heading,
    props: { text: 'sololaki' },
    style: { right: 0 }
  }
}

const rustaveli = {
  proto: link,
  style: {
    '&:hover ~ span': { opacity: 0.75 },
    '&:not(:hover) ~ span': { transition: 'opacity .2s ease-in-out' }
  },

  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .3)),url(' + RUSTAVELI_JPG + ')',
      transformOrigin: 'left',
      '@media only screen and (max-width: 768px)': {
        '&:hover': {
          backgroundPosition: 'bottom left'
        }
      }
    }
  },

  heading: {
    proto: heading,
    props: { text: 'rustaveli' }
  }
}

const banner = {
  proto: BBbanner

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
