'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'

import ORNAMENT_JPG from '../../../assets/images/travel/ornament.png'

const props = {
  width: '100%',
  flow: 'column',
  padding: 'E2 -',
  margin: 'D2 - - -',
  position: 'relative',
  round: 'G G 0 0',
  style: { backgroundAttachment: 'fixed' },
  '@maxTabletM': {
    padding: 'E -',
    fontSize: `${14 / 16}em`,
  },
  '@maxMobileL': {
    margin: '0 - - -'
  },
  title: {
    alignSelf: 'center',
    padding: '- - B -',
    textTransform: 'uppercase',
    '@maxMobileL': {
      padding: '- - A -'
    }
  },

  scroll: {
    '@minMobileL': { display: 'none' },
    zIndex: '5',
    color: 'cream',
    padding: 'A A - -',
    alignSelf: 'flex-end'
  }
}

export const tours = {
  extend: Flex,
  props,
  attr: { id: 'tours' },
  tabs
}
