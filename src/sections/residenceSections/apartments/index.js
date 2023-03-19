'use strict'

import { Flex } from 'smbls'

import { ScrollTitle } from '../../../components'

import { tabs } from './tabs'
// import { rooms } from './rooms'

const props = {
  width: '100%',
  flow: 'column',
  gap: 'A1',
  align: 'center center',
  position: 'relative',
  padding: 'E - - -',
  margin: 'F - - -',
  overflow: 'visible',
  style: {
    '@media only screen and (min-width: 1281px) and (max-height: 820px)': {
      minHeight: '100%',
      paddingTop: '0',
      marginTop: `${300 / 16}em`,
      header: {
        position: 'absolute',
        top: `${-40 / 13}em`
      }
    },

    '@media only screen and (min-width: 1281px) and (min-height: 900px)': {
      paddingTop: `${140 / 16}em`

    }
  },

  header: {
    alignSelf: 'flex-start',
    padding: '- - - E',
    fontSize: 'Z',
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
