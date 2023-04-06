'use strict'

import { Button, Flex, Img, Link } from 'smbls'

import { opacity } from '../animations'

import LOGO_PNG from '../assets/icons/logo.png'
import BACK_PNG from '../assets/icons/arrow-left-dots.png'
import CLOSE_PNG from '../assets/icons/close.png'

const back = {
  extend: Link,
  props: {
    href: '../#landing',
    cursor: 'pointer'
  },
  icon: {
    extend: Img,
    props: {
      src: BACK_PNG
    }
  }
}

const logo = {
  extend: Link,
  attr: { href: '#banner' },
  image: { extend: Img, props: { src: LOGO_PNG } }
}

const menu = {
  extend: Button,
  menu: { text: 'menu' },

  close: {
    extend: Flex,
    text: 'close',
    icon: {
      extend: Img,
      props: { src: CLOSE_PNG }
    }
  }
}

const props = {
  position: 'fixed',
  minWidth: '90%',
  height: 'C2',
  align: 'flex-end space-between',
  gap: '0',
  alignSelf: 'center',
  zIndex: '50',
  border: 'solid, white .55',
  borderWidth: '0 0 .3px 0',
  boxSizing: 'border-box',
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out'
  },

  childProps: {
    flex: '1',
    flow: 'column',

    back: {
      opacity: '.75',
      transition: 'opacity .15s ease-in-out',
      boxSizing: 'border-box',
      margin: '- - Y1 -',
      ':hover': { opacity: '1' },
      icon: { boxSize: ' B' }
    },

    logo: {
      align: 'center center',
      opacity: '1',
      alignSelf: 'center',
      margin: '- - Y2 -',
      zIndex: '10',
      ':hover': { opacity: '1' },
      image: { boxSize: `${28 / 16}em ` }
    },

    menu: {
      width: 'E2',
      background: 'transparent',
      color: 'white',
      opacity: '.85',
      margin: '- - X -',
      border: 'none',
      textTransform: 'uppercase',
      fontWeight: '400',
      fontSize: `${11 / 16}em`,
      letterSpacing: `${3 / 11}em`,
      position: 'relative',
      transition: 'opacity .15s ease-in-out',
      overflow: 'hidden',
      round: '0',
      alignSelf: 'flex-end',
      ':hover': { opacity: '1' },
      childProps: {
        position: 'absolute',
        right: '0'
      },
      menu: { transition: 'top .5s ease-in-out, transform .5s ease-in-out' },
      close: {
        transition: 'bottom .5s ease-in-out, transform .5s ease-in-out',
        align: 'center center',
        gap: 'Y',
        icon: { boxSize: 'Z1 ' }
      }
    }
  }
}

export const Header = {
  tag: 'header',
  extend: Flex,
  props,

  childExtend: Flex,
  ...[
    { back },
    { logo },
    { menu }
  ]
}
