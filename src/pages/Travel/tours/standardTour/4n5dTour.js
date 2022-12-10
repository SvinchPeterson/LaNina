'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText } from '../../../../texts'

import { $4n5dGallery } from '../galleries/4n5dGallery'

export const $4n5dTour = {
  extend: Tour,

  gallery: {
    extend: $4n5dGallery,
    props: {
      images: {
        round: '0 F F 0',
        ':after': { round: '0 F F 0' },
        childProps: { round: '0 F F 0' }
      }
    }
  },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-start' } },

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
      props: { alignSelf: 'flex-end' },
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, active_5d_Article: true })
        }
      }
    }
  }
}
