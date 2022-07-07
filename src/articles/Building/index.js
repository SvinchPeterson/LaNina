'use strict'
import { Box } from '@symbo.ls/symbols'
import { BuildingHistory } from '../../texts'

const buildingHistory = {
  proto: [BuildingHistory, Box],
  props: {
    flexFlow: 'column',
    gap: 'B',
    maxWidth: `${650 / 14.3}em`,
    color: 'black .75',
    padding: '0 D1',
    fontFamily: 'Dejavu'
  },
  style: {
    textAlign: 'justify',
    wordSpacing: '-1px',
    fontSize: `${14.3 / 16}em`,
    '> div': { lineHeight: `${23.5 / 14.3}em`, letterSpacing: `${0.8 / 14.3}em` }
  }
}

export default {
  proto: Box,
  props: {
    minHeight: '100%',
    height: '100%',
    flexAlign: 'center center'
  },
  attr: { id: 'residence' },

  buildingHistory
}
