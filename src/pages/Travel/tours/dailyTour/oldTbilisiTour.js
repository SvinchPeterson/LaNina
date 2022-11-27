'use strict'

import { Tour } from '../../../../components'
import { tbilisiTravelText } from '../../../../texts'
import { oldTbilisiGallery } from '../galleries/oldTbilisiGallery'

export const oldTbilisiTour = {
  extend: Tour,

  gallery: {
    extend: oldTbilisiGallery,
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
          paragraphs: { childExtend: tbilisiTravelText },
          list: null
        }
      ]
    },

    button: {
      props: { alignSelf: 'flex-end' },
      on: {
        click: (event, element, state) => {
          state.update({ activeArticleContainer: true, activeTbilisiArticle: true })
        }
      }
    }
  }
}
