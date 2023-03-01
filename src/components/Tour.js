'use strict'

import { Flex } from 'smbls'

import { TourGallery } from './TourGallery'

import { TourDescription } from './TourDescription'

const props = {
  align: 'flex-start center',
  gap: 'D',
  alignSelf: 'center'

}
export const Tour = {
  extend: Flex,
  props,

  gallery: { extend: TourGallery },
  description: { extend: TourDescription }
}
