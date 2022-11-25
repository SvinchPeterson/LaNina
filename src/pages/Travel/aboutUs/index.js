'use strict'

import { Flex } from 'smbls'

import { paragraph } from './paragraph'

import { team } from './team'

const props = {
  align: 'flex-start center',
  gap: 'B1',
  padding: 'F A2 E2 A2',
  margin: 'D - - -',
  '@tabletL': {
    padding: 'E D - D',
    flow: 'column',
    align: 'flex-start flex-start',
    width: 'fit-content',
    margin: 'auto',
    gap: 'B'
  },
  '@mobileM': {
    padding: 'E B - B'
  }
}

export const aboutUs = {
  extend: Flex,
  props,
  attr: { id: 'about' },

  paragraph,
  team
}
