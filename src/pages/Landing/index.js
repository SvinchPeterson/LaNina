'use strict'

import { keyframes } from '@emotion/css'

import { Flex, Img } from 'smbls'

import { deopacity, position } from '../../animations'

import { Navbar } from '../../components'

import LOGO_PNG from '../../assets/icons/logoCream.png'

import ORNAMENTS_PNG from '../../assets/images/landing/ornaments.png'

export const navBarTransform = keyframes`
from {
  transform: translateX(100px) scale(.98);
  opacity: 0;
  letter-spacing: 3px;
}
to {
  transform: translateX(0px) scale(1);
  opacity: 0.75;
  letter-spacing: .5px;
}
`

export const logoTitleTransform = keyframes`
from {
  transform: scale(.9);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}
`

export const titleLetterSpacing = keyframes`
from {
  opacity: 0;
  // letter-spacing: 1px;
  transform: translateX(-100px) scale(.98);
}
to {
  // letter-spacing: 4.5px;
  opacity: 0.75;
  transform: translateX(0) scale(1);
}
`

const navbar = {
  extend: Navbar,
  ...[
    {
      props: {
        text: 'residence',
        href: '/Sololaki',
        style: {
          animationName: navBarTransform,
          animationDuration: '1.5s',
          animationTimingFunction: 'cubic-bezier(0.8, 0.37, 0.53, 0.87)'
        }
      }
    },
    {
      props: {
        text: 'travel',
        href: '/Travel',
        style: {
          animationName: navBarTransform,
          animationDuration: '1.5s',
          animationTimingFunction: 'cubic-bezier(0.8, 0.37, 0.53, 0.87)'
        }
      }
    },
    {
      props: {
        text: 'rental',
        style: { animationName: 'none' }
      }
    }
  ]
}

const logoTitle = {
  extend: Flex,

  logo: {
    extend: Img,
    props: { src: LOGO_PNG }
  },
  title: { props: { text: 'hospitality' } }
}

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
    animationName: position,
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
    style: {
      '@media only screen and (max-height: 750px)': { paddingBottom: '0' }
    },

    navbar: {
      flow: 'column',
      lineHeight: `${38 / 16}em`,
      margin: 'Z1 - - -',
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
        ':not(:last-child)': {
          opacity: '.75',
          transition: 'opacity .3s ease-in-out',
          ':hover': { opacity: '1' }
        },
        ':last-child': {
          opacity: '.45',
          pointerEvents: 'none'
        },

        '@mobileL': {
          fontSize: 'Z',
          border: 'solid, cream2 .75',
          borderWidth: '.75px',
          animation: 'none',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: '700',
          boxSize: '- G',
          padding: 'X -',
          round: 'C',
          background: 'cream2 .015'
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
    },

    title: {
      display: 'none',
      fontSize: 'B',
      color: 'cream2',
      textTransform: 'uppercase',
      letterSpacing: '5px',
      '@mobileL': { display: 'block' }
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
