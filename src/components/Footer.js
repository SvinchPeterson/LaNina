'use strict'

import { Img, Link } from 'smbls'

import { opacity } from '../animations'

import FACEBOOK_PNG from '../assets/icons/facebook-white.png'
import INSTAGRAM_PNG from '../assets/icons/instagram-white.png'

import { Book } from './Book'

const props = {
  width: '100%',
  position: 'fixed',
  bottom: '0',
  flexAlign: 'center space-between',
  padding: '0 D2 C D2',
  zIndex: '7',
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
    animationDuration: '5s',
    '@media only screen and (max-height: 800px)': {
      paddingBottom: `${30 / 16}em !important`
    },
    '@media only screen and (max-height: 650px)': { paddingBottom: `${20 / 16}em !important` }
  },
  '@mobileL': { padding: '- B A B' },

  socialLinks: {
    flexAlign: 'center center',
    gap: 'C',
    style: { zIndex: '60' },
    childProps: {
      target: '_blank',
      icon: {
        boxSize: 'B -',
        style: {
          '&:hover': { opacity: 1 }
        }
      }
    }

  }

}
export const Footer = {
  props,

  socialLinks: {
    childExtend: { extend: Link, icon: { extend: Img } },

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
  },

  Book
}
