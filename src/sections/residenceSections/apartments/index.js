'use strict'

import { Flex } from 'smbls'

import { ScrollTitle } from '../../../components'

import { tabs } from './tabs'
// import { rooms } from './rooms'

const props = {
  width: '100%',
  flow: 'column',
  gap: 'A',
  align: 'center center',
  position: 'relative',
  padding: 'E2 - - -',
  margin: 'D2 - - -',
  overflow: 'visible',
  '@maxTabletM': { fontSize: `${15 / 16}em` },

  header: {
    alignSelf: 'center',
    width: '100%',
    padding: '- - - -',

    align: 'center center',
    title: {
      fontSize: `${11.5 / 16}em`,
      letterSpacing: `${9 / 11.5}em`,
      textTransform: 'uppercase',
      fontWeight: '400',
      margin: '- - - -'
    },
    scroll: {
      display: 'none',
    }
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
    title: { tag: 'h5', text: 'apartments' },
    scroll: { extend: ScrollTitle }
  },
  tabs
}
