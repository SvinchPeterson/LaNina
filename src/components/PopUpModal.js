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
    top: '0',
    right: '0',
    zIndex: '15',
    transition: 'opacity .5s ease-in-out, transform .5s ease-in-out',
    padding: 'A1',
    icon: { boxSize: 'Z2 ' }
  },

  contentContainer: {
    zIndex: '10',
     style: {boxShadow: '0px 60px 30px 15px rgba(0, 0, 0, .25)'},
    // style: {
    // //  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    // }
  },

  logo: {
    boxSize: 'B2 ',
    position: 'absolute',
    left: 'B',
    bottom: 'B',
    zIndex: '2',
    zIndex: '20',
    transition: 'opacity .8s ease-in-out, transform .8s ease-in-out',
    '@maxMobileM': {  boxSize: 'B ' }
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
