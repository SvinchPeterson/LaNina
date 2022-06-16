'use strict'

import { Box, Text, Link, Img } from '@symbo.ls/symbols'

import { SocialMedia } from '../SocialMedia'

import MAIL_PNG from '../../assets/icons/mail.png'

const mail = {
  proto: Box,
  icon: {
    proto: [Img, Box],
    props: {
      src: MAIL_PNG,
      boxSize: ' B'
    }
  }
}

export const Footer = {
  proto: Box,
  props: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    flexAlign: 'center space-between',
    padding: 'A C B C'
  },
  style: {
    zIndex: '100',
    mixBlendMode: 'difference'
  },
  SocialMedia,
  mail
}
