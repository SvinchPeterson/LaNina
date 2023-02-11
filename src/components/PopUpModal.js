'use strict'

import { Img, Flex, Button } from 'smbls'

import CLOSE_PNG from '../assets/icons/close.png'
import LOGO_PNG from '../assets/icons/logoBig.png'

const props = {
  position: 'fixed',
  boxSize: '100% 100%',
  zIndex: '200',
  background: '#0f313d',
  display: 'flex',
  flow: 'column',
  overflow: 'hidden',
  align: 'center center',

  logo: {
    boxSize: 'D ',
    position: 'absolute',
    left: 'C1',
    bottom: 'C',
    style: { transition: 'opacity .8s ease-in-out, transform .8s ease-in-out' }
  },

  close: {
    background: 'transparent',
    position: 'absolute',
    right: 'B',
    top: 'B',
    style: { transition: 'opacity .5s ease-in-out, transform .5s ease-in-out' },
    icon: { boxSize: 'A2 ' }
  }
}

export const PopUpModal = {
  extend: Flex,
  props,

  logo: { extend: Img, props: { src: LOGO_PNG } },
  close: { extend: Button, icon: { extend: Img, props: { src: CLOSE_PNG } } }
}
