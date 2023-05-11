'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'

import ORNAMENT_JPG from '../../../assets/images/travel/ornament.png'

const props = {
  width: '100%',
  margin: 'G - F -',
  '@maxTabletL': {
    // minHeight: '100%'
  }
}

export const tours = {
  extend: Flex,
  props,
  attr: { id: 'tours' },
  tabs
}
