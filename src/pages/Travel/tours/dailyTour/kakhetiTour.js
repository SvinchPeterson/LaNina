'use strict'

import { Tour } from '../../../../components'

import { kakhetiText } from '../../../../texts'

import { kakhetiGallery } from '../galleries/kakhetiGallery'

export const kakhetiTour = {
  extend: Tour,

  gallery: {
    extend: kakhetiGallery,
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
          paragraphs: { childExtend: kakhetiText },
          list: null
        }
      ]
    },

    button: {
      props: { alignSelf: 'flex-end' },
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, activeKakhetiArticle: true })
        }
      }
    }

  }
}
