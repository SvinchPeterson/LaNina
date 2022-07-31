'use strict'
import { Img, Link } from 'smbls'
import { keyframes } from '@emotion/css'

import { Navbar } from './Navbar'
import LOGO_PNG from '../assets/icons/logo-white.png'

import { Book } from './Book'
import { MenuButton } from './MenuButton'

const logo = {
  proto: Link,
  props: {
    href: '#banner',
    css: {
      opacity: '.8',
      '&:hover': { opacity: 1 }
    }
  },

  icon: {
    proto: Img,
    props: {
      src: LOGO_PNG,
      boxSize: ' B1'
    }
  }
}

export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const navBar = {
  proto: Navbar,
  props: { gap: 'C1' },

  ...[
    { props: { text: 'residence', href: '#residence' } },
    { props: { text: 'apartments', href: '#apartments' } },
    { props: { text: 'wine', href: '#wine' } },
    { props: { text: 'location', href: '#location' } }
  ]
}

export const Header = {
  tag: 'header',
  props: {
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    flexAlign: 'center space-between',
    padding: '0 D2 0 D2',
    margin: 'C1 0',
    '@mobileL': { display: 'none' },
    css: {
      zIndex: '100',
      mixBlendMode: 'difference',
      animationName: opacity,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out'
    }
  },

  logo,
  navBar
}

export const HeaderMobile = {
  tag: 'header',
  props: {
    position: 'fixed',
    top: '0',
    flexAlign: 'center space-between',
    padding: 'C D 0 D',
    gap: 'E',
    display: 'none',
    width: '100%',
    css: {
      zIndex: 500,
      mixBlendMode: 'difference'
    },
    '@mobileL': { display: 'flex' },
    '@mobileM': { padding: 'B2 C 0 C' },
    '@mobileS': { padding: 'B A1 0 A1' }
  },
  MenuButton
}
