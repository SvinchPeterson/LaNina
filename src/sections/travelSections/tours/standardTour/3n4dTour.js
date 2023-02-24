'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText } from '../../../../texts'

import { $3n4dGallery } from '../galleries/3n4dGallery'

export const $3n4dTour = {
  extend: Tour,
  props: { '@tabletS': { flow: 'column-reverse' } },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-end' } },
    articleContainer: {
      ...[
        {
          title: { text: 'day 1 - Tbilisi City tour' },
          paragraphs: { childExtend: tbilisiTravelText },
          list: null
        }
      ]
    },

    button: {
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, active_4d_Article: true })
        }
      }
    }
  },

  gallery: {
    extend: $3n4dGallery,
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
