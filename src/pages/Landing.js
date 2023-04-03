'use strict'

import { Flex, Img } from 'smbls'

import { Navbar } from '../components'

import {
  navBarItemTransform, scaleLogo, backgroundPosition, deopacity, navBarItemTransform2, opacity,  navBarTransform, lineWidth
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
  backgroundPosition: 'bottom right',
  position: 'relative',
  align: 'center center',
  background: 'orange3',
  overflow: 'hidden',
  animationDuration: '10s',
  animatonTimingFunction: 'linear',
  style: { animationName: backgroundPosition },
  '@maxTabletM': { animationDuration: '40s' },
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'black',
    opacity: '0',
    style: {
      animationName: deopacity,
      animationDuration: '3s',
      animationTimingFunction: 'ease',
      zIndex: '4',
      pointerEvents: 'none'
    }
  },
  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .85), rgba(0, 0, 0, 1))',
    style: { pointerEvents: 'none' }
  },

  shadow: {
    position: 'absolute',
    boxSize: '100% 100%',
    zIndex: '7',
    background: 'black',
    opacity: '0',
    style: {
      animationName: deopacity,
      animationDuration: '1.5s',
      animationTimingFunction: 'ease',
      zIndex: '4',
      pointerEvents: 'none'
    }
  },
  content: {
    zIndex: '6',
    gap: 'Y',
    margin: '- - F -',
    '@maxHeightN': { margin: '- - E -'},
    '@maxHeightS': { margin: '- - D -'},

    logo: {
      boxSize: 'E ',
      opacity: '.75',
      style: {
        animationDuration: '1.8s',
        animationTimingFunction: 'ease',
        animationName: scaleLogo
      },
    },

    navbar: {
      flow: 'column',
      gap: 'V',
      color: 'cream2',
      textAlign: 'right',
      margin: 'Y1 - - -',
      height: 'fit-content',
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: `${.5 / 16}em 100%`,
        top: '50%',
        right: '0',
        background: 'orange3 .65',
        transform: 'translate(0, -50%)',
        opacity: '1',
        pointerEvents: 'none',
        style: {
          animationDuration: '1.5s',
          animationTimingFunction: 'ease-out',
          animationName: lineWidth,
        }
      },

      childProps: {
        fontWeight: '400',
        lineHeight: `1em`,
        overflow: 'hidden',
        cursor: 'pointer',
        span: {
          textTransform: 'uppercase',
          letterSpacing: '2.5px',
          fontSize: `${12.5 / 16}em`,
          display: 'block',
          padding: 'Z -',
          opacity: '.7',
          transition: 'opacity .3s ease',
          ':hover': {opacity: '1'},
          style: {
            animationDuration: '2.2s',
            animationTimingFunction: 'ease'
          }
        },
        ':first-child span': { style: { animationName: navBarItemTransform } },
        ':last-child span': { style: { animationName: navBarItemTransform2 } }
      }
    }
  },

  title: {
    fontSize: `Z`,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: `${12 / 13}em`,
    color: 'cream2 .7',
    zIndex: '3',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: `- - - ${12 / 13}em`,
    width: '100%',
    textAlign: 'center',
    bottom: 'D',
    '@maxMobileM': { letterSpacing: `${8 / 13}em`, padding: `- - - ${8 / 13}em`,},
    '@maxHeightS': { bottom: 'B1' },
    '@minHeightM': {bottom: 'D1'},
    style: {
      animationName: opacity,
      animationDuration: '1.5s',
      animationTimingFunction: 'ease-in-out'
    }
  }
}

export const Landing = {
  extend: Flex,
  props,
  attr: { id: 'landing' },
  shadow: {},

  content: {
    extend: Flex,
    navbar,
    logo
  },

  title: {
    tag: 'h5',
    text: 'BB hospitality'
  }
}
