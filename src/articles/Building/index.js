'use strict'
import { Box } from '@symbo.ls/symbols'
import { bbSololaki } from '../../texts'

export default {
  proto: Box,
  props: {
    padding: 'G 0 0 0',
    flexAlign: 'center center'
  },
  attr: { id: 'residence' },

  p: {
    proto: [bbSololaki, Box],
    props: {
      maxWidth: `${750 / 15}em`,
      color: 'black .35',
      padding: '0 C'
    },
    style: {
      fontSize: `${15 / 16}em`,
      lineHeight: `${25 / 15}em`
    }
  }
}
