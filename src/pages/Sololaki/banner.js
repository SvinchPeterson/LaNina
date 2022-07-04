'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { position, height, letterSpacing, letterSpacing4, position2, height2, height3, letterSpacing2 } from '../../animations'
import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/sololaki/sololaki-tablet.jpg'

const heading = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '45%',
    right: '17.5%',
    flexFlow: 'column',
    flexAlign: 'flex-start flex-start',
    '@tabletL': {
      right: '5.5%'
    },
    '@mobileM': {
      top: '50%',
      right: 'auto',
      left: '50%'
    }
  },
  style: {
    '@media only screen and (max-width: 560px)': {
      right: 'initial',
      transform: 'translate(-50%, -50%)'
    }
  },

  span: {
    proto: [Text, Box],
    props: {
      fontSize: 'A',
      text: 'sololaki',
      color: 'orange2 .85',
      position: 'absolute',
      top: '0',
      right: 'A',
      '@tabletL': {
        top: '0',
        right: '0'
      },
      '@mobileL': {
        top: 'auto',
        right: 'C',
        color: 'orange2',
        bottom: '-B1'
      },
      '@mobileM': {
        fontSize: 'B',
        top: 'A2',
        right: 'B1'
      }
    },
    style: {
      width: 'fit-content',
      textTransform: 'uppercase',
      fontWeight: 900,
      overflow: 'hidden',
      letterSpacing: `${10 / 16}em`,
      animationName: letterSpacing,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      // animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)',
      '@media only screen and (max-width: 768px)': {
        letterSpacing: `${8 / 16}em`,
        animationName: letterSpacing2
      },
      '@media only screen and (max-width: 560px)': {
        letterSpacing: `${5 / 16}em`,
        animationName: letterSpacing4
      }
    }
  },

  h1: {
    proto: [Text, Box],
    props: {
      text: 'BB Residence',
      color: 'gold',
      margin: '0',
      '@mobileM': {
        maxWidth: 'D1',
        lineHeight: `${70 / 70}em`
      }
    },
    style: {
      fontSize: `${100 / 16}em`,
      paddingRight: `${15 / 100}em`,
      overflow: 'hidden',
      animationName: height,
      animationDuration: '2.5s',
      animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)',
      fontWeight: 100,
      letterSpacing: `${-3 / 120}em`,

      textShadow: '0px 0px 20px rgba(0, 0, 0, .35)',
      '@media only screen and (max-width: 768px)': {
        fontSize: `${80 / 16}em`,
        fontWeight: 100,
        animationDuration: '1.5s',
        animationName: height2,
        height: `${100 / 80}em`
      },
      '@media only screen and (max-width: 560px)': {
        fontWeight: '100',
        fontSize: `${70 / 16}em`,
        animationName: height3,
        height: `${170 / 70}em`,
        animationDuration: '3s'
      }
    }
  }
}

const image = {
  proto: Box,
  props: {
    boxSize: '60% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    '@tabletL': {
      boxSize: '80% 60%',
      top: '48%',
      left: '0%'
    },
    '@mobileM': {
      boxSize: '100% 105%'
    }
  },
  style: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    animationName: position,
    animationDuration: '10s',
    animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)',
    '@media only screen and (min-width: 1366px)': {
      backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
      backgroundAttachment: 'fixed'
    },
    '@media only screen and (max-width: 1366px)': {
      backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')',
      transform: 'translate(0%, -50%)'
    },
    '@media only screen and (max-width: 560px)': {
      backgroundPosition: 'bottom left',
      animationName: position2

    },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'linear-gradient(rgba(60,84, 72, .25), rgba(60,84, 72, .85))',
      '@media only screen and (max-width: 560px)': {
        background: 'linear-gradient(rgba(60,84, 72, .65), rgba(60,84, 72, .85))'
      }
    }
  }
}
const container = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    position: 'relative'
  },
  style: {
    overflow: 'hidden',
    background: 'radial-gradient(rgba(60,84, 72, .8), rgba(60,84, 72, 1))',
    '@media only screen and (max-width: 1366px)': {
      background: 'linear-gradient( rgba(60,84, 72, .95), rgba(60,84, 72, .85))'
    }
  }
}

export const banner = {
  proto: container,

  image,
  heading
}
