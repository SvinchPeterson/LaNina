'use strict'

import { Flex, Img } from 'smbls'

import {
  navBarItemTransform, logoTitleTransform, titleLetterSpacing, backgroundPosition, deopacity, navBarItemTransform2, opacity, navBarItemTransform3
} from '../animations'

import { Navbar } from '../components'

import LOGO_PNG from '../assets/icons/logoCream.png'
import ORNAMENTS_PNG from '../assets/images/landing/ornaments3.png'

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

// PROPERTIES
const props = {
  boxSize: '100% 100%',
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  backgroundSize: 'cover',
  position: 'relative',
  align: 'center center',
  background: 'orange3 .8',
  backgroundPosition: 'top center',
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
    boxSize: 'fit-content',
    padding: '- - E -',
    gap: 'Z',
    overflow: 'hidden',
    '@mobileM': {
      flow: 'column-reverse',
      align: 'center center',
      gap: 'B'
    },
    style: {
      animationName: opacity,
      animationDuration: '1.5s',
      animationTimingFunction: 'ease-out',
      '@media only screen and (max-height: 650px)': { paddingBottom: '0' }
    },

    navbar: {
      height: `${100 / 16}em`,
      flow: 'column',
      margin: 'Z - - -',
      overflow: 'hidden',
      alignItems: 'flex-end',
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: '.5px 100%',
        background: 'cream2 .5',
        zIndex: '10',
        top: '50%',
        right: '0',
        transform: 'translate(0, -50%)',
        '@mobileM': { display: 'none' },
        style: {
          animationName: opacity,
          animationDuration: '1.5s',
          animationTimingFunction: 'ease-out'
        }
      },

      '@mobileM': {
        height: `fit-content`,
        alignItems: 'center',
        gap: 'Z',
        overflow: 'visible'
      },

      childProps: {
        fontWeight: '100',
        fontSize: 'E',
        color: 'cream2',
        letterSpacing: `${0.5 / 33}em`,
        textTransform: 'capitalize',
        position: 'relative',
        textAlign: 'right',
        opacity: '.75',
        minHeight: `${50 / 33}em`,
        transition: 'opacity .3s ease-in-out',
        overflow: 'hidden',
        display: 'flex',
        '@mobileM': {
          border: 'solid, cream2 .5',
          borderWidth: '.5px',
          textTransform: 'uppercase',
          fontSize: `${14 / 16}em`,
          fontWeight: '700',
          width: 'F2',
          justifyContent: 'center',
          textAlign: 'center',
          round: 'C',
          overflow: 'visible',
          letterSpacing: `${2 / 16}em`,
          style: {
            animationName: navBarItemTransform3,
            animationDuration: '1.5s',
            animationTimingFunction: 'ease-out'
          }
        },
        span: {
          display: 'block',
          lineHeight: `${23 / 33}em`,
          style: {
            animationDuration: '1.5s',
            animationTimingFunction: 'ease-out'
          }
        },
        ':first-child': {
          alignItems: 'flex-end',
          padding: '- - Y -',
          '@mobileM': { padding: 'A2 -' }
        },
        ':last-child': {
          alignItems: 'flex-start',
          padding: 'Y - - -',
          '@mobileM': { padding: 'A2 -' }
        },
        ':first-child span': {
          style: { '@media only screen and (min-width: 561px)': { animationName: navBarItemTransform } }
        },
        ':last-child span': {
          style: { '@media only screen and (min-width: 561px)': { animationName: navBarItemTransform2 } }
        },
        ':hover': { opacity: '1' }
      }
    },

    logoTitle: {
      flow: 'column',
      gap: 'Y',
      overflow: 'hidden',
      style: {
        animationName: logoTitleTransform,
        animationDuration: '1.5s',
        animationTimingFunction: 'ease-out'
      },
      '@mobileM': {
        align: 'center center',
        padding: `- - - ${6 / 16}em`,
        gap: 'A'
        // border: 'solid, cream2',
        // borderWidth: '0 0 1px 0',
      },
      logo: {
        boxSize: 'F ',
        opacity: '.75',
        '@mobileM': { boxSize: 'D ' }
      },

      title: {
        color: 'cream2',
        fontSize: 'Z',
        textTransform: 'uppercase',
        letterSpacing: `${4.5 / 13}em`,
        opacity: '.75',
        fontWeight: '400',
        '@mobileM': { fontSize: 'A' },
        style: {
          '@media only screen and (min-width: 561px)': {
            animationName: titleLetterSpacing,
            animationDuration: '1.5s',
            animationTimingFunction: 'ease-out'
          }
        }
      }
    }
  }
}

export const Landing = {
  extend: Flex,
  props,
  attr: { id: 'landing' },
  cover: {},

  content: {
    extend: Flex,

    navbar,
    logoTitle
  }
}
