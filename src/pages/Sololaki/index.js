'use strict'

import { Block, Flex, Text, Link } from '@rackai/symbols'

import { Residence, Apartments, Location } from '../../articles'
import { paddingOut, opacity } from '../../animations'

import { Header, Menu } from '../../components'

import { logoPng } from '../../components/Logo'

import style, { styleBanner } from './style'

const book2 = {
  proto: [Block, Link],
  props: {
    flexFlow: 'column',
    flexAlign: 'flex-start flex-start',
    href: `https://www.airbnb.com/users/404104381/listings?fbclid=IwAR3RqnCcBkIXwGaJauHmAlgdNYGa9ASOcUMk7ph2i1XBqDG0DqvOMx7XnrM`,
    target: '_blank'
  },
  style: {
    textDecoration: 'none',
    position: 'fixed',
    animationDuration: '1.5s',
    animationTimingFunction: 'ease-in-out',

    '@media only screen and (min-width: 768px)': {
      left: '0px',
      top: '35%',
      padding: '40px 40px 40px 20px',
      borderTopRightRadius: '100px',
      borderBottomRightRadius: '100px',
      animationName: paddingOut
    },
    '@media only screen and (max-width: 768px)': {
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '25px 60px 10px 60px',
      borderTopRightRadius: '100px',
      borderTopLeftRadius: '100px'

    },
    zIndex: '1002',
    transform: 'scale(1)',
    backdropFilter: 'blur(6px) brightness(100%)',
    background: 'rgba(42, 81, 61, .5)',

    color: 'rgba(244, 233, 217, .65)',
    fontSize: '19px',
    lineHeight: '25px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: '500',
    textOrientation: ' upLeft',
    '&:hover': { color: 'rgba(244, 233, 217, 1)' },
    '&:hover > img': { opacity: 1 }
  },
  logo: {
    proto: logoPng,
    style: {
      width: '45px',
      opacity: '.65',
      animationName: opacity,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out'
    }
  },
  text: 'ook'
}

const banner = {
  proto: [Block, Flex],
  style: styleBanner,

  image: { tag: 'span' },
  caption: {
    proto: [Text, Block],
    props: {
      flexFlow: 'column',
      flexAlign: 'center center'
    },
    text: 'bb residence',
    span: {
      proto: Text,
      props: {
        text: 'sololaki'
      }
    }
  },
  p: {
    proto: Text,
    props: { text: '"Where ordinary, becomes extraordinary"' }
  }
}

export default {
  proto: Block,
  style,
  state: {
    active: true,
    activeLink: 0,
    activeImage: 0,
    offers: true,
    activeBallerina: true,
    activeRedBrick: true,
    activeYellowCouch: true,

    activeLang: 0,
    activeMenuLink: 0
  },

  book2,
  banner,
  Header,
  Menu,

  Residence,
  Apartments
  // Location
}
