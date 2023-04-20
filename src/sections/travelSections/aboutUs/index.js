'use strict'

import { Flex } from 'smbls'

import { article } from './article'
import { team } from './team'

const props = {
  align: 'flex-start center',
  gap: 'E',
  padding: 'D2 A2 F A2',
  '@maxTabletL': {fontSize: `${14.5 / 16}em`},
  '@maxTabletS': {
    flow: 'column',
    align: 'center center',
    gap: 'C',
  }
}

export const aboutUs = {
  extend: Flex,
  props,
  attr: { id: 'about' },

  article,
  team
}
