'use strict'

import { Title, Navbar } from '../../components'

import {
  animContainer, animContainer2, animContainer3, animTitle,
  animContainer4, animContainer5, animAfter, animContent
} from './animations'

import LOGO_BIG_PNG from '../../assets/icons/logoBig.png'

const title = {
  proto: Title,
  props: {
    fontSize: 'K',
    color: 'gold .75',
    css: {
      animationName: animTitle,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      zIndex: 2,
      opacity: 1
    },
    '@mobileM': {
      fontSize: 'E',
      // fontWeight: '900',
      textTransform: 'uppercase'
    }
  }
}

const navBar = {
  proto: Navbar,
  props: {
    padding: '0 C2 0 0',
    '@tabletS': { padding: '0 0 0 B' },
    '@mobileM': { flexFlow: 'column' },
    css: {
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

  childProto: {
    props: {
      position: 'relative',
      transition: 'background .3s ease-in-out',
      css: { zIndex: 10 },
      '@mobileM': {
        background: 'cream2 .15',
        minWidth: 'F2',
        padding: 'A 0',
        flexAlign: 'centr center',
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
    flexAlign: 'center flex-end',
    '@tabletS': { flexAlign: 'center center' },
    css: {
      zIndex: '100',
      backgroundImage: 'url(' + LOGO_BIG_PNG + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      animationName: animContainer,
      animationDuration: '20s',
      backgroundPosition: 'top 50px left -425px',
      animationTimingFunction: 'ease-in-out',
      overflow: 'hidden',
      '@media only screen and (max-width: 1366px)': {
        backgroundPosition: 'top 50px left -350px',
        animationName: animContainer2
      },
      '@media only screen and (max-width: 1024px)': {
        backgroundPosition: 'top 50px left -330px',
        animationName: animContainer3
      },
      '@media only screen and (max-width: 560px)': {
        backgroundPosition: 'top 50px left -300px',
        animationName: animContainer4
      },
      '@media only screen and (max-width: 480px)': {
        backgroundPosition: 'top 50px left -230px',
        animationName: animContainer5
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
      flexFlow: 'column',
      gap: 'C',
      flexAlign: 'flex-end center',
      padding: '0 E2 F 0',
      css: {
        animationName: animContent,
        animationDuration: '2s',
        animationTimingFunction: 'ease-in-out'
      },
      '@tabletS': {
        flexAlign: 'flex-start center',
        padding: '0 0 F1 0'
      },
      '@mobileL': {
        padding: '0 0 E 0',
        flexAlign: 'flex-start center'
      }
    }
  }
}

export default {
  props,
  container: { content: { title, navBar } }
}
