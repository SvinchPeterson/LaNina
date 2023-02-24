'use strict'

import { Tour } from '../../../../components'

import { canionText } from '../../../../texts'

import { canyonGallery } from '../galleries/canyonGallery'

export const canyonTour = {
  extend: Tour,

  gallery: {
    extend: canyonGallery,
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
          title: {},
          paragraphs: { childExtend: canionText },
          list: null
        }
      ]
    },

    button: {
      props: { alignSelf: 'flex-end' },
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, activeCanyonArticle: true })
        }
      }
    }

  }
}
