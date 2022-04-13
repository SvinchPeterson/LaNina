'use strict'

import { Box } from '@symbo.ls/symbols'

export const image = {
  proto: Box,
  props: {
    position: 'absolute',
    boxSize: '100% 100%',
    top: '0',
    left: '0'
  },
  tag: 'span',
  style: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@media only screen and (min-width: 1225px)': {
      backgroundAttachment: 'fixed'

    }
  }
}
