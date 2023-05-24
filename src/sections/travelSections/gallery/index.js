'use strict'

import { Flex } from 'smbls'

import { gridGalleries } from './gridGallery'

const props = {
  width: '80%',
  maxWidth: `${1440 / 16}em`,
  padding: 'F1 E1 - E1',
  margin: 'C auto',
  flow: 'column',
  '@maxTabletM': {
    padding: 'F1 D2 - D2',
    width: '90%',
  },
  '@maxTabletS': {
    padding: 'F1 C - C',
  },
  '@maxMobileL': {
    // border: '3px solid green',
    minHeight: '100%',
    padding: '0',
    margin: '0 auto',
    align: 'center center',
    width: '100%'
  }
  // '@maxTabletS': {
  //   padding: 'F 0 - 0',
  //   align: 'center center',
  //   width: '100%'
  // },
  // '@maxMobileM': {
  //   padding: 'E2 0 - 0'
  // }
}

export const gallery = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'gallery' },
  gridGalleries
}
