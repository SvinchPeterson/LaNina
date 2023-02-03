'use strict'

import { Box } from 'smbls'

export const image = {
  extend: Box,
  tag: 'span',

  props: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    style: {
      backgroundRepeat: 'no-repeat',
      boxShadow: ' inset 0px 0px 5px 0px rgba(0, 0, 0, .6)',
      transition: 'height .7s ease-in-out, opacity .7s ease-in-out, background-position 3s ease-in-out'
    }
  },

  class: {
    show: (element, state) => state.activeImage === parseInt(element.key)
      ? { opacity: 1 } : { opacity: 0 }
  }
}
