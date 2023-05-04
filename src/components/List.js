'use strict'

import { Flex } from 'smbls'

const props = {
  boxSizing: 'border-box',
  flow: 'column',

  title: {
    text: 'amenities',
    fontSize: `${11 / 16}em`,
    fontWeight: '700',
    color: 'cream',
    textAlign: 'flex-start',
    letterSpacing: `${5 / 11}em`,
    textTransform: 'uppercase'
  },

  list: {
    align: 'flex-start flex-start',
    padding: 'Z 0 0 -',
    gap: 'C',
    childProps: {
      fontSize: `${13 / 16}em`,
      lineHeight: `${25 / 13}em`,
      flexFlow: 'column',
      letterSpacing: '1px',
      whiteSpace: 'nowrap',
      childProps: {
        align: 'center flex-start',
        color: 'cream .75',
        gap: 'Y2',
        ':before': {
          content: '""',
          boxSize: 'X X',
          display: 'block',
          background: 'cream .5',
          round: '100%'
        }
      }
    }
  }
}

export const List = {
  extend: Flex,
  props,
  title: {},
  list: {
    extend: Flex,
    childExtend: { childExtend: Flex }
  }
}