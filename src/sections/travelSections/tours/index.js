'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'


const props = {
  width: '100%',
  margin: 'E - E -',
  padding: 'F - - -',

  '@maxHeightO': { padding: 'E1 -'},
  '@maxHeightN': { padding: '0', minHeight: '100%'}
}

export const tours = {
  extend: Flex,
  props,
  attr: { id: 'tours' },
  tabs
}
