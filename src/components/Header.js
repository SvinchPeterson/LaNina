'use strict'

import { Img, Link } from 'smbls'
import { keyframes } from '@emotion/css'
import { BBHeading } from './BBHeading'
import { Navbar } from './Navbar'
import { MenuButton } from './MenuButton'
import LOGO_PNG from '../assets/icons/logo-white.png'

export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const logo = {
  extend: Link,
  props: {
    href: '#banner',
    ':hover': { opacity: 1 }
  },

  icon: {
    extend: Img,
    props: {
      src: LOGO_PNG,
      boxSize: 'B -',
      '@tabletS': { boxSize: 'B1 -' }
    }
  }
}
const navBar = {
  extend: Navbar,
  props: {
    gap: 'B2'
  },

  ...[
    { props: { text: 'residence', href: '#residence' } },
    { props: { text: 'SERVICES & FACILITIES', href: '#features' } },
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
    padding: 'B1 D 0 D',
    margin: '0 0 0 0',
    '@tabletS': { display: 'none' },
    '@mobileL': { display: 'none' },
    style: {
      zIndex: '100',
      mixBlendMode: 'difference',
      animationName: opacity,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out',
      '@media only screen and (max-height: 800px)': {
        paddingTop: `${30 / 16}em !important`,
        paddingBottom: `0 !important`
      }
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
    padding: 'D2 D2 0 D2',
    gap: 'E',
    display: 'none',
    width: '100%',
    style: {
      zIndex: 500,
      mixBlendMode: 'difference',
      '@media only screen and (max-height: 650px)': { paddingTop: `${20 / 16}em !important` }
    },
    '@tabletS': { display: 'flex' },
    '@mobileM': { padding: 'B1 C 0 C' },
    '@mobileS': { padding: 'B A1 0 A1' }
  },
  logo,
  MenuButton
}
