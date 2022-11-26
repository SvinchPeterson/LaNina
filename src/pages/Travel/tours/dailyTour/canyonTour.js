'use strict'

import { Tour } from '../../../../components'

import { canionText } from '../../../../texts'

import { canyonGallery } from '../galleries/canyonGallery'

export const canyonTour = {
  extend: Tour,

  gallery: { extend: canyonGallery },

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.activeCanyonDescripion
          ? state.update({ activeCanyonDescripion: false })
          : state.update({ activeCanyonDescripion: true })
      }
    },

    class: {
      show: (element, state) => state.activeCanyonDescripion
        ? {
          '> img': { transform: 'rotate(180deg)' }
        }
        : {
          '> img': { transform: 'rotate(0deg)' }
        }
    }
  },

  article: {
    class: {
      show: (element, state) => state.activeCanyonDescripion
        ? {
          '@media only screen and (max-width: 1280px)': {
            maxHeight: `${250 / 16}em`,
            overflowY: 'auto',
            paddingTop: `${35 / 16}em`
          }
        }
        : {
          '@media only screen and (max-width: 1280px)': {
            maxHeight: `0`,
            overflowY: 'hidden'
          }
        }
    },

    articleContainer: {
      ...[
        {
          captionButton: {},
          title: {},
          paragraphs: {
            childExtend: canionText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Dashabshi Canyon' } },
                { props: { text: '- Brilliant Glass Bridge' } }
              ]
            }
          }
        }
      ]
    },

    button: { props: { alignSelf: 'flex-end' } }

  }
}
