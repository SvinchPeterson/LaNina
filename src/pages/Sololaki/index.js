'use strict'

import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import { Header } from '../../components'

import style, { styleBannerBackground } from './style'

const bannerBackground = {
  style: styleBannerBackground,
  banner: {}
}

export default {
  style,
  bannerBackground,
  Header,
  backgr: { style: { width: '100%', height: '1500px' } }
}
