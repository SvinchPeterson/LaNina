'use strict'

import { Tour } from '../../../../components'

import { mtsketaText } from '../../../../texts'

import { mtsketaGallery } from '../galleries/mtsketaGallery'

export const mtsketaTour = {
  extend: Tour,

  gallery: { extend: mtsketaGallery },

  article: {
    articleContainer: {
      ...[
        {
          captionButton: {},
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
    }

  }
}
