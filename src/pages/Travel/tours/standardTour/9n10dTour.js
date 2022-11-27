'use strict'

import { Tour } from '../../../../components'

import {
  tbilisiTravelText
} from '../../../../texts'

import { $9n10dGallery } from '../galleries/9n10dGallery'

export const $9n10dTour = {
  extend: Tour,

  gallery: {
    extend: $9n10dGallery,
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
          title: { text: 'day 1 - Arrival TBS Airport - Tbilisi City Tour' },
          paragraphs: { ...[{ extend: tbilisiTravelText }] },
          list: null
        }
      ]
    },

    button: {
      props: { alignSelf: 'flex-end' },
      on: {
        click: (event, element, state) => {
          state.update({ activeArticleContainer: true, active_10d_Article: true })
        }
      }

    }
  }
}
