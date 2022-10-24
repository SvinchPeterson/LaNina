'use strict'

import { Tour } from '../../../../components'

import { kutaisiText } from '../../../../texts'

import { kutaisiGallery } from '../galleries/kutaisiGallery'

export const kutaisiTour = {
  extend: Tour,

  gallery: { extend: kutaisiGallery },

  article: {
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
