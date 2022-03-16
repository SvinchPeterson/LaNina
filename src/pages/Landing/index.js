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
  proto: Block,
  props: { flexAlign: 'center center' },
  span: {
    proto: Text
  }
}

const sololaki = {
  proto: link,
  props: { href: '/Sololaki' },
  style: {
    '> div': { borderRight: '0px solid black' },
    '&:hover': {
      '> div': { borderRight: '5px solid black' },
      '> h3': {
        borderTopLeftRadius: '250px',
        borderBottomLeftRadius: '250px'
      }
      // borderTop: '45px solid black'
    }
  },
  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .65)),url(' + SOLOLAKI_JPG + ')'
    }
  },

  heading: {
    proto: heading,
    span: { props: { text: '' } },

    style: {
      right: '0',
      borderTopLeftRadius: '200px',
      borderBottomLeftRadius: '200px',
      border: '100px solid black',
      borderRight: 'none',
      '> span': {
        borderTopLeftRadius: '200px',
        borderBottomLeftRadius: '200px',
        '&::before': {
          content: '"sololaki"',
          right: '25px'
        }
      }
    }
  }

}

const rustaveli = {
  proto: link,
  style: {
    '> div': { borderLeft: '0px solid black' },
    '> h3': {
      borderTopRightRadius: '250px',
      borderBottomRightRadius: '250px'
    },
    '&:hover': {
      // borderTop: '45px solid black',
      '> div': { borderLeft: '5px solid black' },
      '~ span': { opacity: 1 }
    }
  },

  image: { style: { backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .65)),url(' + RUSTAVELI_JPG + ')' } },
  heading: {
    proto: heading,
    span: {
      props: { text: '' }
    },
    style: {
      borderTopRightRadius: '200px',
      borderBottomRightRadius: '200px',
      border: '100px solid black',
      borderLeft: 'none',

      '> span': {
        borderTopRightRadius: '150px',
        borderBottomRightRadius: '150px',
        '&::before': {
          content: '"rustaveli"',
          left: '25px'
        }
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

export default {
  proto: [Block, Flex],
  style,

  Logo,
  sololaki,
  rustaveli,
  underConstruction
}
