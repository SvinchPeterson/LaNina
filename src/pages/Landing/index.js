'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import { Logo, Logo2 } from '../../components'
import SOLOLAKI_JPG from '../../assets/images/CoverPage/sololaki.jpg'
import RUSTAVELI_JPG from '../../assets/images/CoverPage/rustaveli.jpg'

import style, { styleLink } from './style'

const link = {
  proto: [Link, Box],
  class: [styleLink]
}

const Sololaki = {
  proto: link,
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .85)),url(' + SOLOLAKI_JPG + ')',
    '@media only screen and (min-width: 1024px)': {
      '&:hover': {
        backgroundPosition: 'top left -100px',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .35)),url(' + SOLOLAKI_JPG + ')'
      }
    }
  }
}

const Rustaveli = {
  proto: link,
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .85)), url(' + RUSTAVELI_JPG + ')',
    '@media only screen and (min-width: 1024px)': {
      '&:hover': {
        backgroundPosition: 'top left 100px',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .35)), url(' + RUSTAVELI_JPG + ')'
      }
    }
  }
}

export default {
  proto: Box,
  style,

  Sololaki,
  Rustaveli
}
