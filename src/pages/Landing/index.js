'use strict'
import { Block, Button, Img } from '@rackai/symbols'

import Logo from '../../assets/logo.png'
import style from './style'

const logo = {
  proto: Img,
  props: { src: Logo }
}
const borderHorizontal = {
  style: {
    width: '50em',
    height: '3em',
    // border: '2px solid red',
    position: 'absolute'
  }
}

const borderVertical = {
  style: {
    width: '3em',
    height: '50em',
    position: 'absolute'
  }
}

const container = {
  style: {
    width: 'calc(100% - 6em)',
    height: 'calc(100% - 6em)',
    border: '5px solid black',
    position: 'absolute',
    display: 'flex'
  },
  childProto: {
    proto: Block,
    style: {
      width: '50%',
      height: '100%',
      border: '1px solid black'
    }
  },
  ...[
    {},
    {}
  ]
}
export default {
  style,

  leftHorizontalBorder: {
    proto: borderHorizontal,
    style: {
      top: 0,
      left: 0,
      background: '#F4E2AB'
    }
  },
  leftVerticalBorder: {
    proto: borderVertical,
    style: {
      top: '3em',
      left: 0,
      background: '#F4E2AB'
    }
  },

  rightHorizontalBorder: {
    proto: borderHorizontal,
    style: {
      bottom: 0,
      right: 0,
      background: '#F59F77'
    }
  },

  rightVerticalBorder: {
    proto: borderVertical,
    style: {
      bottom: '3em',
      right: 0,
      background: '#F59F77'
    }
  },
  container,
  logo
}
