'use strict'

import { Flex, Link, Button, Img } from 'smbls'

import { TourGallery } from './TourGallery'
import { TourPackage } from './TourPackage'

import { TravelParagraph } from './TravelParagraph'

import CLOSE_PNG from '../assets/icons/close.png'

const props = {
  align: 'center center',
  alignSelf: 'center',
  gap: 'C',

  gallery: {
    transition: 'transform .7s ease'
  },

  article: {
    flow: 'column',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    zIndex: '100',
    // ':before': {
    //   content: '""',
    //   boxSize: 'E 100%',
    //   position: 'absolute',
    //   top: '0',
    //   left: '0',
    //   background: 'linear-gradient(to bottom, rgba(15, 49, 61, 1) 0%, rgba(15, 49, 61, 0) 100%)',
    //   // background: 'linear-gradient(to bottom,rgba(248, 241, 227, 1) 0%,rgba(248, 241, 227, 0) 100%)',
    //   zIndex: '3',
    //   pointerEvents: 'none'
    // },
    // ':after': {
    //   content: '""',
    //   boxSize: 'F 100%',
    //   position: 'absolute',
    //   bottom: '0',
    //   left: '0',
    //   background: 'linear-gradient(to top, rgba(15, 49, 61, 1) 0%, rgba(15, 49, 61, 0) 100%)',
    //   // background: 'linear-gradient(to top, rgba(248, 241, 227, 1) 0%, rgba(248, 241, 227, 0) 100%)',
    //   zIndex: '3',
    //   pointerEvents: 'none'
    // },

    close: {
      boxSize: 'fit-content fit-content',
      background: 'transparent',
      border: 'none',
      alignSelf: 'flex-end',
      zIndex: '4',
      position: 'absolute',
      top: 'A2',
      right: 'A2',
      padding: '0',
      transform: 'scale(.5)',
      ':hover': { opacity: '1' },
      icon: { boxSize: 'Z ' }
    },

    description: {
      maxWidth: 'H',
      fontSize: `${15.5 / 16}em`,
      letterSpacing: '.1px',
      color: 'cream2 .65',
      style: { span: { color: 'rgba(248, 241, 227, 1)' } }
    },
    package: {
      style: {
        // overflowY: 'auto',
        '> *': { transition: 'opacity 2s ease, transform .5s ease' }
      },
      content: { style: { overflowY: 'auto'  } }
    },
    more: {
      color: 'cream2 .85',
      cursor: 'pointer',
      border: 'solid, cream2 .5',
      borderWidth: '.5px 0 0 0',
      margin: 'Z - - -',
      padding: 'Y - - -',
      width: '70%',
      ':hover': { color: 'cream2' }
    }
  }
}
export const Tour = {
  extend: Flex,
  props,

  gallery: { extend: TourGallery },

  article: {
    extend: Flex,
    close: {
      extend: Button,
      icon: {
        extend: Img,
        props: { src: CLOSE_PNG }
      }
    },

    description: { extend: TravelParagraph },
    package: { extend: TourPackage },
    more: { extend: Link, text: 'more' }
  }
}
