'use strict'

import { Block, Text } from '@rackai/symbols'

import { Header, Banner, Article } from '../../components'

import style, { styleBannerBackground, styleBanner } from './style'

const banner = {
  proto: Banner,
  class: [styleBanner],
  h4: {
    props: {
      size: 'G',
      text: 'La Nina Residence'
    }
  },

  span: {
    props: {
      text: 'sololaki',
      size: 'B'
    }
  },

  p: {
    proto: [Text, Block],
    props: {
      text: 'Be inspired by old city',
      size: 'B',
      spacing: 'A 0 0 0'
    }
  }
}

const bannerBackground = {
  style: styleBannerBackground,
  bannerImg: {},
  banner
}

const articles = {
  childProto: {
    proto: Article
  },
  ...[
    {}
  ]
}

export default {
  style,
  bannerBackground,
  Header,
  articles
}
