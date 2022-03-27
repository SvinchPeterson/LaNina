'use strict'
import { Block, Flex, Img, Link, Text } from '@rackai/symbols'

import { Logo } from '../../components'
import { logoB } from '../../components/Logo'

import RUSTAVELI_LOAD_JPG from '../../assets/images/coverPage/rustaveliLoad.jpg'
import SOLOLAKI_LOAD_JPG from '../../assets/images/coverPage/sololakiLoad.jpg'

import RUSTAVELI_HOVER_JPG from '../../assets/images/coverPage/rustaveliHover.jpg'
import SOLOLAKI_HOVER_JPG from '../../assets/images/coverPage/sololakiHover.jpg'

import style, { styleLink, styleLogo, styleLogo2 } from './style'

const Sololaki = {
  proto: Link,
  class: [styleLink],
  props: { href: './Sololaki' },
  style: {
    backgroundImage: 'url(' + SOLOLAKI_LOAD_JPG + ')',
    '&:hover': {
      backgroundPosition: 'top left -100px',
      backgroundImage: 'url(' + SOLOLAKI_HOVER_JPG + ')'
    }
  }
}

const Rustaveli = {
  proto: Link,
  class: [styleLink],
  props: { href: './Rustaveli' },
  style: {
    backgroundImage: 'url(' + RUSTAVELI_LOAD_JPG + ')',
    '&:hover': {
      backgroundPosition: 'top left 100px',
      backgroundImage: 'url(' + RUSTAVELI_HOVER_JPG + ')'
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
