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
      // backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .75), rgba(42, 81, 61, 1)), url(' + SOLOLAKI_JPG + ')',
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .75), rgba(0, 0, 0, .8)), url(' + SOLOLAKI_JPG + ')',
      cursor: 'pointer',
      '@media only screen and (max-width: 768px)': {

        backgroundPosition: 'bottom bottom'
      }
    }
  },

  heading: {
    proto: heading,
    props: { text: 'sololaki' },
    style: {
      right: 0,
      width: '95px'
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
      // backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .75), rgba(42, 81, 61, 1)),url(' + RUSTAVELI_JPG + ')',
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .75),rgba(0, 0, 0, .8)),url(' + RUSTAVELI_JPG + ')',
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
    props: { text: 'rustaveli' },
    style: {
      left: 0,
      width: '80px'
    }
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
