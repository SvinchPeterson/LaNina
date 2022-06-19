'use strict'

import { Box } from '@symbo.ls/symbols'
import { position } from '../../animations'

export const image = {
  proto: Box,
  tag: 'span',

  props: {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    '@tabletL': {
      width: '100%',
      height: '100%'
    }
  },

  style: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    boxShadow: ' inset 0px 0px 5px 0px rgba(0, 0, 0, .6)',
    '@media only screen and (min-width: 1225px)': {
      transition: 'height .7s ease-in-out, opacity .7s ease-in-out, background-position 3s ease-in-out'
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
        '@media only screen and (max-width: 1225px)': { opacity: 1 }
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
