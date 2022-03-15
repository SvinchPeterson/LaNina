'use strict'
import { Block, Flex, Img, Link, Text, SVG } from '@rackai/symbols'

import { Logo } from '../../components'

import RUSTAVELI_JPG from '../../assets/images/rustaveli.jpg'
import SOLOLAKI_JPG from '../../assets/images/sololaki.jpg'

import style from './style'

const link = {
  proto: [Link, Flex],
  image: {}
}

// const Logo = {
//   proto: SVG,
//   src: LOGO_PNG,
//   style: {
//     position: 'absolute',
//     zIndex: 100,
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%) scale(1)'
//   }
// }

const heading = {
  tag: 'h3',
  proto: [Block, Text],
  props: {
    flexAlign: 'center center'
  },
  span: { proto: Text }
}

const sololaki = {
  proto: link,
  props: { href: '/Sololaki' },
  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .65)),url(' + SOLOLAKI_JPG + ')',
      cursor: 'pointer'
    }
  },

  heading: {
    proto: heading,
    span: {
      props: { text: 'sololaki' },
      style: { marginRight: '80px' }
    },

    style: {
      borderBottomLeftRadius: '200px',
      borderTopLeftRadius: '200px',
      right: 0,
      '@media only screen and (max-width: 1000px)': {
        bottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: '200px',
        borderTopRightRadius: '200px',
        left: '50%',
        '> span': { marginRight: 0 }
      }
    }
  }
}

const rustaveli = {
  proto: link,
  style: {
    borderLeft: '0px solid rgba(168, 98, 63, 0)',
    '&:hover': {
    },
    '&:hover ~ span': { opacity: 1 },
    '&:not(:hover) ~ span': { transition: 'opacity .2s ease-in-out' }
  },

  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .4)),url(' + RUSTAVELI_JPG + ')',
      transformOrigin: 'left'
    }
  },

  heading: {
    proto: heading,
    style: {
      borderBottomRightRadius: `${200 / 16}em`,
      borderTopRightRadius: `${200 / 16}em`,
      marginLeft: `${50 / 16}em`,

      '@media only screen and (max-width: 1000px)': {
        right: '50%',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '200px',
        borderBottomLeftRadius: '200px',
        top: 0,
        '> span': { marginLeft: 0 }
      }
    },

    span: {
      props: { text: 'rustaveli' },
      style: { marginLeft: '80px' }
    }
  }
}

// const banner = {
//   proto: BBbanner

// }

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
