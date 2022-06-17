'use strict'

import { Box } from '@symbo.ls/symbols'
import { position } from '../../animations'

export const image = {
  proto: Box,
  props: {
    position: 'absolute',
    boxSize: '100% ',
    top: '0',
    left: '0'
  },
  tag: 'span',
  style: {
    boxShadow: ' inset 0px 0px 5px 0px rgba(0, 0, 0, .6)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    '@media only screen and (min-width: 1225px)': {
      backgroundAttachment: 'fixed',
      transition: 'height .7s ease-in-out, opacity .7s ease-in-out, background-position 3s ease-in-out',
      width: '100%'
    },
    '@media only screen and (max-width: 1225px)': {
      width: '100%',
      height: '100%',
      transition: 'opacity .7s ease-in-out'
    }
  },

  class: {
    show: (element, state) => state.activeImage === parseInt(element.key)
      ? {
        '@media only screen and (min-width: 1225px)': {
          height: '100%',
          opacity: 1,
          animationName: position,
          animationDuration: '1s',
          animationTimingFunction: 'ease-in-out'
        },
        '@media only screen and (max-width: 1225px)': {
          opacity: 1
        }
      }
      : {
        backgroundPosition: 'center center',
        '@media only screen and (min-width: 1225px)': {
          height: '0',
          opacity: 0
        },
        '@media only screen and (max-width: 1225px)': {
          opacity: 0
        }
      }
  }
}
