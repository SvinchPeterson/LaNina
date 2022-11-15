'use strict'

import { Link, Flex } from 'smbls'

import { opacity } from '../animations'
import { Navbar } from './Navbar'
import { MenuButton } from './MenuButton'
import { BBHeading } from './BBHeading'

import LOGO_PNG from '../assets/icons/logo-white.png'

const props = {
  position: 'fixed',
  width: '100%',
  top: '0',
  left: '0',
  align: 'center space-between',
  padding: '0 C1',
  height: 'E',
  margin: '0 0 0 0',
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
    animationDuration: '5s'
    // '@media only screen and (max-height: 800px)': {
    //   paddingTop: `${30 / 16}em !important`,
    //   paddingBottom: `0 !important`
    // }
  },
  // '@mobileL': { padding: 'A B - B' },

  logo: {
    alignSelf: 'center',
    href: '#banner',
    ':hover': { opacity: 1 },
    logo: {
      '@mobileS': { boxSize: 'B2 ' }
    }
  },

  navBar: {
    gap: 'B2',
    '@tabletS': { display: 'none' },
    childProps: {
      fontWeight: '700',
      style: { letterSpacing: '.7px' }
    }
  },

  menuButton: {
    display: 'none',
    '@tabletS': { display: 'block' }
  }
}

export const Header = {
  tag: 'header',
  props: props,
  extend: Flex,

  logo: { extend: [Link, BBHeading] },

  navBar: {
    extend: Navbar,
    ...[
      { props: { text: 'residence', href: '#residence' } },
      { props: { text: 'servises & facilities', href: '#features' } },
      { props: { text: 'apartments', href: '#apartments' } },
      { props: { text: 'wine', href: '#wine' } },
      { props: { text: 'location', href: '#location' } }
    ]
  },
  menuButton: { extend: MenuButton }
}
