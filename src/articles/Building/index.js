'use strict'
import { Box } from '@symbo.ls/symbols'
import { BuildingHistory } from '../../texts'

export default {
  proto: Box,
  props: {
    padding: 'G2 0 E2 0',
    flexAlign: 'center center',
    '@tabletL': { padding: 'F 0 0 0' },
    '@mobileM': { padding: 'F 0 0 0' }
  },
  attr: { id: 'residence' },

  p: {
    proto: [BuildingHistory, Box],
    props: {
      maxWidth: `${700 / 15}em`,
      color: 'black .35',
      padding: '0 D',
      '@tabletL': { maxWidth: `${650 / 15}em` },
      '@tabletS': { padding: '0 C1' },
      '@mobileM': { padding: '0 B2' },

      '@mobileXS': { padding: '0 B1' }
    },
    style: {
      textAlign: 'justify',
      fontSize: `${15 / 16}em`,
      lineHeight: `${25 / 15}em`,
      '@media only screen and (max-width: 480px)': { fontSize: `${14 / 16}em` }
    }
  }
}
