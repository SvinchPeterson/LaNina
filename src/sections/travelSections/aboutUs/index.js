'use strict'

import { Flex } from 'smbls'

import { paragraph } from './paragraph'
import { team } from './team'

const props = {
  align: 'flex-start center',
  gap: 'C2',
  padding: 'E2 A2 F A2',
  margin: 'D - - -'
}

export const aboutUs = {
  extend: Flex,
  props,
  attr: { id: 'about' },

  paragraph,
  team
}
