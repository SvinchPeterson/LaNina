'use strict'
import { ResidenceText } from '../texts'

import { SectionTitle } from '../components'

const title = {
  proto: SectionTitle
}

const paragraph = {
  proto: ResidenceText,
  props: {
    fontSize: `${15 / 16}em`,
    flexFlow: 'column',
    gap: 'B',
    maxWidth: `${650 / 15}em`,
    color: 'black .75',
    // padding: 'G2 0 G 0',
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

export const Residence = {
  props: {
    flexFlow: 'column',
    flexAlign: 'center flex-start',
    padding: 'G 0 G 0',
    gap: 'C1'
  },
  attr: { id: 'residence' },

  title,
  paragraph
}
