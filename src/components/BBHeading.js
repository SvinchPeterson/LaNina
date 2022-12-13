'use strict'

import { Flex, Img, Link } from 'smbls'
import { Title } from './Title'

import { opacity, opacityLetterSpacing } from '../animations'

// import LOGO_BIG_PNG from '../assets/icons/logoBig.png'
import LOGO_PNG from '../assets/icons/logoCream.png'
import BACK_PNG from '../assets/icons/arrowBack.png'

const props = {
  align: 'center center',

  gap: 'Y1',
  zIndex: '3',
  style: {
    animationName: opacity,
    animationDuration: '3s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
  },

  logo: {
    position: 'relative',
    flow: 'column',
    align: 'center center',
    width: 'fit-content',
    img: {
      boxSize: 'B1 ',
      opacity: '.85',
      src: LOGO_PNG
    },
    back: {
      boxSize: ' B',
      position: 'absolute',
      bottom: '-B1',
      left: '50%',
      zIndex: '3',
      transform: 'translate(-50%, -50%)',
      icon: {
        boxSize: ' B'
      }
    }
  },

  title: {
    fontSize: 'A',
    color: 'white .95',
    fontWeight: '400',
    textTransform: 'uppercase',
    style: {
      letterSpacing: '1.4px',
      animationName: opacityLetterSpacing,
      animationDuration: '2s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    },
    text: 'hospitality'
  }

}

export const BBHeading = {
  extend: Flex,
  props,

  logo: {
    extend: Flex,
    img: { extend: Img },
    back: {
      extend: Link,
      props: {
        href: '../#landing',
        cursor: 'pointer'
      },
      icon: {
        extend: Img,
        props: { src: BACK_PNG }
      }
    }
  },

  title: { extend: Title }
}
