'use strict'

import { Flex, Link } from 'smbls'

import { TourGallery } from './TourGallery'
import { TourPackage } from './TourPackage'

import { TravelParagraph } from './TravelParagraph'

const props = {
  align: 'flex-start center',
  alignSelf: 'center',
  gap: 'C',

  gallery: {
    // border: '3px solid yellow'
  },
  article: {
    flow: 'column',
    padding: 'D2 - - -',
    description: {
      maxWidth: 'H',
      fontSize: `${15.5 / 16}em`,
      letterSpacing: '.1px',
      color: 'cream2 .65',
      style: { span: { color: 'rgba(248, 241, 227, 1)' } }
    },
    package: { border: '2px solid yellow' }
    // border: '3px solid red'
  }
}
export const Tour = {
  extend: Flex,
  props,

  gallery: { extend: TourGallery },

  article: {
    extend: Flex,
    description: {
      extend: TravelParagraph
    },
    package: {
      extend: TourPackage
    },
    moreButton: {
      extend: Link,
      text: 'more'
    }
  }
}
