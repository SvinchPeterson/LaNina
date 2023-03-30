'use strict'

import { Flex } from 'smbls'

import { Navbar } from './Navbar'

const props = {
  width: '90%',
  zIndex: '200',
  position: 'fixed',
  top: `${68 / 16}em`,
  alignSelf: 'center',
  transition: 'height 1s ease',
  overflow: 'hidden',
  align: 'flex-start flex-end',
  style: { mixBlendMode: 'difference' },
  '@mobileL': { display: 'none' },
  navBar: {
    overflow: 'hidden',
    gap: 'B',
    padding: 'Z2 - - -',
    transition: 'width .5s ease',
    align: 'center flex-end',
    childProps: {
      textAlign: 'center',
      color: 'white',
      fontSize: `${11.5 / 16}em`,
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: `${2 / 12}em`,
      whiteSpace: 'nowrap',
      transition: 'opacity .8s ease'
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
  top: `D`,
  width: '80%',
  alignSelf: 'center',
  zIndex: '52',
  align: 'center center',
  round: '0 0 G1 G1',
  // '@mobileS': { top: 'C2' },
  style: {
    backdropFilter: 'blur(1px)',
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
      color: 'cream2',
      letterSpacing: `${5 / 15}em`,
      minWidth: '80%',
      align: 'flex-end center',
      padding: '- - X2 -',
      width: 'fit-content',
      textAlign: 'center',
      border: 'solid, cream2 .5',
      borderWidth: '0 0 .5px 0',
      '@mobileS': { fontSize: `Z` },
      '@mobileXS': { fontSize: `${12.5 / 16}em` }
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
