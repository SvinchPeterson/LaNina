'use strict'
import { Block, Link, Text } from '@rackai/symbols'

import { Logo } from '../../components'
import { logoB } from '../../components/Logo'

import RUSTAVELI_LOAD_JPG from '../../assets/images/coverPage/rustaveliLoad.jpg'
import SOLOLAKI_LOAD_JPG from '../../assets/images/coverPage/sololakiLoad.jpg'

import RUSTAVELI_HOVER_JPG from '../../assets/images/coverPage/rustaveliHover.jpg'
import SOLOLAKI_HOVER_JPG from '../../assets/images/coverPage/sololakiHover.jpg'

import style, { styleLink, styleLogo, styleLogo2, styleheading } from './style'

const Sololaki = {
  proto: Link,
  class: [styleLink],
  props: { href: './Sololaki' },
  style: {
    backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .45)),url(' + SOLOLAKI_LOAD_JPG + ')',
    '@media only screen and (min-width: 1225px)': {
      '&:hover': {
        backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .45)),url(' + SOLOLAKI_HOVER_JPG + ')',
        backgroundPosition: 'top left -100px'
      }
    }
  },

  heading: {
    tag: 'h3',
    proto: [Block, Text],
    props: { text: 'sololaki' },
    class: [styleheading],
    style: { right: `${10 / 18}em` }
  }
}

const Rustaveli = {
  proto: Link,
  class: [styleLink],
  props: { href: './Rustaveli' },
  style: {
    backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .45)), url(' + RUSTAVELI_LOAD_JPG + ')',
    cursor: 'auto',
    '@media only screen and (min-width: 1225px)': {
      '&:hover': {
        backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .3)),url(' + RUSTAVELI_HOVER_JPG + ')',
        backgroundPosition: 'top left 100px'
      }
    }
  },

  heading: {
    tag: 'h3',
    proto: [Block, Text],
    props: { text: 'rustaveli' },
    class: [styleheading],
    style: {
      left: `${10 / 18}em`,
      '&::after': {
        content: '"under construction"',
        display: 'block',
        color: '#DD7C4C',
        whiteSpace: 'nowrap',
        textTransform: 'lowercase',
        transition: 'opacity .5s ease-in-out',
        fontWeight: '500',
        fontSize: `${20 / 36}em`
      },
      '@media only screen and (min-width: 1225px)': {
        '&::after': {
          position: 'absolute',
          top: '25px',
          left: '2px',
          opacity: 0,
          fontSize: `${16 / 18}em`
        }
      }
    }
  }
}
const logo = {
  proto: Logo,
  style: styleLogo
}

const logo2 = {
  proto: logoB,
  style: styleLogo2
}

export default {
  proto: [Block],
  style,

  state: {
    activeSololaki: true,
    activeRustaveli: true
  },

  Sololaki,
  Rustaveli,
  logo,
  logo2
}
