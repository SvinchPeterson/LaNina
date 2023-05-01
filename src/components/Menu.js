'use strict'

import { Flex } from 'smbls'

import { Navbar } from './Navbar'

const props = {
  width: '90%',
  position: 'fixed',
  top: `${40 / 16}em`,
  padding: '- B - -',
  zIndex: '200',
  alignSelf: 'center',
  transition: 'height 1s ease',
  overflow: 'hidden',
  align: 'flex-start flex-end',
  style: { mixBlendMode: 'difference' },
  '@mobileL': { display: 'none' },

  navBar: {
    overflow: 'hidden',
    gap: 'B1',
    padding: 'Z2 - - -',
    transition: 'width .5s ease',
    align: 'center flex-end',
    childProps: {
      textAlign: 'center',
      color: 'cream',
      fontSize: `${9 / 16}em`,
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: `${2 / 10}em`,
      whiteSpace: 'nowrap',
      opacity: '.85',
      transition: 'opacity .3s ease, transform .3s ease-in-out',
      // style: {fontStyle: 'italic'},
      ':hover': {
        transform: 'scale(1.03)',
        opacity: '1'
      }
    }
  }
}

export const Menu = {
  extend: Flex,
  props,

  navBar: { extend: Navbar }
}

const mobileMenuProps = {
  position: 'fixed',
  top: `47px`,
  width: '85%',
  alignSelf: 'center',
  zIndex: '52',
  align: 'center center',
  round: '0 0 G1 G1',

  // '@mobileS': { top: 'C2' },
  style: {
    backdropFilter: 'blur(2px)',
    '@media only screen and (min-width: 769px)': { display: 'none' }
  },

  navBar: {
    minWidth: '100%',
    flow: 'column',
    margin: '- - D2 -',
    alignItems: 'center',
    childProps: {
      textTransform: 'uppercase',
      fontWeight: '400',
      color: 'cream',
      letterSpacing: `${5 / 15}em`,
      minWidth: '100%',
      align: 'flex-end center',
      padding: '- - X2 -',
      width: 'fit-content',
      textAlign: 'center',
      fontSize: 'Z',
      border: 'solid, orange .55',
      borderWidth: '0 0 .6px 0',
      // transition: 'transform 3s ease-in-out',
      'maxMobileXS': { fontSize: `${12.5 / 16}em` }
    }
  }

}

export const MenuMobile = {
  extend: Flex,
  props: mobileMenuProps,

  navBar: {
    extend: Navbar,
    childExtend: { extend: Flex}
  }
}
