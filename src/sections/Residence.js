'use strict'
import { ResidenceText } from '../texts'

import { SectionTitle } from '../components'

const title = {
  proto: SectionTitle
  // props: { css: { border: '4px solid green' } }
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
      padding: '0 B2'
    },
    '@mobileM': {
      fontSize: 'Z'
    },
    css: { '> div': { lineHeight: `${23.5 / 15}em` } }
  }
}

export const Residence = {
  props: {
    flexFlow: 'column',
    flexAlign: 'center flex-start',
    padding: 'G 0',
    gap: 'C',
    '@mobileL': {
      padding: 'E2 0'
    }
    // css: { border: '3px solid red' }
  },
  attr: { id: 'residence' },

  title,
  paragraph
}
