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
          paragraphs: { childExtend: mtsketaText },
          list: null
        }
      ]
    },

    button: {
      on: {
        click: (event, element, state) => {
          state.update({ activeArticleContainer: true, activeMtsketaArticle: true })
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
        round: 'F 0 0 F',
        ':after': { round: 'F 0 0 F' },
        childProps: { round: 'F 0 0 F' }
      }

    }
  }
}
