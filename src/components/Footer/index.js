'use strict'

import { Box, Img } from '@symbo.ls/symbols'

import { SocialMedia } from '../SocialMedia'

import LOGO_PNG from '../../assets/icons/logo-white.png'

const logo = {
  proto: Box,
  icon: {
    proto: [Img, Box],
    props: {
      src: LOGO_PNG,
      boxSize: ' B2',
      '@mobileS': { boxSize: ' B1' }
    }
  },

  style: {
    opacity: '1',
    '&:hover': { opacity: 1 }
  }
}

export const Footer = {
  proto: Box,
  props: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    flexAlign: 'center space-between',
    padding: '0 D C D',
    '@mobileM': {
      padding: '0 B B B'
    }
  },
  style: {
    zIndex: '50',
    mixBlendMode: 'difference'
  },
  SocialMedia,
  logo
}
