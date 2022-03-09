'use strict'

import { Block, Flex, Text } from '@rackai/symbols'

import { Residence, Apartments, Location } from '../../articles'

import { Header, Menu, BBbanner } from '../../components'

import style from './style'

const banner = {
  proto: [Block, Flex],

  image: { tag: 'span' },
  bbBanner: {
    proto: BBbanner,
    logo: {},
    h5: {
      props: {
        text: 'sololaki',
        size: 'C'
      }
    }
  },
  p: {
    proto: Text,
    props: {
      text: 'where ordinary becomes extraordinary',
      size: 'B'
    }
  }
}

export default {
  proto: Block,
  props: {
    // flexFlow: 'column',
    // gap: 'F'
  },
  style,
  state: {
    active: true,
    activeLink: 0,
    activeImage: 0,
    offers: true,
    activeBallerina: true,
    activeRedBrick: true,
    activeYellowCouch: true
  },

  banner,
  Header,
  Menu,

  Residence,
  Apartments,
  Location
}
