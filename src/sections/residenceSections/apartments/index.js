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
  // padding: 'E2 - - -',
  margin: 'F - - -',
  overflow: 'visible',
  style: {
    paddingTop: `${150 / 16}em`,
    '@media only screen and (max-height: 800px)': {
      minHeight: '100%',
      paddingTop: `0`,
    }
  },

  header: {
    alignSelf: 'center',
    fontSize: 'Z',
    width: '100%',
    padding: '- D',
    '@mobileM': {padding: '- B'},
    align: 'center space-between',
    style: {
      '@media only screen and (max-height: 800px)': {
        position: 'absolute',
        top: '-30px'
      }
    },
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

  header: {
    extend: Flex,
    h3: { text: 'apartments' },
    scroll: { extend: ScrollTitle }
  },
  tabs
  // rooms
}
