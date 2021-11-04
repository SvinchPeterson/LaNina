'use strict'

import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import { Header, Banner } from '../../components'
import { logo } from '../Landing'

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
    },
    style: { letterSpacing: '2px' }
  }
}

const bannerBackground = {
  style: styleBannerBackground,
  bannerImg: {},
  banner
}

export default {
  style,
  bannerBackground,
  Header,
  bs: {
    style: {
      width: '100%',
      height: '600px'
    }
  }
}
