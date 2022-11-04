'use strict'

import { Flex } from 'smbls'

import { deopacity, opacityLetterSpacing, position, opacity } from '../../animations'

import { BBHeading, Navbar } from '../../components'

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
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
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
      animationDuration: '2s',
      animationTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      zIndex: 4
    }
  },
  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    // background: 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .5), rgba(0, 0, 0, .5), rgba(0, 0, 0, 1))'
    background: 'radial-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .9), rgba(0, 0, 0, 1))'
  },

  sha: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0'
  },

  content: {
    position: 'absolute',
    zIndex: '10',
    flow: 'column',
    margin: '- - D1 -',
    gap: '0',
    lineHeight: `${17 / 16}em`,
    backdropFilter: 'blur(4px)',
    style: {
      animationName: opacity,
      animationDuration: '3s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    },
    '@mobileL': { lineHeight: `${40 / 16}em` },

    heading: {
      title: {
        fontSize: 'G',
        style: {
          animationName: opacityLetterSpacing,
          animationDuration: '3s',
          animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
        }
      }
    },

    navBar: {
      position: 'relative',
      gap: 'C',
      align: 'center center',
      padding: 'C - - -',
      flow: 'row',
      style: {
        animationName: opacity,
        animationDuration: '3s',
        animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
      },
      ':before': {
        content: '""',
        boxSize: '1px 60%',
        position: 'absolute',
        round: '100%',
        top: 'A2',
        right: '0%',
        background: 'radial-gradient(rgba(220, 187, 140, .45) ,rgba(220, 187, 140, .25), rgba(220, 187, 140, 0))',
        '@mobileL': {
          boxSize: '1px 100%',
          right: '-C',
          top: 'A1'
        },
        '@mobileS': {
          boxSize: '1px 80%',
          right: '0'
          // top: 'A1'
        }
      },
      '@mobileL': {
        align: 'flex-start flex-start',
        padding: 'B1 - - C',
        gap: 'A',
        flow: 'column'
      },

      childProps: {
        color: 'cream2',
        style: {
          letterSpacing: '5px'

        },
        '@mobileL': { fontSize: 'A' }
      }
    }
  }
}

export default {
  extend: Flex,
  props,
  attr: { id: 'landing' },

  sha: {},

  content: {
    extend: Flex,

    heading: {
      extend: BBHeading
    },
    navBar: {
      extend: Navbar,
      ...[
        { props: { text: 'residence', href: '/Sololaki' } },
        {
          props: {
            text: 'travel',
            pointerEvents: 'none',
            opacity: '.2'
            // href: '/Travel'
          }
        },

        {
          props: {
            text: 'rental',
            pointerEvents: 'none',
            opacity: '.2'
          }
        }
      ]
    }
  }
}
