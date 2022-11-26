'use strict'

import { Tour } from '../../../../components'

import { kutaisiText } from '../../../../texts'

import { kutaisiGallery } from '../galleries/kutaisiGallery'

export const kutaisiTour = {
  extend: Tour,
  props: { '@tabletS': { flow: 'column-reverse' } },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-end' } },
    articleContainer: {
      ...[
        {
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
    },
    button: {
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true, activeKutaisiDescripion: true })
        }
      }
    }
  },

  gallery: {
    extend: kutaisiGallery,
    props: {
      align: 'flex-end',
      title: { padding: '- Z - -' },
      images: {
        round: 'F 0 0 F'
      }
    }
  }
}
