'use strict'

import { Flex } from 'smbls'

import { TravelSectionTitle } from '../../../components'

import { tabs } from './tabs'

import ORNAMENT_JPG from '../../../assets/images/travel/ornament.png'

const props = {
  width: '100%',
  flow: 'column',
  padding: 'E2 -',
  margin: 'D2 - - -',
  position: 'relative',
  style: { backgroundAttachment: 'fixed' },
  '@maxTabletM': {
    padding: 'E -',
    fontSize: `${14 / 16}em`,
  },
  title: {
    alignSelf: 'flex-start',
    padding: '- - A D',
    color: 'black',
    textTransform: 'uppercase',
    '@maxMobileL': {
      alignSelf: 'center',
      padding: '- - A 0',
    }
  }
}

export const tours = {
  extend: Flex,
  props,
  attr: { id: 'tours' },
  title: { extend: TravelSectionTitle, text: 'tours' },
  tabs
}
