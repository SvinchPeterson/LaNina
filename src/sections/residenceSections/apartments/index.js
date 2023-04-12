'use strict'

import { Flex } from 'smbls'

import { ScrollTitle } from '../../../components'

import { tabs } from './tabs'

const props = {
  width: '100%',
  flow: 'column',
  gap: 'A',
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

  header: {
    alignSelf: 'center',
    width: '100%',
    padding: '- - A -',
    align: 'center center',
    title: {
      fontSize: `${11.5 / 16}em`,
      letterSpacing: `${12 / 11.5}em`,
      textTransform: 'uppercase',
      fontWeight: '400',
      margin: '- - - -'
    }
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

  header: {
    extend: Flex,
    title: { tag: 'h5', text: 'apartments' }
  },
  tabs,
  scroll: { extend: ScrollTitle }
}
