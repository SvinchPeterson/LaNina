'use strict'

import { Flex, Img } from 'smbls'

import { deopacity, position, opacityTransform, opacityTransform2, opacityTransform3, letterSpacing2 } from '../../animations'

import { Navbar } from '../../components'

import LOGO_PNG from '../../assets/icons/logoCream.png'

import ORNAMENTS_PNG from '../../assets/images/landing/ornaments.png'

const navbar = {
  extend: Navbar,
  ...[
    { props: { text: 'residence', href: '/Sololaki' } },
    { props: { text: 'travel', href: '/Travel' } },
    { props: { text: 'rental', pointerEvents: 'none' } }
  ]
}

const logoTitle = {
  extend: Flex,
  logo: {
    extend: Img,
    props: { src: LOGO_PNG }
  },
  title: { text: 'Hospitality' }
}

const props = {
  boxSize: '100% 100%',
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  backgroundSize: 'cover',
  backgroundARepeat: 'no-repeat',
  position: 'relative',
  background: 'gold .75',
  align: 'center center',
  backgroundPosition: 'top center',
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'black',
    opacity: '0',
    style: {
      animationName: deopacity,
      animationDuration: '7s',
      animationTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      zIndex: '4',
      pointerEvents: 'none'
    }
  },

  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'radial-gradient(rgba(0, 0, 0, .7),rgba(0, 0, 0, 1))'
  },

  style: {
    animationName: position,
    animationDuration: '20s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
    '@media only screen and (min-width: 1680px)': { fontSize: `${18 / 16}em` },
    '@media only screen and (min-width: 1920px)': { fontSize: `${20 / 16}em` }
  },

  content: {
    zIndex: '2',
    padding: '- - E -',
    align: 'flex-start center',
    '@mobileM': { padding: '- - 0 -' },
    style: { '@media only screen and (max-height: 600px)': { paddingBottom: '0' } },

    navbar: {
      flow: 'column',
      textAlign: 'right',
      padding: 'Z1 A - -',
      overflow: 'hidden',
      '@mobileM': {
        gap: 'B',
        textAlign: 'center',
        padding: '- 0 - -'
      },

      childProps: {
        height: 'fit-content',
        fontSize: 'E',
        fontWeight: '100',
        color: 'cream2 .75',
        lineHeight: `${45 / 33}em`,
        textTransform: 'capitalize',
        cursor: 'pointer',
        '@mobileM': {
          fontSize: 'H',
          lineHeight: `${55 / 48}em`,
          color: 'cream2'
        },
        '@mobileXS': {
          fontSize: 'F',
          lineHeight: `${35 / 40}em`
        },
        ':hover': { color: 'cream2' },
        ':last-child': { color: 'cream2 .2' },
        style: {
          letterSpacing: '1px',
          '@media only screen and (min-width: 560px)': { animationName: opacityTransform2 },
          '@media only screen and (max-width: 560px)': { animationName: opacityTransform },
          animationDuration: '1.3s',
          animationTimingFunction: 'cubic-bezier(.8,.37,.53,.87)',
          '@media only screen and (max-width: 560px) and (max-height: 500px)': { fontSize: `38px !important` }
        }
      }
    },

    logoTitle: {
      flow: 'column',
      gap: 'Y',
      style: {
        animationName: opacityTransform3,
        animationDuration: '1s',
        animationTimingFunction: 'cubic-bezier(.8,.37,.53,.87)'
      },
      '@mobileM': {
        flow: 'row',
        align: 'center flex-start',
        position: 'absolute',
        top: 'B1',
        left: 'B2'
      },

      logo: {
        boxSize: 'F ',
        opacity: '.75',
        '@mobileM': { boxSize: 'C ' }
      },

      title: {
        color: 'cream2 .65',
        fontSize: `${14 / 16}em`,
        fontWeight: '400',
        padding: '- - - V',
        textTransform: 'uppercase',
        letterSpacing: `${6 / 14}em`,
        '@mobileM': {
          fontSize: 'A',
          letterSpacing: `${6 / 16}em`
        },
        style: {
          animationName: letterSpacing2,
          animationDuration: '1.3s',
          animationTimingFunction: 'ease-in-out'
        }
      }
    }
  }
}

export default {
  extend: Flex,
  props,
  attr: { id: 'landing' },

  content: {
    extend: Flex,
    navbar,
    logoTitle
  }
}
