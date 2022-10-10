'use strict'
import { Flex } from 'smbls'
import { Title, Navbar } from '../../components'

import { animContainer, animContainer2, animTitle, animAfter, animContent } from './animations'

import LOGO_BIG_PNG from '../../assets/icons/logoBig.png'
import ORNAMENTS_PNG from '../../assets/images/sololaki/ornamentsGray.png'

// import ORNAMENTS_PNG from '../../assets/images/sololaki/ornamentsLight.png'

const logo = {
  props: {
    boxSize: '70% 50%',
    alignSelf: 'center',
    backgroundImage: 'url(' + LOGO_BIG_PNG + ')',
    backgroundSize: 'contain',
    position: 'absolute',
    margin: '0 auto',
    '@tabletL': { display: 'none' },
    style: {
      marginTop: '50px',
      marginRight: '200px',

      backgroundRepeat: 'no-repeat',
      transform: 'rotate(-20deg) skew(25deg)'

      // border: '10px solid red'
    }
  }
}

const title = {
  extend: Title,
  props: {
    fontSize: 'I',
    position: 'relative',
    style: {
      animationName: animTitle,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      zIndex: '100',
      opacity: 1
    }
  }
}

const navBar = {
  extend: Navbar,
  props: {
    padding: 'A2 - - -',
    margin: '0 - - -',
    flexFlow: 'column',
    alignSelf: 'flex-start',
    position: 'relative',
    gap: 'A2',
    ':after': {
      content: '""',
      position: 'absolute',
      top: '0px',
      opacity: '.75',
      height: '1px',
      width: '150%',
      right: '0',
      background: 'radial-gradient(rgba(248, 241, 227, .6), rgba(248, 241, 227, .2))',
      borderRadius: '20px',
      '@mobileL': {
        width: '100%'
      }
    },
    style: {
      '> a:not(:last-child)': {
        opacity: '.75',
        '&:hover': { opacity: 1 }
      },
      '> a:last-child': { opacity: '.55' },
      '> a:last-child:after': {
        content: '"soon"',
        position: 'absolute',
        bottom: `-${35 / 16}em`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 300,
        textTransform: 'lowercase',
        color: '#FFCEA8',
        opacity: '.8',
        display: 'none'
      }
    }
  },

  childExtend: {
    extend: Flex,
    props: {
      position: 'relative',
      fontSize: 'Z',
      // padding: '- - A2 -',
      align: 'center center',
      // background: 'radial-gradient(rgba(244, 233, 217, 1), rgba(244, 233, 217, 1)',
      round: 'B',
      style: { zIndex: 10 },
      '@tabletL': {
        padding: '0 B2',
        background: 'cream .25',
        height: 'C1',
        style: { mixBlendMode: 'blur(10px)' }
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
    {
      props: {
        text: 'travel',
        href: '/Travel'
      }
    },
    { props: { text: 'rental' } }
  ]
}

const props = {
  boxSize: '100% 100%',
  position: 'absolute',
  top: 0,
  left: 0,
  background: 'white .5',
  sh: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    // background: 'radial-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .55), rgba(0, 0, 0, .65), rgba(0, 0, 0, .75), rgba(0, 0, 0, .8), rgba(0, 0, 0, .85))',
    background: 'radial-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .55),rgba(0, 0, 0, .6), rgba(0, 0, 0, .65),rgba(0, 0, 0, .7), rgba(0, 0, 0, .75), rgba(0, 0, 0, .8), rgba(0, 0, 0, .85), rgba(0, 0, 0, .9), rgba(0, 0, 0, 1))',
    zIndex: '100'
  },

  container: {
    minWidth: '50%',
    minHeight: '100%',
    justifyContent: 'center',
    backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
    ':before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '20',
      background: 'radial-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .6), rgba(0, 0, 0, .8), rgba(0, 0, 0, .9))',
      opacity: '.85'
    },
    style: {
      margin: '0 auto',
      alignSelf: 'center',
      backgroundPosition: 'top center',
      backgroundAttachment: 'fixed',
      animationName: animContainer,
      animationDuration: '15s',
      animationTimingFunction: 'linear',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflow: 'hidden',
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
      gap: '0',
      align: 'center center',
      padding: '- - D -',
      margin: '- - - G',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid rgba(255, 255, 255, 1)',
      '@tabletL': {
        margin: '0'
      },

      style: {
        zIndex: '200',
        animationName: animContent,
        animationDuration: '2s',
        animationTimingFunction: 'ease-in-out'
      }
    }
  }
}

export default {
  props,
  sh: {},
  container: {
    extend: Flex,
    logo,
    content: {
      extend: Flex,
      title,
      navBar
    }
  }
}
