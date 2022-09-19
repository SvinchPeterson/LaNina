'use strict'

import { Title, Navbar } from '../../components'

import { animContainer, animContainer2, animTitle, animAfter, animContent } from './animations'

import LOGO_BIG_PNG from '../../assets/icons/logoBig.png'
import { Flex } from 'smbls'

const title = {
  extend: Title,
  props: {
    fontSize: 'K',
    color: 'gold .75',
    style: {
      animationName: animTitle,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      zIndex: 2,
      opacity: 1
    },
    '@mobileM': {
      fontSize: 'E',
      fontWeight: '900',
      textTransform: 'uppercase'
    }
  }
}

const navBar = {
  extend: Navbar,
  props: {
    padding: '0 C2 0 0',
    '@mobileM': {
      flexFlow: 'column',
      padding: '0'
    },
    style: {
      '> a:first-child': {
        opacity: '.75',
        '&:hover': { opacity: 1 }
      },
      '> a:not(:first-child)': {
        opacity: '.55'
      },
      '> a:not(:first-child):after': {
        content: '"soon"',
        position: 'absolute',
        bottom: `-${35 / 16}em`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 300,
        textTransform: 'lowercase',
        color: '#FFCEA8',
        opacity: '.8'
      }
    }
  },

  childExtend: {
    extend: Flex,
    props: {
      position: 'relative',
      style: { zIndex: 10 },
      '@mobileM': {
        background: 'cream2 .15',
        minWidth: 'F2',
        padding: 'A 0',
        align: 'centr center',
        round: 'D'
      }
    }
  },
  ...[
    {
      props: {
        text: 'residence',
        href: '/Sololaki'
      }
    },
    { props: { text: 'travel' } },
    { props: { text: 'rental' } }
  ]
}

const props = {
  boxSize: '100% 100%',
  position: 'absolute',
  top: 0,
  left: 0,
  background: 'radial-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .92))',

  container: {
    boxSize: '100% 100%',
    justifyContent: 'flex-end',
    '@tabletS': { justifyContent: 'center' },
    style: {
      zIndex: '100',
      backgroundImage: 'url(' + LOGO_BIG_PNG + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `top ${50 / 16}em left ${-450 / 16}em`,
      animationName: animContainer,
      animationDuration: '20s',
      animationTimingFunction: 'ease-in-out',
      overflow: 'hidden',
      '@media only screen and (max-width: 1366px)': {
        backgroundPosition: `top ${50 / 16}em left ${-280 / 16}em`,
        animationName: animContainer2
      },

      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(#212121, #1F1F1F, #1D1D1D, #1B1B1B, #181818, #151515, #111111, #101010)',
        opacity: '.85'
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'black',
        opacity: 0,
        animationName: animAfter,
        animationDuration: '3s',
        animationTimingFunction: 'ease-in-out',
        pointerEvents: 'none'
      }
    },

    content: {
      flow: 'column',
      gap: 'C',
      align: 'flex-end center',
      padding: '0 E2 F 0',
      '@tabletS': { padding: '0 0 F 0' },
      '@mobileM': {
        align: 'center center',
        padding: '0',
        gap: 'C2'
      },

      style: {
        animationName: animContent,
        animationDuration: '2s',
        animationTimingFunction: 'ease-in-out'
      }
    }
  }
}

export default {
  props,
  container: {
    extend: Flex,
    content: {
      extend: Flex,

      title,
      navBar
    }
  }
}
