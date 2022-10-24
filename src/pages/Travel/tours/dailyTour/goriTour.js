'use strict'

import { Tour } from '../../../../components'

import { goriText } from '../../../../texts'

import { goriGallery } from '../galleries/goriGallery'

export const goriTour = {
  extend: Tour,

  gallery: { extend: goriGallery },

  article: {
    articleContainer: {
      ...[
        {
          captionButton: {},
          title: {},
          paragraphs: {
            childExtend: goriText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Stalin Museum' } },
                { props: { text: '- Uplistsikhe Cave City' } }
              ]
            }
          }
        }
      ]
    }

  }
}
