'use strict'

import { Tour } from '../../../../components'

import { borjomiText } from '../../../../texts'

import { borjomiGallery } from '../galleries/borjomiGallery'

export const borjomiTour = {
  extend: Tour,

  gallery: { extend: borjomiGallery },

  article: {
    articleContainer: {
      ...[
        {
          captionButton: {},
          title: {},
          paragraphs: {
            childExtend: borjomiText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Borjomi Central Park' } },
                { props: { text: '- Mineral Water tasting' } },
                { props: { text: '- Cable Car' } }
              ]
            }
          }
        }
      ]
    }

  }
}
