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
  margin: 'D2 - - -',
  overflow: 'visible',
  style: {
    paddingTop: `${150 / 16}em`,
    // '@media only screen and (max-height: 800px)': {
    //   minHeight: '100%',
    //   paddingTop: `0`,
    // }
  },

  header: {
    alignSelf: 'center',
    width: '100%',
    padding: '- D2',
    // '@mobileM': {padding: '- B'},
    align: 'center space-between',
    // style: {
    //   '@media only screen and (max-height: 800px)': {
    //     position: 'absolute',
    //     top: '-30px'
    //   }
    // },
    title: {
      fontSize: `${12 / 16}em`,
      letterSpacing: `${10 / 12}em`,
      textTransform: 'uppercase',
      fontWeight: '400'
    },
    scroll: {
      display: 'none',
      // '@tabletM': { display: 'flex' }
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
  // rooms
}
