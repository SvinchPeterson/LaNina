'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import { Logo, Logo2 } from '../../components'
import SOLOLAKI_JPG from '../../assets/images/CoverPage/sololaki.jpg'
import RUSTAVELI_JPG from '../../assets/images/CoverPage/rustaveli.jpg'

import style, { styleLink, styleLogo, styleHeading, styleUnderConstruction } from './style'

const logo = {
  proto: Logo,
  props: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  class: [styleLogo],
  style: { '@media only screen and (min-width: 1024px)': { opacity: 1 } }
}

const logo2 = {
  proto: Logo2,
  props: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  class: [styleLogo],
  style: { '@media only screen and (max-width: 1024px)': { opacity: 1 } }
}

const link = {
  proto: [Link, Box],
  class: [styleLink]
}
const Heading = {
  tag: 'h4',
  proto: [Text, Box],
  class: [styleHeading],
  props: {
    color: 'cream .65'
  }
}

const Sololaki = {
  proto: link,
  props: { href: '/Sololaki' },
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .85)),url(' + SOLOLAKI_JPG + ')',
    '@media only screen and (min-width: 1024px)': {
      cursor: 'pointer',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      '&:hover': {
        backgroundPosition: 'top left -100px',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .45)),url(' + SOLOLAKI_JPG + ')'
      }
    }
  },

  heading: {
    proto: Heading,
    props: {
      text: 'sololaki'
    },

    style: {
      '@media only screen and (min-width: 1024px)': {
        borderTopLeftRadius: `${40 / 16}em`,
        borderBottomLeftRadius: `${40 / 16}em`,
        padding: `${20 / 16}em ${10 / 16}em ${20 / 16}em ${20 / 16}em`
      }
    }
  }
}

const Rustaveli = {
  proto: link,
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .85)), url(' + RUSTAVELI_JPG + ')',
    '@media only screen and (min-width: 1024px)': {
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      '&:hover': {
        backgroundPosition: 'top left 100px',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .45)), url(' + RUSTAVELI_JPG + ')'
      }
    }
  },

  heading: {
    proto: Heading,
    props: {
      text: 'rustaveli',
      position: 'relative'
    },
    style: {
      '@media only screen and (min-width: 1024px)': {
        borderTopRightRadius: `${40 / 16}em`,
        borderBottomRightRadius: `${40 / 16}em`,
        padding: `${20 / 16}em ${20 / 16}em ${20 / 16}em ${10 / 16}em`
      },
      '@media only screen and (max-width: 1024px)': {
        display: 'flex',
        flexFlow: 'column-reverse',
        alignItems: 'center',
        gap: `${10 / 30}em`

      }
    },
    underConstruction: {
      tag: 'span',
      proto: [Text, Box],
      class: [styleUnderConstruction],
      props: {
        text: 'under construction',
        color: 'orange'
      }
    }
  }
}

export default {
  proto: Box,
  props: {
    position: 'relative'
  },
  style,

  Sololaki,
  Rustaveli,
  logo,
  logo2
}
