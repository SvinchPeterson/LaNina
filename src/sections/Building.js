'use strict'
import { BuildingHistory } from '../texts'

const buildingHistory = {
  proto: BuildingHistory,
  props: {
    fontSize: `${15 / 16}em`,
    flexFlow: 'column',
    gap: 'B',
    maxWidth: `${650 / 15}em`,
    color: 'black .75',
    padding: 'G2 0 G 0',
    '@tabletL': {
      fontSize: 'A',
      padding: 'G D E D'
    },
    '@mobileL': { padding: 'G D1 G D1' },
    '@mobileM': {
      fontSize: 'Z',
      padding: 'F B 0 B'
    },
    css: { '> div': { lineHeight: `${23.5 / 15}em` } }
  }
}

export const Building = {
  props: { flexAlign: 'center center' },
  attr: { id: 'residence' },

  buildingHistory
}
