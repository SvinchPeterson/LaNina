'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'

const props = {
  width: '100%',
  padding: 'F - - -',
  '@maxMobileM': { padding: 'E - - -' },
  '@maxHeightS': { padding: 'E - - -' }
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
