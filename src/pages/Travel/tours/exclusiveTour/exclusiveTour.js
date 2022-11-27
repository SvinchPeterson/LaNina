'use strict'

import { Tour } from '../../../../components'

import { megalith } from '../../../../texts'

import { exclusiveGallery } from '../galleries/exclusiveGallery'

export const exclusiveTour = {
  extend: Tour,

  props: {
    gallery: {
      images: {
        round: 'G G 0 0',
        ':after': { round: 'G G 0 0' },
        childProps: { round: 'G G 0 0' }
      },
      footer: { width: '100%' }
    }
  },

  gallery: { extend: exclusiveGallery },

  article: {
    articleContainer: {
      ...[
        {
          title: null,
          paragraphs: { childExtend: megalith }

        }
      ]
    },

    button: {
      props: { alignSelf: 'flex-start' },
      on: {
        click: (event, element, state) => {
          state.update({ activeArticleContainer: true, activeExclusiveArticle: true })
        }
      }

    }
  }
}
