'use strict'

import { Tour } from '../../../../components'

import { kakhetiText } from '../../../../texts'

import { kakhetiGallery } from '../galleries/kakhetiGallery'

export const kakhetiTour = {
  extend: Tour,

  gallery: { extend: kakhetiGallery },

  article: {
    articleContainer: {
      ...[
        {
          captionButton: {},
          title: {},
          paragraphs: {
            childExtend: kakhetiText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Wine Tasting in Traditional Winery' } },
                { props: { text: '- Bodbe Monastery' } },
                { props: { text: '- ST. Nino Waterfall' } },
                { props: { text: '- Signagi City' } }
              ]
            }
          }
        }
      ]
    }

  }
}
