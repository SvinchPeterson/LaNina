'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { position, height, letterSpacing, letterSpacing4, position2, height2, height3, letterSpacing2, opacity2, opacity7 } from '../../animations'
import SOLOLAKI_JPG from '../../assets/images/sololaki/entrence2.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/sololaki/sololaki-tablet.jpg'

const heading = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '45%',
    right: '17.5%',
    flexFlow: 'column',
    flexAlign: 'flex-start flex-start'
  },

  // span: {
  //   proto: [Text, Box],
  //   props: {
  //     fontSize: 'A',
  //     text: 'sololaki',
  //     // color: 'gold .85',
  //     color: 'cream2 .5',
  //     position: 'absolute',
  //     top: '0',
  //     right: 'A'
  //   },
  //   style: {
  //     width: 'fit-content',
  //     textTransform: 'uppercase',
  //     fontWeight: 900,
  //     overflow: 'hidden',
  //     letterSpacing: `${10 / 16}em`,
  //     animationName: letterSpacing,
  //     animationDuration: '2.5s',
  //     animationTimingFunction: 'ease-in-out'
  //   }
  // },

  h1: {
    proto: [Text, Box],
    props: {
      text: 'BB Residence',
      color: 'orange3 1',
      margin: '0'
    },
    style: {
      fontSize: `${65 / 16}em`,
      paddingRight: `${15 / 100}em`,
      overflow: 'hidden',
      animationName: height,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      fontWeight: 100,
      letterSpacing: `${-3 / 120}em`,
      textShadow: '0px 0px 20px rgba(0, 0, 0, .35)'
    }
  }
}

const image = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0'
  },
  style: {

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    animationName: position,
    animationDuration: '7s',
    // animationTimingFunction: 'ease-in-out',
    animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)',
    backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
    backgroundAttachment: 'fixed',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      // background: 'linear-gradient(rgba(60,84, 72, .3), rgba(60,84, 72, .9))',
      background: 'radial-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .8))',
      animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)'
    }
  }
}
const container = {
  proto: Box,
  props: {
    minWidth: '100%',
    minHeight: '100%',
    position: 'relative'
  },
  style: {
    overflow: 'hidden',
    background: 'radial-gradient(rgba(60,84, 72, .8), rgba(60,84, 72, .95))',
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
      opacity: '0',
      position: 'absolute',
      animationName: opacity7,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out'

    }
  }
}

export const banner = {
  proto: container,

  image,
  heading
}
