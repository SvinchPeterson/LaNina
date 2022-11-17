'use strict'

import { Flex } from 'smbls'

import { deopacity, position, opacity } from '../../animations'

import { BBHeading, Navbar } from '../../components'

import ORNAMENTS_PNG from '../../assets/images/landing/ornaments.png'

const props = {
  boxSize: '100% 100%',
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  backgroundSize: 'cover',
  backgroundARepeat: 'no-repeat',
  position: 'relative',
  background: 'gold .75',
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
    background: 'radial-gradient(rgba(0, 0, 0, .7),rgba(0, 0, 0, .97))'
  },

  content: {
    flow: 'column',
    zIndex: '5',
    gap: 'D',
    boxSize: '100% 100%',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: 'D2 D2 F2 D2',
    '@mobileL': { padding: 'C C D C' },
    '@mobileS': { padding: 'C B1 D2 B1' },
    style: {
      '@media only screen and (max-height: 750px)': {
        paddingTop: `${50 / 16}em`,
        paddingBottom: `${50 / 16}em`
      },
      '@media only screen and (max-height: 550px)': {
        paddingTop: `${30 / 16}em !important`,
        paddingBottom: `${30 / 16}em !important`
      }
    },

    heading: {
      // alignSelf: 'center',
      flow: 'column',
      gap: 'Y',
      logo: { opacity: '.65' },
      title: {
        fontSize: 'B',
        color: 'white .65'
      }
    },

    navBar: {
      position: 'relative',
      gap: 'Z2',
      alignSelf: 'center',
      '@mobileL': {
        flow: 'column',
        gap: 'A'
      },
      style: {
        animationName: opacity,
        animationDuration: '3s',
        animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
      },

      childProps: {
        color: 'white .75',
        border: '1px solid gray',
        textAlign: 'center',
        padding: 'A -',
        width: 'F',
        fontSize: `${12.5 / 16}em`,
        round: 'C',
        fontWeight: '700',
        ':hover': { background: 'linear-gradient(to left, rgba(220, 187, 140, 0), rgba(220, 187, 140, .07))' },
        style: {
          letterSpacing: '1px',
          backdropFilter: 'bur(4px)'
        },
        '@mobileL': { width: 'F1' }
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

    heading: { extend: BBHeading },
    navBar: {
      extend: Navbar,
      ...[
        {
          props: {
            text: 'residence',
            href: '/Sololaki',
            style: {
              textShadow: '.4px .4px 1px black'
            }
          }
        },
        {
          props: {
            text: 'travel',
            href: '/Travel',
            style: {
              textShadow: '.4px .4px 1px black'
            }
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
