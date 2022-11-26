'use strict'

import { Tour } from '../../../../components'

import { mtsketaText } from '../../../../texts'

import { mtsketaGallery } from '../galleries/mtsketaGallery'

export const mtsketaTour = {
  extend: Tour,
  props: { '@tabletS': { flow: 'column-reverse' } },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-end' } },
    articleContainer: {
      ...[
        {
          title: {},
          paragraphs: {
            childExtend: mtsketaText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Svetitskhoveli Cathedral 11th' } },
                { props: { text: '- Jvari Monastery - 6th' } }
              ]
            }
          }
        }
      ]
    },

    button: {
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true, activeMtsketaDescription: true })
        }
      }
    }
  },

  gallery: {
    extend: mtsketaGallery,
    props: {
      align: 'flex-end',
      title: { padding: '- Z - -' },
      images: {
        round: 'F 0 0 F'
      }
    }
  }
}
