'use strict'

import { Box } from '@symbo.ls/symbols'

export const image = {
  proto: Box,
  tag: 'span',

  props: {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0'
  },

  style: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    boxShadow: ' inset 0px 0px 5px 0px rgba(0, 0, 0, .6)',
    transition: 'height .7s ease-in-out, opacity .7s ease-in-out, background-position 3s ease-in-out'
  },

  class: {
    show: (element, state) => state.activeImage === parseInt(element.key)
      ? {
        height: '100%',
        opacity: 1
      }

      : {
        backgroundPosition: 'center center',
        height: '0',
        opacity: 0
      }
  }
}
