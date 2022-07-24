'use strict'
import { Box } from 'smbls'
import { BuildingHistory } from '../../texts'

const buildingHistory = {
  proto: [BuildingHistory, Box],
  props: {
    flexFlow: 'column',
    gap: 'B',
    maxWidth: `${600 / 14.3}em`,
    color: 'black .75',
    fontFamily: 'Dejavu',
    padding: 'G2 0 G 0',
    // margin: 'D 0',
    '@tabletL': {
      padding: 'G D E D'
    },
    '@mobileL': {
      padding: 'G D1 G D1'
    },
    '@mobileM': {
      padding: 'F C 0 C'
    }
  },
  style: {
    textAlign: 'justify',
    wordSpacing: '-1px',
    fontSize: `${14.3 / 16}em`,
    '@media only screen and (max-width: 1366px)': { fontSize: `${16 / 16}em` },
    '@media only screen and (max-width: 560px)': { fontSize: `${14 / 16}em` },
    '> div': { lineHeight: `${23.5 / 14.3}em`, letterSpacing: `${0.8 / 14.3}em` }
  }
}

export default {
  proto: Box,
  props: {
    flexAlign: 'center center',
    padding: '0 0'
  },
  attr: { id: 'residence' },

  buildingHistory
}
