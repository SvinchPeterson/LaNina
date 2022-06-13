'use strict'
import { Box } from '@symbo.ls/symbols'
import { bbSololaki } from '../../texts'

export default {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    flexAlign: 'center center'
  },
  p: {
    proto: [bbSololaki, Box],
    props: {
      maxWidth: 'H2',
      color: 'black .35'
    },
    style: {
      fontSize: `${15 / 16}em`,
      lineHeight: `${25 / 15}em`
    }

  }
}
