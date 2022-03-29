'use strict'
import { Block, Link, Text } from '@rackai/symbols'

import { Logo } from '../../components'
import { logoB } from '../../components/Logo'

import RUSTAVELI_LOAD_JPG from '../../assets/images/coverPage/rustaveliLoad.jpg'
import SOLOLAKI_LOAD_JPG from '../../assets/images/coverPage/sololakiLoad.jpg'

import RUSTAVELI_HOVER_JPG from '../../assets/images/coverPage/rustaveliHover.jpg'
import SOLOLAKI_HOVER_JPG from '../../assets/images/coverPage/sololakiHover.jpg'

import style, { styleLink, styleLogo, styleLogo2, styleheading } from './style'

const heading = {
  tag: 'h3',
  proto: [Block, Text],
  props: { size: 'B' },
  class: [styleheading]
}

const Sololaki = {
  proto: [Link, Block],
  class: [styleLink],
  props: {
    href: './Sololaki'
  },
  style: {
    backgroundImage: 'radial-gradient(rgba(42, 81, 61, .4), rgba(42, 81, 61, .5), rgba(0, 0, 0, .5)),url(' + SOLOLAKI_LOAD_JPG + ')',
    '@media only screen and (min-width: 1225px)': {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      '&:hover': {
        backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .3)),url(' + SOLOLAKI_HOVER_JPG + ')',
        backgroundPosition: 'top left -100px'
      },

      '> h3': { padding: `0 ${10 / 18}em ${70 / 18}em 0` }
    }
  },
  caption: {
    proto: heading,
    props: { text: 'sololaki' }
  }
}

const Rustaveli = {
  proto: [Link, Block],
  class: [styleLink],
  props: {
    // href: './Rustaveli',
  },
  style: {
    backgroundImage: 'radial-gradient(rgba(42, 81, 61, .4), rgba(42, 81, 61, .5), rgba(0, 0, 0, .5)), url(' + RUSTAVELI_LOAD_JPG + ')',
    cursor: 'auto',
    '@media only screen and (min-width: 1225px)': {
      alignItems: 'flex-end',
      justifyContet: 'flex-start',

      '&:hover': {
        backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .3)),url(' + RUSTAVELI_HOVER_JPG + ')',
        backgroundPosition: 'top left 100px'
      },
      '> h3': { padding: `0 0 ${70 / 18}em ${10 / 18}em` }
    }
  },
  caption: {
    proto: heading,
    text: 'rustaveli',
    span: {
      proto: Text,
      props: {
        text: 'under construction',
        size: 'Z'
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
    underConstruction: false
  },

  Sololaki,
  Rustaveli,
  logo,
  logo2
}
