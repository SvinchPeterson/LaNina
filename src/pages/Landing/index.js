'use strict'

import { Flex } from 'smbls'

import { deopacity, position, opacity } from '../../animations'

import { BBHeading, Navbar } from '../../components'

import LOGO_PNG from '../../assets/icons/logoCream.png'

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
    gap: 'C',
    boxSize: '100% 100%',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '- - E -',
    style: { '@media only screen and (max-height: 650px)': { padding: '0', gap: `${30 / 16}em` } },

    heading: {
      flow: 'column',
      gap: '0',
      logo: {
        src: LOGO_PNG,
        opacity: '.6'
      },
      title: {
        fontSize: 'F',
        color: 'cream2 .75',
        fontWeight: '100',
        textTransform: 'capitalize'
      }
    },

    navBar: {
      position: 'relative',
      gap: 'A',
      alignSelf: 'center',
      '@mobileL': { flow: 'column' },
      style: {
        animationName: opacity,
        animationDuration: '3s',
        animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
      },

      childProps: {
        fontSize: 'Z',
        color: 'cream2 .75',
        border: 'solid, cream2 .35',
        borderWidth: '1px',
        textAlign: 'center',
        padding: 'Z2 -',
        width: 'F',
        round: 'C',
        fontWeight: '700',
        ':hover': { background: 'linear-gradient(to left, rgba(220, 187, 140, 0), rgba(220, 187, 140, .07))' },
        style: {
          letterSpacing: '1px',
          backdropFilter: 'bur(4px)'
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
