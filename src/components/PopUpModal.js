'use strict'

import { Img, Flex, Button } from 'smbls'

import CLOSE_PNG from '../assets/icons/close.png'
import LOGO_PNG from '../assets/icons/logo.png'

const props = {
  width: '100%',
  position: 'fixed',
  flow: 'column',
  align: 'center center',
  zIndex: '200',
  overflow: 'hidden',
  transition: 'height .85s ease',
  background: 'cream',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  '@minTabletM': { style:{ backgroundAttachment: 'fixed' } },
  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0'
  },

  close: {
    background: 'transparent',
    position: 'absolute',
    padding: '0',
    top: 'A1',
    right: 'A2',
    zIndex: '10',
    transition: 'opacity .5s ease-in-out, transform .5s ease-in-out',
    icon: { boxSize: 'Z2 ' }
  },

  logo: {
    boxSize: 'B2 ',
    position: 'absolute',
    left: 'B',
    bottom: 'B',
    zIndex: '2',
    transition: 'opacity .8s ease-in-out, transform .8s ease-in-out'
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

  contentContainer: {},

  logo: {
    extend: Img,
    props: { src: LOGO_PNG }
  }
}
