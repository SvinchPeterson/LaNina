'use strict'

import { Box, Img, Link } from '@symbo.ls/symbols'

import FACEBOOK_PNG from '../../assets/icons/facebook-white.png'
import INSTAGRAM_PNG from '../../assets/icons/instagram-white.png'
import LOGO_PNG from '../../assets/icons/logo-white.png'

const logo = {
  proto: Box,
  style: {
    opacity: '1',
    '&:hover': { opacity: 1 }
  },

  icon: {
    proto: [Img, Box],
    props: {
      src: LOGO_PNG,
      boxSize: ' B2',
      '@mobileS': { boxSize: ' B1' }
    }
  }
}

const links = {
  tag: 'nav',
  proto: [Link, Box],
  props: {
    flexAlign: 'center center',
    gap: 'C'
  },

  childProto: {
    proto: Link,
    props: { target: '_blank' },

    icon: {
      proto: [Img, Box],
      props: { boxSize: ' B' },
      style: {
        opacity: '.75',
        '&:hover': { opacity: 1 }
      }
    }
  },

  ...[
    {
      props: { href: `https://www.facebook.com/laninaresidence` },
      icon: { props: { src: FACEBOOK_PNG } }
    },

    {
      props: { href: 'https://www.instagram.com/laninaresidence/' },
      icon: {
        props: { src: INSTAGRAM_PNG },
        style: { opacity: '.65' }
      }
    }
  ]
}

export const Footer = {
  proto: Box,
  props: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    flexAlign: 'center space-between',
    padding: '0 C B C',
    '@mobileM': { padding: '0 B B B' }
  },
  style: {
    zIndex: '50',
    mixBlendMode: 'difference'
  },

  links,
  logo
}
