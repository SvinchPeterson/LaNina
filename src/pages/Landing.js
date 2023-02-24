'use strict'

import { Flex, Img } from 'smbls'

import { navBarItemTransform, logoTitleTransform, titleLetterSpacing, backgroundPosition, deopacity } from '../animations'

import { Navbar } from '../components'

import LOGO_PNG from '../assets/icons/logoCream.png'
import ORNAMENTS_PNG from '../assets/images/landing/ornaments.png'

// COMPONENTS
const logoTitle = {
  extend: Flex,
  logo: {
    extend: Img,
    props: { src: LOGO_PNG }
  },
  title: { props: { text: 'hospitality' } }
}

const navbar = {
  extend: Navbar,
  ...[
    { props: { text: 'residence', href: '/Sololaki' } },
    { props: { text: 'travel', href: '/Travel' } }
  ]
}

// PROPERTIES
const props = {
  boxSize: '100% 100%',
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  backgroundSize: 'cover',
  position: 'relative',
  align: 'center center',
  background: 'gold .85',
  backgroundPosition: 'top center',
  overflow: 'hidden',
  style: {
    backgroundARepeat: 'no-repeat',
    animationName: backgroundPosition,
    animationDuration: '20s',
    animatonTimingFunction: 'linear',
    '@media only screen and (max-width: 1024px)': { animationDuration: '30s' },
    '@media only screen and (min-width: 1680px)': { fontSize: `${18 / 16}em` },
    '@media only screen and (min-width: 1920px)': { fontSize: `${20 / 16}em` }
  },
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'black',
    opacity: '0',
    style: {
      animationName: deopacity,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out',
      zIndex: '4',
      pointerEvents: 'none'
    }
  },
  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'radial-gradient(rgba(0, 0, 0, .7),rgba(0, 0, 0, 1))',
    style: { pointerEvents: 'none' }
  },

  content: {
    zIndex: '2',
    boxSize: 'fit-content',
    padding: '- - E -',
    gap: 'Z',
    overflow: 'hidden',
    '@mobileL': {
      flow: 'column-reverse',
      align: 'center space-between',
      gap: 'D'
    },
    style: { '@media only screen and (max-height: 750px)': { paddingBottom: '0' } },

    navbar: {
      flow: 'column',
      lineHeight: `${38 / 16}em`,
      margin: 'A - - -',
      overflow: 'hidden',
      '@mobileL': {
        gap: 'Y',
        textAlign: 'center',
        textTransform: 'uppercase',
        margin: '0'
      },

      childProps: {
        fontWeight: '100',
        fontSize: 'E',
        color: 'cream2',
        letterSpacing: '.5px',
        textTransform: 'capitalize',
        textAlign: 'right',
        opacity: '.75',
        transition: 'opacity .3s ease-in-out',
        ':hover': { opacity: '1' },

        style: {
          animationName: navBarItemTransform,
          animationDuration: '1.5s',
          animationTimingFunction: 'cubic-bezier(0.8, 0.37, 0.53, 0.87)',
          '@media only screen and (max-width: 768px)': { animation: 'none' }
        },
        '@mobileL': {
          fontSize: 'Z',
          border: 'solid, cream2 .75',
          borderWidth: 'V',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: '700',
          boxSize: '- G',
          padding: 'X -',
          round: 'C',
          background: 'cream2 .015',

          style: { animationName: 'none' }
        }
      }
    },

    logoTitle: {
      flow: 'column',
      gap: 'Y',
      overflow: 'hidden',
      style: {
        animationName: logoTitleTransform,
        animationDuration: '1.5s',
        animationTimingFunction: 'cubic-bezier(0.8, 0.37, 0.53, 0.87)'
      },
      '@mobileL': {
        gap: 'A',
        align: 'center ceter'
      },

      logo: {
        boxSize: 'F ',
        opacity: '.75',
        '@mobileL': { boxSize: 'C2 ' }
      },

      title: {
        color: 'cream2',
        fontSize: 'Z',
        textTransform: 'uppercase',
        letterSpacing: `${4.5 / 13}em`,
        opacity: '.75',
        fontWeight: '400',
        style: {
          animationName: titleLetterSpacing,
          animationDuration: '1.5s',
          animationTimingFunction: 'cubic-bezier(0.8, 0.37, 0.53, 0.87)'
        },

        '@mobileL': {
          fontSize: 'A',
          animation: 'none',
          letterSpacing: `${5 / 16}em`
        }
      }
    }
  }
}

export const Landing = {
  extend: Flex,
  props,
  attr: { id: 'landing' },

  content: {
    extend: Flex,

    navbar,
    logoTitle
  }
}
