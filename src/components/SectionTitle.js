'use strict'

import { Flex } from 'smbls'


export const ResidenceSectionTitle = {
  tag: 'h5',
  extend: Flex,
  props: {

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
      background: 'orange .75',
      margin: '12px'
    },

    ':after': {
      content: '""',
      boxSize: 'V C2',
      background: 'orange .75'
    }
  }
}