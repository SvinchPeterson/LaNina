'use strict'

import { Tour } from '../../../../components'

import { kutaisiText } from '../../../../texts'

import { kutaisiGallery } from '../galleries/kutaisiGallery'

export const kutaisiTour = {
  extend: Tour,

  gallery: { extend: kutaisiGallery },

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.activeKutaisiDescripion
          ? state.update({ activeKutaisiDescripion: false })
          : state.update({ activeKutaisiDescripion: true })
      }
    },

    class: {
      show: (element, state) => state.activeKutaisiDescripion
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
      show: (element, state) => state.activeKutaisiDescripion
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
            childExtend: kutaisiText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Prometheus Cave' } },
                { props: { text: '- Martvili Canyon' } }
              ]
            }
          }
        }
      ]
    }

  }
}
