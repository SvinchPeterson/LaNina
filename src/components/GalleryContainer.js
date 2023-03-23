'use strict'

import { Flex } from 'smbls'

import { Gallery } from './Gallery'

import { Book } from './Book'

import { NavArrows } from './NavigationArrows'

const props = {
  position: 'relative',
  flow: 'column',
  boxSize: 'fit-content fit-content',
  book: {
    border: 'none',
    padding: '0',
    fontSize: 'B',
    position: 'absolute',
    top: '35%',
    right: '-B',
    transoform: 'translate(-50%, -50%)',
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'upright'
    }
  },

  navArrows: {
    alignSelf: 'center',
    margin: 'A1 - - -'
  }
}

export const GalleryContainer = {
  props,
  extend: Flex,

  book: { extend: Book },
  gallery: { extend: Gallery },
  navArrows: { extend: NavArrows }
}
