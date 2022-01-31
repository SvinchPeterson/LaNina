'use strict'
import { Block, Img, Flex } from '@rackai/symbols'
import { laninaResidence } from '../../texts'

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

const heading = {
  proto: laninaResidence,
  h4: {
    style: {
      letterSpacing: '2px',
      color: 'rgba(243, 231, 219, 1)'
    }
  },
  span: {
    props: {
      // size: 'B',
      // padding: 'B 0 0 0'
    },
    style: {
      fontSize: '18px',
      letterSpacing: '10px',
      width: '100%',
      boxSizing: 'border-box',
      paddingLeft: '10px',
      paddingTop: '100px',
      color: 'rgba(243, 231, 219, .65)'
    }
  }
}

export default {
  proto: [Block, Flex],
  props: {
    gap: 'B2',
    flexFlow: 'column',
    flexAlign: 'center center'
  },
  style: {
    background: 'transparent',
    texAlign: 'center',
    '> img': {
      width: `${80 / 16}em`,
      height: `${100 / 16}em`
    },
    '> div': {
      lineHeight: `${40 / 16}em`,
      opacity: '.65',
      // border: '2px solid red',
      textAlign: 'center',
      h4: { fontSize: `${48 / 16}em` }
      // span: { border: '2px solid red' }
    }
  },
  logo,
  heading
}
