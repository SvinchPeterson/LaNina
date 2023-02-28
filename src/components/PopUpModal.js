'use strict'

import { Img, Flex, Button } from 'smbls'

import CLOSE_PNG from '../assets/icons/close.png'
import LOGO_PNG from '../assets/icons/logoCream.png'

const props = {
  position: 'fixed',
  width: '100%',
  zIndex: '200',
  display: 'flex',
  flow: 'column',
  overflow: 'hidden',
  align: 'center center',
  transition: 'height .85s ease',

  logo: {
    boxSize: 'C ',
    position: 'absolute',
    left: 'C1',
    bottom: 'C',
    zIndex: '2',
    transition: 'opacity .8s ease-in-out, transform .8s ease-in-out'
  },

  close: {
    background: 'transparent',
    position: 'absolute',
    right: 'B',
    top: 'B',
    zIndex: '2',
    transition: 'opacity .5s ease-in-out, transform .5s ease-in-out',
    icon: { boxSize: 'A2 ' }
  }
}

export const PopUpModal = {
  extend: Flex,
  props,

  close: {
    extend: Button,
    icon: {
      extend: Img,
      props: { src: CLOSE_PNG }
    }
  },
  content: {},
  logo: {
    extend: Img,
    props: { src: LOGO_PNG }
  }
}
