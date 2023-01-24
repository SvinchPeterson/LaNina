'use strict'

import { Flex, Img, Link } from 'smbls'

import { opacity } from '../animations'
import { Navbar } from './Navbar'
import { MenuButton } from './MenuButton'
import { LogoWhite } from './Logo'

import BACK_PNG from '../assets/icons/arrowBack-white.png'

const props = {
  position: 'fixed',
  minWidth: '80%',
  align: 'flex-start space-between',
  flow: 'column',
  gap: 'Y1',
  alignSelf: 'center',
  zIndex: '50',
  margin: 'A2 auto - auto',
  '@mobileL': {
    minWidth: '90%',
    gap: 'Y1'
  },
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
    animationDuration: '5s',
    '@media only screen and (max-height: 450px)': { height: `${80 / 16}em` }
  },

  logoMenuButton: {
    minWidth: '100%',
    align: 'flex-end space-between',

    logoLink: {
      opacity: '.85',
      padding: '- - - Y',
      ':hover': { opacity: '1' },
      style: {
        animationName: opacity,
        animationDuration: '3s',
        animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
      },
      logo: {
        boxSize: 'B1 '
      }
    },

    menuButton: {
      display: 'none',
      '@mobileL': { display: 'block' }
    }
  },

  navigation: {
    align: 'flex-start space-between',
    minWidth: '100%',
    border: 'solid, white .75',
    borderWidth: '.7px 0 0 0',
    padding: 'Y Y - Y',
    '@mobileL': { padding: 'Y2 Y - Y' },
    back: {
      opacity: '.75',
      transition: 'opacity .15s ease-in-out',
      ':hover': { opacity: '1' },
      icon: { boxSize: ' A2' }
    },
    nav: {
      gap: 'B',
      '@mobileL': { display: 'none' },
      childProps: {
        textTransform: 'uppercase',
        fontSize: `${13 / 16}em`,
        letterSpacing: '.5px',
        opacity: '.75',
        transition: 'opacity .15s ease-in-out',
        color: 'white 1',
        ':hover': { opacity: '1' }
      }
    }
  }
}

export const Header = {
  tag: 'header',
  props: props,
  extend: Flex,

  logoMenuButton: {
    extend: Flex,
    logoLink: {
      extend: Link,
      attr: { href: '#banner' },
      logo: { extend: LogoWhite }
    },
    menuButton: { extend: MenuButton }
  },

  navigation: {
    extend: Flex,

    back: {
      extend: Link,
      props: {
        href: '../#landing',
        cursor: 'pointer'
      },
      icon: {
        extend: Img,
        props: { src: BACK_PNG }
      }
    },

    nav: { extend: Navbar }
  }
}
