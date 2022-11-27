'use strict'

import { Tour } from '../../../../components'

import { ananuriText, gudauriText, gergetText } from '../../../../texts'

import { $7n8dGallery } from '../galleries/7n8dGallery'

export const $7n8dTour = {
  extend: Tour,
  props: { '@tabletS': { flow: 'column-reverse' } },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-end' } },
    articleContainer: {
      ...[
        {
          title: { text: 'day 1 - Arrival TBS Airport / Transfer' },
          list: null
        },

        {
          title: { text: 'day 2 - Ananuri / Gudauri / Kazbegi' },
          paragraphs: {
            ...[
              { extend: ananuriText },
              { extend: gudauriText },
              { extend: gergetText }
            ]
          },
          list: null
        }
      ]
    },

    button: {
      on: {
        click: (event, element, state) => {
          state.update({ activeArticleContainer: true, active_8d_Article: true })
        }
      }
    }
  },

  gallery: {
    extend: $7n8dGallery,
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
