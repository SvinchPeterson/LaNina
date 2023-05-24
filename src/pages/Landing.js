'use strict'

import { Flex, Img } from 'smbls'

import { Navbar, PageTitle } from '../components'

import {
  navBarItemTransform, scaleLogo, backgroundPosition, deopacity,
  navBarItemTransform2, opacity, lineWidth, titleLetterSpacing

} from '../animations'

import LOGO_PNG from '../assets/icons/logo.png'
import ORNAMENTS_PNG from '../assets/images/landing/ornament.png'

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
  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background:`radial-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, 1))`
    // background:`radial-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .6), rgba(0, 0, 0, .65), rgba(0, 0, 0, .7),rgba(0, 0, 0, .75), rgba(0, 0, 0, .8), rgba(0, 0, 0, .85), rgba(0, 0, 0, .9), rgba(0, 0, 0, .95), rgba(0, 0, 0, 1))`
  },
  deopacity: {
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
    margin: '- - E1 -',
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
      color: 'cream',
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
          animationName: lineWidth,
          animationDuration: '1.5s',
          animationTimingFunction: 'ease-out'
        }
      },

      childProps: {
        fontWeight: '400',
        lineHeight: `1em`,
        overflow: 'hidden',
        cursor: 'pointer',
        span: {
          textTransform: 'uppercase',
          letterSpacing: `${2.5 / 12.5}em`,
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
    fontSize: 'E',
    letterSpacing: `${-2 / 33}em`,
    zIndex: '3',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    bottom: 'A2',
    style: {
      animationName: titleLetterSpacing,
      animationDuration: '1.5s',
      animationTimingFunction: 'ease-in-out'
    }
  }
}

export const Landing = {
  extend: Flex,
  props,
  attr: { id: 'landing' },
  deopacity: {},
  shadow: {},

  content: {
    extend: Flex,
    navbar,
    logo
  },

  title: {
    extend: PageTitle,
    text: 'BB hospitality'
  }
}
