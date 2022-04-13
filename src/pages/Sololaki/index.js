'use strict'

import { Box, Text, Img, Link } from '@symbo.ls/symbols'

import { Header, Menu } from '../../components'

import { Residence, Apartments, Wine, Location } from '../../articles'

import LOGO_PNG from '../../assets/icons/logo.png'

import style, { styleBanner } from './style'

const book = {
  proto: [Link, Box],
  style: {
    borderTopRightRadius: `${80 / 16}em`,
    borderBottomRightRadius: `${80 / 16}em`,
    zIndex: 10,
    cursor: 'pointer',
    textDecoration: 'none'
  },
  props: {
    position: 'fixed',
    top: '43%',
    background: 'green',
    flexFlow: 'column',
    padding: 'B C B A2',
    href: `https://www.airbnb.com/users/404104381/listings?fbclid=IwAR3RqnCcBkIXwGaJauHmAlgdNYGa9ASOcUMk7ph2i1XBqDG0DqvOMx7XnrM`,
    target: '_blank'
  },
  image: {
    proto: [Img, Box],
    props: {
      src: LOGO_PNG,
      boxSize: 'C1'
    }
  },
  ook: {
    proto: [Text, Box],
    props: {
      text: 'ook',
      size: 'C',
      color: 'cream'
    },
    style: { textTransform: 'uppercase' }
  }
}

export const banner = {
  proto: Box,
  class: [styleBanner],
  props: {
    boxSize: '100% 100%',
    flexAlign: 'center center',
    flexFlow: 'column',
    gap: 'B'
  },

  heading: {
    proto: Box,
    props: {
      flexFlow: 'column',
      flexAlign: 'center flex-start',
      color: 'cream',
      gap: 'Z'
    },

    h1: {
      proto: Text,
      props: {
        text: 'bb residence',
        size: 'H'
      }
    },
    h3: {
      proto: Text,
      props: {
        text: 'sololaki',
        size: 'D'
      }
    }
  },

  p: {
    proto: [Text, Box],
    props: {
      text: 'where ordinary, becomes extraordinary',
      size: 'C',
      color: 'orange2'
    }
  }
}

export default {
  state: {
    activeLang: 0,
    activeMenu: true,
    activeMenuItem: 0,
    activeTab: 0,
    offers: true
  },

  proto: Box,
  style,
  props: {
    background: 'cream',
    position: 'relative'
  },

  banner,
  Header,
  Menu,
  book,

  Residence,
  Apartments,
  Wine,
  Location
}
