'use strict'

import { Flex } from 'smbls'

import { Navbar } from './Navbar'

import { opacity } from '../animations'

const props = {
  width: '90%',
  height: '46px',
  position: 'fixed',
  // border: '2px solid red',
  top: `0`,
  round: '0 0 A2 A2',
  padding: '- - - -',
  zIndex: '40',
  alignSelf: 'center',
  transition: 'height .75s ease',
  overflow: 'hidden',
  align: 'center center',
  style: {
    mixBlendMode: 'difference'
  },
  // '@mobileL': { display: 'none' },

  navBar: {
    // display: 'none',
    overflow: 'hidden',
    gap: 'C',
    padding: 'Z2 - - -',
    align: 'center center',
    '@maxTabletS': {
      flow: 'column',
      gap: '0'
    },
    childProps: {
      textAlign: 'center',
      color: 'cream',
      fontSize: 'Z',
      fontWeight: '400',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      letterSpacing: '3px',
      overflow: 'hidden',
      '@minTabletS': {
        // opacity: '.7',
        ':hover': {
          transform: 'scale(1.03)',
          opacity: '1'
        }
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
