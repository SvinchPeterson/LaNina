'use strict'

import { Flex } from 'smbls'

import { ScrollTitleBlack } from '../../../components'

// import { tabs } from './tabs'

import { tabs } from './tabs'

const props = {
  width: '100%',
  flow: 'column',
  gap: '0',
  align: 'center center',
  position: 'relative',
  overflow: 'visible',
  '@maxTabletM': {
    fontSize: `${15 / 16}em`,
    gap: 'Y2'
  },

  title: {
    fontSize: `${18 / 16}em`,
    fontWeight: '400',
    color: 'orange3 .75',
    textTransform: 'uppercase',
    position: 'absolute',
    top: 'F2',
    right: 'F',
    alignSelf: 'flex-start',
    padding: 'A C',
    round: 'C',
    zIndex: '35',
    letterSpacing: `${12 / 18}em`,
    '@maxTabletM': {
      right: 'E'
    },
    '@maxTabletS': { right: 'C2' },
    // '@maxTabletL': {
    //   right: 'E',
    //   letterSpacing: `${7 / 12}em`,
    //   style: {
    //     writingMode: 'vertical-rl',
    //     textOrientation: 'mixed'
    //   }
    // },

    '@maxMobileL': {
      fontSize: `${16 / 16}em`,
      // right: '50%',
      // transform: 'translate(50%, -50%)',
      letterSpacing: `${12 / 16}em`,
      top: 'E',
      right: '-C',
      style: {
        writingMode: 'initial',
        textOrientation: 'initial'
      }
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

  // attr: { id: 'apartments' },
  // title: {
  //   text: 'apartments'
  // },
  tabs
}
