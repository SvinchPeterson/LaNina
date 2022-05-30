'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { opacity, positionOpacity2, letterSpacing2 } from '../../animations'
import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/sololaki/sololaki-tablet.jpg'
import SOLOLAKI2_JPG from '../../assets/images/CoverPage/sololaki.jpg'

const image = {
  proto: Box,
  props: {
    position: 'absolute',
    boxSize: '100% 100%',
    top: '0',
    left: '0'
  },
  style: {
    boxSizing: 'border-box',
    backgroundSize: 'cover',
    // backgroundPosition: 'center',
    animationName: positionOpacity2,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    position: 'relative',
    backgroundPosition: 'center',
    '@media only screen and (min-width: 1225px)': {
      backgroundAttachment: 'fixed',
      backgroundImage: 'url(' + SOLOLAKI2_JPG + ')'
    },
    '@media only screen and (max-width: 1024px)': {
      animation: 'none',
      backgroundPosition: 'left'
    },
    '@media only screen and (max-width: 1225px)': {
      backgroundImage: 'url(' + SOLOLAKI_JPG + ')'
    },
    '@media only screen and (max-width: 768px)': {
      backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(42, 81, 61, 1), rgba(42, 81, 61, 1))',
      opacity: '.5'
    }
  }

}

const heading = {
  proto: Box,
  props: {
    flexFlow: 'column',
    flexAlign: 'flex-start center',
    position: 'absolute',
    padding: '0 0 E E',
    gap: '0'
  },
  style: {
    '@media only screen and (max-width: 768px)': {
      padding: `0 0 ${50 / 16}em ${50 / 16}em`
    },
    '@media only screen and (max-width: 480px)': {
      padding: `0 0 ${100 / 16}em 0`,
      alignSelf: 'center'
      // alignItems: 'center'
    }
  },

  title: {
    proto: [Text, Box],
    text: 'BB Residence',
    props: {
      color: 'cream 1',
      size: 'G'
    },
    style: {
      // fontSize: `${60 / 16}em`,
      fontWeight: 200,
      // textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  },
  caption: {
    proto: [Text, Box],
    props: {
      text: 'SOLOLAKI',
      size: 'A',
      color: 'gold .85',
      padding: '0 0 0 W2'
    },
    style: {
      fontWeight: 900,
      letterSpacing: '8px',
      marginTop: '0px',
      marginLeft: '0px'
    }
  }
}

const paragraph = {
  tag: 'p',
  proto: [Text, Box],
  props: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'cream 1'
  },
  style: {
    fontSize: '15px',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    fontWeight: 900,
    letterSpacing: '5px',
    whiteSpace: 'nowrap',
    animationName: letterSpacing2,
    animationDuration: '1.5s',
    animationTimingFunction: 'ease-in-out',
    '@media only screen and (max-width: 768px)': {
      display: 'flex',
      flexFlow: 'column',
      fontSize: '16px',
      lineHeight: `${23 / 16}em`,
      textAlign: 'center'
    },
    '@media only screen and (max-width: 380px)': {
      fontSize: '14px'

    }
  },
  span: { text: 'where ordinary,' },
  span2: { tag: 'span', text: 'becomes extraordinary' }
}

const container = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    position: 'relative',
    flexAlign: 'flex-start flex-end',
    flexFlow: 'column'
  },
  style: {
    overflow: 'hidden',
    animationName: opacity,
    animationDuration: '3s',
    animationTimingFunction: 'linear',
    margin: '0 auto'
  }
}

export const banner = {
  proto: container,

  image,
  heading,
  paragraph
}
