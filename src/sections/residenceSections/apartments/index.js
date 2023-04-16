'use strict'

import { Flex } from 'smbls'

import { ScrollTitle, SectionTitle } from '../../../components'

import { tabs } from './tabs'

const props = {
  width: '100%',
  flow: 'column',
  gap: '0',
  align: 'center center',
  position: 'relative',
  padding: 'E2 - - -',
  margin: 'D2 - - -',
  overflow: 'visible',
  '@maxTabletM': {
    fontSize: `${15 / 16}em`,
    gap: 'Y2'
  },
  '@maxHeightS': { padding: 'E - - -' },

  title: {
    fontSize: `${11 / 16}em`,
    letterSpacing: `${10 / 11}em`,
    padding: '- - C -'


  },

  scroll: {
    display: 'none',
    alignSelf: 'center',
    padding: 'Z - - -',
    '@maxTabletS': { display: 'flex' }
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
  title: {
    extend: SectionTitle,
    ':before': {},
    text: 'apartments',
    ':after': {},
  },
  tabs,
  scroll: { extend: ScrollTitle }
}
