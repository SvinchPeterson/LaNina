'use strict'

import { Img, Link } from 'smbls'

import FACEBOOK_PNG from '../assets/icons/facebook-white.png'
import INSTAGRAM_PNG from '../assets/icons/instagram-white.png'
import { Book } from './Book'

const socialLinks = {
  tag: 'nav',
  proto: Link,
  props: {
    flexAlign: 'center center',
    gap: 'C'
  },

  childProto: {
    proto: Link,
    props: { target: '_blank' },

    icon: {
      proto: Img,
      props: {
        boxSize: 'B -',
        css: {
          // opacity: '.9',
          '&:hover': { opacity: 1 }
        }
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
        style: { opacity: '.9' }
      }
    }
  ]
}

export const Footer = {
  props: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    flexAlign: 'flex-start space-between',
    padding: 'B2 C1',
    css: {
      zIndex: '50',
      mixBlendMode: 'difference'
    },
    '@mobileM': { padding: '0 C B1 C' },
    '@mobileS': { padding: '0 A1 A1 A1' }
  },

  socialLinks,
  Book
}
