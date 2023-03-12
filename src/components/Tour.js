'use strict'

import { Flex, Link, Button, Img } from 'smbls'

import { TourGallery } from './TourGallery'
import { TourPackage } from './TourPackage'

import { TravelParagraph } from './TravelParagraph'

import CLOSE_PNG from '../assets/icons/close.png'

const props = {
  align: 'flex-start center',
  alignSelf: 'center',
  gap: 'C',
  // border: '5px solid purple',

  gallery: {
    transition: 'transform .7s ease'
    // border: '5px solid orange'
  },

  article: {
    flow: 'column',
    padding: 'A - - -',

    // transition: 'transform .7s ease, background 1s ease, box-shadow 1s ease',
    // border: '5px solid pink',
    zIndex: '100',
    style: {
      overflowY: 'hidden',
      '> *': { transition: 'transform .7s ease' }
    },

    close: {
      boxSize: 'fit-content',
      background: 'transparent',
      border: 'none',
      margin: '- A - -',
      alignSelf: 'flex-end',
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
        overflowY: 'auto',
        '> *': { transition: 'opacity 2s ease, transform .5s ease' }
      }
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
