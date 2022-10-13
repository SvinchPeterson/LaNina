'use strict'

import { Img, Link } from 'smbls'

import FACEBOOK_PNG from '../assets/icons/facebook-white.png'
import INSTAGRAM_PNG from '../assets/icons/instagram-white.png'

import { keyframes } from '@emotion/css'
import { Book } from './Book'

export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const socialLinks = {
  tag: 'nav',
  extend: Link,
  props: {
    flexAlign: 'center center',
    gap: 'C',
    style: { zIndex: '60' }
  },

  childExtend: {
    extend: Link,
    props: { target: '_blank' },

    icon: {
      extend: Img,
      props: {
        boxSize: 'B -',
        style: {
          '&:hover': { opacity: 1 }
        }
      }
    }
  },

  ...[
    {
      props: { href: `https://www.facebook.com/BBResidenceTbilisi` },
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
    flexAlign: 'center space-between',
    padding: '0 D2 C D2',
    style: {
      mixBlendMode: 'difference',
      zIndex: '60',
      animationName: opacity,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out',
      '@media only screen and (max-height: 800px)': {
        paddingBottom: `${30 / 16}em !important`
      },
      '@media only screen and (max-height: 650px)': { paddingBottom: `${20 / 16}em !important` }
    },
    '@mobileM': { padding: '0 C B1 C' },
    '@mobileS': { padding: '0 A1 A1 A1' }
  },

  socialLinks,
  Book
}
