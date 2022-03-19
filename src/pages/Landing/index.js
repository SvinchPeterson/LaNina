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
  proto: [Block, Flex],

  style: {
    background: 'rgba(0, 0, 0, 0)',

    alignItems: 'center',
    opacity: 1,
    transition: 'all 1s ease-in-out',
    fontFamily: 'Helvetica',
    position: 'absolute',
    '&::before': {
      content: '""',
      position: 'absolute',
      opacity: 0.65,
      zIndex: 400,
      color: 'rgba(244, 233, 217, 1)',
      fontSize: '16px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      transition: 'all 1s ease-in-out'
    },
    '@media only screen and (min-width: 1024px)': {
      width: '200px',
      height: '220px',
      top: '60%'
      // position: 'absolute'

    },

    '@media only screen and (max-width: 1024px)': {
      border: '10px solid red',
      width: '200px',
      height: '80%'

    }
  },

  span: {
    proto: Block,
    style: {
      width: '50px',
      height: '80px',
      background: 'radial-gradient(rgba(42, 81, 61, 1), rgba(42, 81, 61, 1))',
      opacity: 0,
      display: 'block',
      transition: 'all 1s ease-in-out'
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
        '> div': { borderRight: '0px solid black' },
        '> h3::before': {
          right: '25px'
        }
      }
    }
  },
  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .65)),url(' + SOLOLAKI_JPG + ')',

      '@media only screen and (max-width: 1024px)': {
        backgroundPosition: 'top left'

      }
    }
  },
  heading: {
    proto: heading,
    style: {
      right: '0',
      borderTopLeftRadius: '250px',
      borderBottomLeftRadius: '250px',
      '&::before': {
        content: '"sololaki"',
        right: '15px'
      },
      '> span': {
        marginLeft: 'auto',
        borderTopLeftRadius: '100px',
        borderBottomLeftRadius: '100px'
      },

      '@media only screen and (max-width: 1024px)': {
        borderBottomLeftRadius: '0px',
        borderTopLeftRadius: '150px',
        borderToprightRadius: '150px',
        width: '400px'

      }
    }
  }
}
const underConstruction = {
  proto: Text,
  props: {
    text: 'under construction'
  }
}

const rustaveli = {
  proto: link,
  style: {
    '> div': { borderLeft: '0px solid rgba(0, 0, 0, 1)' },
    '&:hover': {
      '@media only screen and (min-width: 1024px)': {
        '> div': { borderLeft: '0px solid rgba(0, 0, 0, 1)' },
        '> h3::before': {
          left: '25px'
        },
        '~ span': { opacity: 1 }
      }
    }
  },

  image: { style: { backgroundImage: 'radial-gradient(rgba(244, 233, 217, .25), rgba(42, 81, 61, .65)),url(' + RUSTAVELI_JPG + ')' } },
  heading: {
    proto: heading,
    style: {
      borderTopRightRadius: '500px',
      borderBottomRightRadius: '500px',
      '&::before': {
        content: '"rustaveli"',
        left: '15px'
      },
      '> span': {
        marginRight: 'auto',
        borderTopRightRadius: '300px',
        borderBottomRightRadius: '300px'
      }
    },
    underConstruction
  }
}

export default {
  proto: [Block, Flex],
  style,

  Logo,
  logoB,
  sololaki,
  rustaveli
}
