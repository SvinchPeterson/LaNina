'use strict'

import { Box, Text, Link, Img } from '@symbo.ls/symbols'

import { SocialMedia } from '../SocialMedia'

import LOGO_PNG from '../../assets/icons/logo-white.png'

const logo = {
  proto: Box,
  icon: {
    proto: [Img, Box],
    props: {
      src: LOGO_PNG,
      boxSize: ' B2'
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
    padding: 'A C B C',
    '@mobileL': { padding: 'A B B B' }
  },
  style: {
    zIndex: '100',
    mixBlendMode: 'difference'
  },
  SocialMedia,
  logo
}
