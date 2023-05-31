'use strict'

import { Img, Link, Flex } from 'smbls'

import { opacity } from '../animations'

import FACEBOOK_PNG from '../assets/icons/social-facebook.png'
import INSTAGRAM_PNG from '../assets/icons/social-instagram.png'

import { BookingLink } from './BookingLink'

const props = {
  minWidth: '95%',
  '@maxMobileM': { minWidth: '95%' },
  position: 'fixed',
  bottom: 'Z',
  padding: '- Z',
  zIndex: '50',
  height: 'C',
  alignSelf: 'center',
  align: 'center space-between',
  overflow: 'hidden',
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animationDuration: '3s',
    animatonTimingFunction: 'ease-in-out'
  },

  socialLinks: {
    width: 'fit-content',
    flexAlign: 'center center',
    gap: 'A',
    style: { zIndex: '60' },
    childProps: {
      target: '_blank',
      boxSize: 'B2 B2',
      boxSizing: 'content-box',
      align: 'center center',
      round: '100%',
      '@minTabletL': {
        opacity: '.85',
        ':hover': { opacity: '1', transform: 'scale(1.03)' },
        transition: 'opacity .15s ease-in-out, transform .15s ease-in-out',
      },
      icon: { boxSize: 'A1 -' },
    }
  },

  book: {
    zIndex: '4',
    '@minTabletL': {
      opacity: '.85',
      ':hover': { opacity: '1' },
      transition: 'opacity .15s ease-in-out',
      ':hover > span': { transform: 'scale(1.03)' },
    },
    span: {
      display: 'block',
      // opacity: '0',
      '@minTabletL': {transition:' transform .15s ease-in-out'}
    },
    href: 'https://www.airbnb.com/users/404104381/listings?fbclid=IwAR1M3Rx_GD2eAEA7nzUFqkAo6Ukr4Bkvjb4FKIragquUW54fukDFixV0gHE'
  }
}

export const socialLinks = {
  extend: Flex,
  childExtend: {
    extend: [Link, Flex],
    icon: { extend: Img }
  },
  ...[
    { props: { icon: { src: FACEBOOK_PNG } } },

    { props: { icon: { src: INSTAGRAM_PNG } } }
  ]

}
export const Footer = {
  tag: 'footer',
  props,
  extend: Flex,

  socialLinks,
  book: { extend: BookingLink }
}
