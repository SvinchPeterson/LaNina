'use strict'

import { Flex, Img } from 'smbls'

import { Navbar } from '../components'

import {
  navBarItemTransform, scaleContent, backgroundPosition, deopacity, navBarItemTransform2, opacity,  navBarTransform
} from '../animations'

import LOGO_PNG from '../assets/icons/logoCream.png'
import ORNAMENTS_PNG from '../assets/images/landing/ornaments3.png'

const logo = {
  extend: Img,
  props: { src: LOGO_PNG }
}


const navbar = {
  extend: Navbar,
  ...[
    {
      span: { text: 'residence' },
      props: { href: '/Sololaki' }
    },
    {
      span: { text: 'travel' },
      props: { href: '/Travel' }
    }
  ]
}

const props = {
  boxSize: '100% 100%',
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  position: 'relative',
  align: 'center center',
  background: 'orange3 .75',
  overflow: 'hidden',
  style: {
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
    background: 'radial-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .85), rgba(0, 0, 0, 1))',
    style: { pointerEvents: 'none' }
  },

  content: {
    zIndex: '4',
    gap: 'Z',
    style: {
      animationDuration: '2.5s',
      animationTimingFunction: 'ease',
      '@media only screen and (min-width: 561px)': { animationName: scaleContent },
      '@media only screen and (max-width: 560px)': { animationName: opacity },
      '@media only screen and (min-height: 750px)': { paddingBottom: `${150 / 16}em` },
      '@media only screen and (max-height: 750px)': { paddingBottom: `${90 / 16}em` },
      '@media only screen and (max-height: 500px)': { paddingBottom: `${60 / 16}em` }
    },

    '@mobileM': {
      flow: 'column-reverse',
      align: 'center center',
      gap: 'D'
    },

    logo: {
      boxSize: 'E3 ',
      opacity: '.75',
      '@mobileM': {boxSize: 'D '}
    },

    navbar: {
      flow: 'column',
      gap: 'V',
      color: 'cream2',
      textAlign: 'right',
      margin: 'Y2 - - -',
      height: 'fit-content',
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: `${.5 / 16}em 100%`,
        top: '50%',
        left: '50%',
        background: 'orange3',
        transform: 'translate(-50%, -50%)',
        opacity: '1',
        pointerEvents: 'none',
        '@mobileM': { display: 'none' },
        style: {
          animationDuration: '1.3s',
          animationTimingFunction: 'ease-in-out',
          '@media only screen and (min-width: 561px)': { animationName: opacity }
        }
      },

       '@mobileM': {
        textAlign: 'center',
        gap: 'Z',
        style: {
          animationName: navBarTransform ,
          animationDuration: '1.5s',
          animationTimingFunction: 'ease-in-out',
        }
      },

      childProps: {
        fontSize: 'D',
        textTransform: 'capitalize',
        fontWeight: '100',
        lineHeight: `1em`,
        overflow: 'hidden',
        letterSpacing: '.5px',
        cursor: 'pointer',
        '@mobileM': {
          textTransform: 'uppercase',
          fontSize: `${12.5 / 16}em`,
          fontWeight: '700',
          letterSpacing: `${1 / 12}em`,
          border: 'solid, cream2 .3',
          borderWidth: '1px',
          padding: 'A1 D1',
          round: 'D2',
        },
        span: {
          display: 'block',
          padding: 'X -',
          opacity: '.8',
          transition: 'opacity .3s ease-in-out',
          ':hover': {opacity: '1'},
          style: {
            animationDuration: '1.5s',
            animationTimingFunction: 'ease-in-out',
          }
        },
        ':first-child span': {
          style: { '@media only screen and (min-width: 561px)': { animationName: navBarItemTransform } }
        },
        ':last-child span': {
          style: { '@media only screen and (min-width: 561px)': { animationName: navBarItemTransform2 } }
        }
      }
    }
  },

  title: {
    fontSize: 'Z',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: `7px`,
    color: 'cream2',
    zIndex: '4',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 'Z1 - Z1 7px',
    width: '100%',
    textAlign: 'center',
    style: {
      animationName: opacity,
      animationDuration: '1.5s',
      animationTimingFunction: 'ease-in-out',
      '@media only screen and (min-height: 750px)': { bottom: `${100 / 13}em` },
      '@media only screen and (max-height: 751px)': { bottom: `${50 / 13}em` },
      '@media only screen and (max-height: 500px)': { bottom: `${20 / 13}em` }
    },
    span: { padding: '- A1 - -'},
  }
}

export const Landing = {
  extend: Flex,
  props,
  attr: { id: 'landing' },

  content: {
    extend: Flex,
    navbar,
    logo
  },

  title: {
    tag: 'h5',
    span: {text: 'bb'},
    text: 'hospitality'
  }
}
