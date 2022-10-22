'use strict'

import { Tour } from '../../../../components'

import { canionText } from '../../../../texts'

import { canyonGallery } from '../galleries/canyonGallery'

export const canyonTour = {
  extend: Tour,

  gallery: { extend: canyonGallery },

  article: {
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
    }

  }
}
