'use strict'
import { Box, Grid, Img } from '@symbo.ls/symbols'
import { BuildingHistory } from '../../texts'

const buildingHistory = {
  proto: [BuildingHistory, Box],
  props: {
    flexFlow: 'column',
    gap: 'B',
    maxWidth: `${650 / 14.3}em`,
    color: 'black .75',
    padding: '0 D1',
    // fontWeight: '500',
    fontFamily: 'Dejavu',
    '@tabletL': { maxWidth: `${650 / 15}em` },
    '@tabletS': { padding: '0 C1' },
    '@mobileM': { padding: '0 B2' },

    '@mobileXS': { padding: '0 B1' }
  },
  style: {
    // border: '2px solid red',
    textAlign: 'justify',
    wordSpacing: '-1px',
    fontSize: `${14.3 / 16}em`,
    lineHeight: `${21 / 14.3}em`,
    '@media only screen and (max-width: 480px)': { fontSize: `${14 / 16}em` },
    '> div': { lineHeight: '25px', letterSpacing: '.8px' }
  }
}

export default {
  proto: Box,
  props: {
    minHeight: '100%',
    height: '100%',
    flexAlign: 'center center'
    // padding: 'G2 0 E2 0'
  },
  attr: { id: 'residence' },

  buildingHistory
}
