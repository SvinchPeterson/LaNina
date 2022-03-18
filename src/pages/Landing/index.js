'use strict'
import { Block, Flex, Link, Text } from '@rackai/symbols'

import { Logo } from '../../components'
import { logoB } from '../../components/Logo'

import RUSTAVELI_JPG from '../../assets/images/rustaveli.jpg'
import SOLOLAKI_JPG from '../../assets/images/sololaki.jpg'

import style from './style'

const link = {
  proto: [Link, Flex],
  image: {}
}

const heading = {
  tag: 'h3',
  proto: Block,
  props: { flexAlign: 'center center' },
  span: {
    proto: Block,
    style: {
      width: '100px',
      height: '40px',
      background: 'red'
    }
  }

}

const sololaki = {
  proto: link,
  props: { href: '/Sololaki' },
  style: {
    '@media only screen and (min-width: 1024px)': {
      '> div': { borderRight: '0px solid rgba(0, 0, 0, 0)' },
      '&:hover': {
        '> div': { borderRight: '15px solid black' },
        '> h3': {
          // borderTopLeftRadius: '250px',
          // borderBottomLeftRadius: '250px'
        }
        // borderTop: '45px solid black'
      }

    }
  },
  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .35)),url(' + SOLOLAKI_JPG + ')',

      '@media only screen and (max-width: 1024px)': {
        backgroundPosition: 'top left'

      }
    }
  },

  heading: {
    proto: heading,
    style: {
      '@media only screen and (min-width: 1024px)': {
        right: '0',
        borderTopLeftRadius: '200px',
        borderBottomLeftRadius: '200px',
        border: '100px solid rgba(0, 0, 0, 0)',
        borderRight: 'none'
      },
      '@media only screen and (max-width: 1024px)': {
        bottom: 0,
        left: '7%'
      }
    }
  }
}
const underConstruction = {
  tag: 'span',
  proto: Text,
  props: {
    text: 'under construction'
  }
}

const rustaveli = {
  proto: link,
  style: {
    '> div': { borderLeft: '0px solid rgba(0, 0, 0, 1)' },
    '> h3': {
      borderTopRightRadius: '250px',
      borderBottomRightRadius: '250px'
    },
    '&:hover': {
      '@media only screen and (min-width: 1024px)': {
        '> div': { borderLeft: '15px solid rgba(0, 0, 0, 1)' },
        '~ span': { opacity: 1 }

      }
    }
  },

  image: { style: { backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .35)),url(' + RUSTAVELI_JPG + ')' } },
  heading: {
    proto: heading,
    style: {
      '@media only screen and (min-width: 1024px)': {
        borderTopRightRadius: '200px',
        borderBottomRightRadius: '200px',
        border: '100px solid rgba(0, 0, 0, 0)',
        borderLeft: 'none'
      },

      '@media only screen and (max-width: 1024px)': {
        top: '9px',
        right: '7%'

      }
    }

  }
}

export default {
  proto: [Block, Flex],
  style,

  Logo,
  logoB,
  sololaki,
  rustaveli,
  underConstruction
}
