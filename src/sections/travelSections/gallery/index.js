'use strict'

import { Flex } from 'smbls'

import { gridGalleries } from './gridGallery'

const props = {
  width: '100%',
  maxWidth: `${1440 / 16}em`,
  padding: 'F1 E1 - E1',
  margin: 'C auto',
  flow: 'column',
  '@maxTabletM': {
    padding: 'F1 D2 - D2',
  },
  '@maxTabletS': {
    padding: 'F 0 - 0',
    align: 'center center'
  }
}

export const gallery = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'gallery' },
  gridGalleries
}
