'use strict'

import { Flex } from 'smbls'


export const ResidenceSectionTitle = {
  tag: 'h5',
  extend: Flex,
  props: {
    width: 'fit-content',
    fontSize: `${10 / 16}em`,
    textTransform: 'uppercase',
    fontWeight: '400',
    letterSpacing: `${7 / 10}em`,
    align: 'center center',
    gap: 'Z',
    ':before': {
      content: '"|||"',
      color: 'orange',
      letterSpacing: `${3 / 10}em !important`,
    },
    ':after': {
      content: '"|||"',
      color: 'orange',
      letterSpacing: `${3 / 10}em`,
      margin: '- - - -3px'
    }
  }
}

export const TravelSectionTitle = {
  tag: 'h5',
  extend: Flex,
  props: {
    width: 'fit-content',
    fontSize: `${12 / 16}em`,
    textTransform: 'uppercase',
    fontWeight: '400',
    letterSpacing: `${12 / 12}em`,
    align: 'center center',
    gap: '0',
    ':before': {
      content: '""',
      boxSize: 'V C2',
      background: 'orange',
      margin: '12px'
    },

    ':after': {
      content: '""',
      boxSize: 'V C2',
      background: 'orange'
    }
  }
}