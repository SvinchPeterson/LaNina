'use strict'
import { Block, Img, Flex } from '@rackai/symbols'

import LaninaHeading from '../LaninaHeading'

import Logo from '../../assets/logoCream.png'

const logo = {
  proto: Img,
  props: { src: Logo },
  style: {
    width: '120px',
    height: '150px',
    opacity: '.65'
  }
}

export default {
  proto: [Block, Flex],
  props: { gap: 'B2' },
  style: {
    flexDirection: 'column',
    position: 'absolute',
    zIndex: '20',
    color: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    alignItems: 'center',
    textAlign: 'center',

    '> img': {
      width: `${80 / 16}em`,
      height: `${100 / 16}em`
    },
    '> div': {
      lineHeight: `${40 / 16}em`,
      opacity: '.65'
    },
    h4: {
      fontSize: `${48 / 16}em`
    }
  },
  logo,
  LaninaHeading
}
