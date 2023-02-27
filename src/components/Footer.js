'use strict'

import { Img, Link, Flex } from 'smbls'

import { opacity } from '../animations'

import FACEBOOK_PNG from '../assets/icons/facebook-white.png'
import INSTAGRAM_PNG from '../assets/icons/instagram-white.png'

import { Book } from './Book'

const props = {
  width: '90%',
  position: 'fixed',
  bottom: 'A2',
  flexAlign: 'center space-between',
  alignSelf: 'center',
  zIndex: '50',
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animationDuration: '3s',
    animatonTimingFunction: 'ease-in-out'
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

export const socialLinks = {
  childExtend: { extend: Link, icon: { extend: Img } },
  ...[
    {
      props: {
        href: `https://www.facebook.com/BBResidenceTbilisi`,
        icon: { src: FACEBOOK_PNG }
      }
    },

    {
      props: {
        href: 'https://www.instagram.com/laninaresidence/',
        icon: { src: INSTAGRAM_PNG }
      }
    }
  ]

}
export const Footer = {
  tag: 'footer',
  props,
  extend: Flex,

  socialLinks,
  Book
}
