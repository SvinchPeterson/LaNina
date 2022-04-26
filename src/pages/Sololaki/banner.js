'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { opacity, zoomiIn } from '../../animations'
import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/sololaki/sololaki-tablet.jpg'
import SOLOLAKI_MOBILE_JPG from '../../assets/images/sololaki/sololaki-mobile.jpg'

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
    animationName: zoomiIn,
    animationDuration: '7s',
    animationTimingFunction: 'ease-in-out',
    '@media only screen and (min-width: 1225px)': {
      backgroundAttachment: 'fixed',
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .15), rgba(42, 81, 61, .8)), url(' + SOLOLAKI_JPG + ')'
    },
    '@media only screen and (max-width: 1225px)': {
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .15), rgba(42, 81, 61, .8)), url(' + SOLOLAKI_TABLET_JPG + ')'
    },
    '@media only screen and (max-width: 768px)': {
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .15), rgba(42, 81, 61, .8)), url(' + SOLOLAKI_MOBILE_JPG + ')'
    }
  }

}

const heading = {
  proto: Box,
  props: {
    flexFlow: 'column',
    flexAlign: 'flex-start flex-end',
    position: 'absolute',
    padding: 'E'
  },
  title: {
    proto: [Text, Box],
    text: 'BB residence',
    props: {
      color: 'cream',
      size: 'F'
    },
    style: {
      letterSpacing: '-2.5px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  },
  caption: {
    proto: [Text, Box],
    props: {
      text: 'SOLOLAKI',
      // size: 'B',
      color: 'orange'
    },
    style: {
      fontWeight: 700,
      letterSpacing: '10px',
      marginTop: '-2px',
      marginLeft: '2px'
    }
  }
}

const paragraph = {
  tag: 'p',
  proto: [Text, Box],
  props: {
    // text: 'where ordinary, becomes extraordinary',
    size: 'B',
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'cream .75'
  },
  style: {
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    fontWeight: 500,
    letterSpacing: '5px',
    whiteSpace: 'nowrap',
    lineHeight: '30px',
    '@media only screen and (max-width: 768px)': {
      display: 'flex',
      flexFlow: 'column'
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
    flexAlign: 'flex-end flex-start'
  },
  style: {
    overflow: 'hidden',
    animationName: opacity,
    animationDuration: '3s',
    animationTimingFunction: 'linear'
  }
}

export const banner = {
  proto: container,

  image,
  heading,
  paragraph
}
