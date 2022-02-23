'use strict'

import { Block, Flex } from '@rackai/symbols'

import { Story, Apartment, Services } from '../../sections'

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
  }

}

export default {
  style,
  state: {
    active: true,
    activeLink: 0,
    activeImage: 0,
    offers: true
  },

  banner,
  Header,
  Menu,
  Story,
  Apartment,
  Services
}
