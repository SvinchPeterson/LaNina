'use strict'

import { Flex } from 'smbls'

import { ScrollTitle } from '../../../components'

import { tabs } from './tabs'
// import { rooms } from './rooms'

const props = {
  width: '100%',
  flow: 'column',
  gap: 'B1',
  align: 'center center',
  position: 'relative',
  style: {
    '@media only screen and (max-height: 1024px)': { minHeight: '100%' }
  },

  title: {
    h3: {
      fontSize: 'A',
      textTransform: 'uppercase',
      letterSpacing: `${10 / 16}em`,
      fontWeight: '700'
    },

    scroll: {
      display: 'none',
      '@tabletM': { display: 'flex' }
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

  title: {
    extend: Flex,
    h3: { text: 'apartment' },
    scroll: { extend: ScrollTitle }
  },
  tabs
  // rooms
}
