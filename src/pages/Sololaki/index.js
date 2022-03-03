'use strict'

import { Block, Flex, Text } from '@rackai/symbols'

import { Story, Apartment, Services, Location } from '../../sections'

import { Header, Menu, BBbanner } from '../../components'

import style from './style'

const banner = {
  proto: [Block, Flex],

  image: { tag: 'span' },
  bbBanner: {
    proto: BBbanner,
    caption: {},
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
  Story,
  Apartment,
  Location
}
