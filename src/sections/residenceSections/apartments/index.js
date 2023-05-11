'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'

const props = {
  width: '100%',
  padding: 'F - - -',
  '@maxTabletL': {
    padding: '0',
    margin: 'F - - -'
  }
}

export const apartments = {
  tag: 'section',
  extend: Flex,
  props,
  class: {
    show: (element, state) => state.activeTab
      ? { zIndex: '70' } : { zIndex: 1 }
  },
  attr: { id: 'apartments' },
  tabs
}
