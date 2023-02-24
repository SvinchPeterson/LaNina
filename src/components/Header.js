'use strict'

import { Button, Flex, Img, Link } from 'smbls'

import { opacity } from '../animations'

import { LogoWhite } from './Logo'

import BACK_PNG from '../assets/icons/arrowBack-white.png'
import CLOSE_PNG from '../assets/icons/close.png'

const back = {
  extend: Link,
  props: {
    href: '../#landing',
    cursor: 'pointer'
  },
  icon: {
    extend: Img,
    props: { src: BACK_PNG }
  }
}

const logo = {
  extend: Link,
  attr: { href: '#banner' },
  image: { extend: LogoWhite }
}

const menu = {
  extend: Button,
  menu: {
    text: 'menu',
    on: { click: (event, element, state) => { state.update({ activeMenu: true }) } },
    class: {
      show: (element, state) => state.activeMenu
        ? { top: `${-30 / 12}em`, transform: 'scale(.9)' }
        : { top: '0', transform: 'scale(1)' }
    }
  },

  close: {
    extend: Flex,
    text: 'close',
    icon: {
      extend: Img,
      props: { src: CLOSE_PNG }
    },
    on: { click: (event, element, state) => { state.update({ activeMenu: false }) } },
    class: {
      show: (element, state) => state.activeMenu
        ? { bottom: `${3 / 12}em`, transform: 'scale(1)' }
        : { bottom: `${-30 / 12}em`, transform: 'scale(.9)' }
    }
  }
}

const props = {
  position: 'fixed',
  minWidth: '90%',
  height: 'D',
  align: 'flex-end space-between',
  gap: '0',
  alignSelf: 'center',
  zIndex: '50',
  border: 'solid, white .75',
  borderWidth: '0 0 .5px 0',
  padding: '- V2',
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animationDuration: '3s',
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
      icon: { boxSize: ' A2' }
    },

    logo: {
      align: 'center center',
      opacity: '.85',
      alignSelf: 'center',
      margin: '- - Y2 -',
      ':hover': { opacity: '1' },
      image: { boxSize: `${30 / 16}em ` }
    },

    menu: {
      width: 'D1',
      background: 'transparent',
      color: 'white',
      opacity: '.85',
      margin: '- - X -',
      border: 'none',
      textTransform: 'uppercase',
      fontWeight: '400',
      fontSize: `${12 / 16}em`,
      letterSpacing: `${1 / 12}em`,
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
