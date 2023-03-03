'use strict'

import { Flex } from 'smbls'

import { TourGallery } from './TourGallery'

import { TourDescription } from './TourDescription'

const props = {
  align: 'center space-between',
  alignSelf: 'center',
  gap: 'D',
  description: { padding: '- - C2 -' }
}
export const Tour = {
  extend: Flex,
  props,

  gallery: { extend: TourGallery },
  description: { extend: TourDescription }
}
