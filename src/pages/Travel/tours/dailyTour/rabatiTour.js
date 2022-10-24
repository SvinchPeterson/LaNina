'use strict'

import { Tour } from '../../../../components'

import { rabatiText } from '../../../../texts'

import { rabatiGallery } from '../galleries/rabatiGallery'

export const rabatiTour = {
  extend: Tour,

  gallery: { extend: rabatiGallery },

  article: {
    articleContainer: {
      ...[
        {
          captionButton: {},
          title: {},
          paragraphs: {
            childExtend: rabatiText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Rabati Castle walking Tour' } }
              ]
            }
          }
        }
      ]
    }

  }
}
