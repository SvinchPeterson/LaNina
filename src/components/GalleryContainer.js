'use strict'

import { Flex } from 'smbls'

import { Gallery } from './Gallery'

import { Book } from './Book'

import { NavHorizontalArrowsCream } from './NavigationArrows'

const props = {
  position: 'relative',
  flow: 'column',
  margin: 'D1 - - -',
  book: {
    border: 'none',
    padding: '0',
    fontSize: 'B',
    // alignSelf: 'flex-end',
    // margin: '- C V2 -'

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
    gap: 'D',
    alignSelf: 'center',
    margin: 'B2 - - -'
  }
}

const navArrows = {
  extend: NavHorizontalArrowsCream,

  ...[
    {
      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage + 1
          })
          if (activeImage >= 8) {
            state.update({ activeImage: 0 })
          }
        }
      }
    },

    {
      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage - 1
          })
          if (activeImage <= 0) {
            state.update({ activeImage: 8 })
          }
        }
      }
    }
  ]
}

export const GalleryContainer = {
  props,
  extend: Flex,

  book: { extend: Book },
  gallery: { extend: Gallery },
  navArrows
}
