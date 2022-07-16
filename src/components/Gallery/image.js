'use strict'

import { Box } from '@symbo.ls/symbols'

export const image = {
  proto: Box,
  tag: 'span',

  props: {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%'
  },

  style: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    boxShadow: ' inset 0px 0px 5px 0px rgba(0, 0, 0, .6)',
    borderRadius: '10px',
    transition: 'height .7s ease-in-out, opacity .7s ease-in-out, background-position 3s ease-in-out',
    '@media only screen and (max-width: 1366px)': {
      backgroundAttachment: 'initial'
    }
  },

  class: {
    show: (element, state) => state.activeImage === parseInt(element.key)
      ? {
        opacity: 1,
        '@media only screen and (min-width: 1366px)': {
          height: '100%'
        }
      }

      : {
        backgroundPosition: 'center center',
        opacity: 0,
        height: '100%',
        '@media only screen and (min-width: 1366px)': {
          height: '0'
        },
        '@media only screen and (max-width: 1366px)': {
          height: '100%'
        }
      }
  }
}
