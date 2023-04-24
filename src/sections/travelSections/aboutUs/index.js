'use strict'

import { Flex } from 'smbls'

import { Paragraph } from '../../../components'
import { $aboutUs } from '../../../texts/travel'

import { team } from './team'

const props = {
  align: 'flex-start center',
  gap: 'E',
  padding: 'E A2 F A2',
  '@maxTabletL': {fontSize: `${14.5 / 16}em`},
  '@maxTabletS': {
    flow: 'column',
    align: 'center center',
    gap: 'C'
  }
}

export const aboutUs = {
  extend: Flex,
  props,
  attr: { id: 'about' },

  article: {
    extend: Paragraph,
    title: { text: 'about us' },
    p: { extend: $aboutUs }
  },
  team
}
