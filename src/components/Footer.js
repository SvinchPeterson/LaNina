'use strict'

import { Img, Link } from 'smbls'

import { opacity } from '../animations'

import FACEBOOK_PNG from '../assets/icons/facebook-white.png'
import INSTAGRAM_PNG from '../assets/icons/instagram-white.png'

import { Book } from './Book'

const props = {
  width: '80%',
  position: 'fixed',
  bottom: '0',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  flexAlign: 'center space-between',
  padding: '- - Z -',
  // height: 'C',
  zIndex: '50',
  '@mobileL': { padding: '0 B1' },
  '@mobileS': {
    padding: '0 A2',
    height: 'D2'
  },
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
    animationDuration: '5s',
    '@media only screen and (max-height: 450px)': { height: `${80 / 16}em` }
  },

  socialLinks: {
    flexAlign: 'center center',
    gap: 'C',
    style: { zIndex: '60' },
    childProps: {
      target: '_blank',
      opacity: '.85',
      '&:hover': { opacity: '1' },
      icon: { boxSize: 'B -' }
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
          props: { src: INSTAGRAM_PNG }
        }
      }
    ]
  },

  Book
}
