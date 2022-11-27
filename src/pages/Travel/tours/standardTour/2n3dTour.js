'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText } from '../../../../texts'

import { $2n3dGallery } from '../galleries/2n3dGallery'

export const $2n3dTour = {
  extend: Tour,

  gallery: {
    extend: $2n3dGallery,
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
          state.update({ activeArticleContainer: true, active_3d_Article: true })
        }
      }
    }
  }
}
