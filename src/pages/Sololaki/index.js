'use strict'

import { Block, Text, Flex } from '@rackai/symbols'

import { Story, Apartment, Services, Contact } from '../../sections'

import { Header, Menu } from '../../components'

import style from './style'

const bannerHeading = {
  proto: Block,
  props: {
    flexFlow: 'column',
    flexAlign: 'center flex-start'
  },

  h2: {
    proto: Text,
    props: {
      text: 'La Nina Residence',
      size: 'G'
    }
  },
  span: {
    proto: Text,
    props: {
      text: 'sololaki',
      size: 'C'
    }
  },
  p: {
    proto: [Block, Text],
    props: {
      text: 'We are ordinary, becoming extraordinary',
      size: 'B',
      padding: 'C 0 0 0'
    }
  }
}

const banner = {
  proto: [Block, Flex],

  image: { tag: 'span' },
  bannerHeading

}

export default {
  style,
  state: {
    active: true,
    actives: 0
  },

  banner,
  Header,
  Menu,
  Story,
  Apartment,
  Services,
  Contact
}
