'use strict'

import { Flex, Img, Box } from 'smbls'

import { deopacity, opacityLetterSpacing, position, opacity } from './animations'

import LOGO_BIG_PNG from '../../assets/icons/logoBig.png'

import { Title, BBHeading, Navbar } from '../../components'

// import navBar from './navBar'

import ORNAMENTS_PNG from '../../assets/images/landing/ornamentsGray.png'

const props = {
  boxSize: '100% 100%',
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  backgroundSize: 'cover',
  backgroundARepeat: 'no-repeat',
  position: 'relative',
  background: 'cream .55',
  align: 'center center',
  backgroundPosition: 'top center',
  style: {
    animationName: position,
    animationDuration: '20s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
  },
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'black',
    opacity: '0',
    style: {
      animationName: deopacity,
      animationDuration: '6s',
      animationTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      zIndex: 4
    }
  },
  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'radial-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .8), rgba(0, 0, 0, 1))',
    zIndex: '3'
  },

  sha: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .5))',
    zIndex: '0'
  },

  logo: {
    src: LOGO_BIG_PNG,
    boxSize: '78% 50%',
    margin: '- - - -',
    zIndex: '3',
    background: 'gold .0',
    padding: 'D2',
    '@tabletL': { display: 'none' },

    style: {
      transform: 'rotate(-20deg) skew(30deg)',
      backdropFilter: 'blur(1px)',
      animationName: opacity,
      animationDuration: '5s',
      animationTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    }
  },

  content: {
    position: 'absolute',
    zIndex: '10',
    flow: 'column',
    margin: '- - D1 H2',
    gap: '0',
    backdropFilter: 'blur(4px)',
    transform: 'rotate(25deg) skew(30deg)',
    style: {
      animationName: opacity,
      animationDuration: '4s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    },
    '@tabletL': {
      transform: 'rotate(0deg) skew(0deg)',
      margin: 'auto',
      padding: '- - F1 -',
      gap: 'Y',
      style: {
        '@media only screen and (max-height: 1200px)': { paddingBottom: `${70 / 16}em` },
        '@media only screen and (max-height: 750px)': { marginBottom: '0' }
      }
    },

    heading: {
      display: 'none',
      '@tabletL': { display: 'flex' },
      '@mobileL': {
        flow: 'column',
        gap: 'Z'
      },

      logo: {
        '@mobileL': { boxSize: 'C2 ' },
        '@mobileXS': { boxSize: 'C1 ' }
      },
      title: { '@mobileXS': { fontSize: 'F' } }
    },

    title: {
      color: 'cream2 .85',
      fontSize: 'I',
      style: {
        animationName: opacityLetterSpacing,
        animationDuration: '6s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
      },
      '@tabletL': { display: 'none' },
      '@screenM': { fontSize: 'I' }
    },

    navBar: {
      position: 'relative',
      padding: 'C - - -',
      gap: 'C',
      align: 'flex-start flex-end',
      style: {
        animationName: opacity,
        animationDuration: '5s',
        animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
      },
      ':before': {
        content: '""',
        boxSize: '1.5px 80%',
        position: 'absolute',
        round: 'C',
        top: '0',
        left: '20%',
        background: 'radial-gradient(rgba(248, 241, 227, .75), rgba(248, 241, 227, 0))'
      },
      '@tabletL': {
        align: 'center center',
        padding: 'B2 - - -',
        flow: 'row',
        gap: 'C'
      },
      '@mobileL': {
        align: 'flex-start flex-start',
        padding: 'A2 - - C',
        gap: 'B1',
        flow: 'column'
      },

      childProps: {
        color: 'cream2',
        style: {
          letterSpacing: '5px',
          '&:not(:last-child)': {
            opacity: '.85'
          }
        },
        '@mobileL': { fontSize: 'A' }
      }
    }
  }
}

const navBar = {
  extend: Navbar,
  ...[
    { props: { text: 'residence', href: '/Sololaki' } },
    { props: { text: 'travel', href: '/Travel' } },
    {
      props: {
        text: 'rental',
        pointerEvents: 'none',
        opacity: '.2'
      }
    }
  ]
}

export default {
  extend: Flex,
  props,

  sha: {},
  logo: { extend: [Img, Box] },

  content: {
    extend: Flex,

    heading: { extend: BBHeading },
    title: { extend: Title },
    navBar
  }
}
