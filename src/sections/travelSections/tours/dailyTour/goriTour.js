'use strict'

import { Tour } from '../../../../components'

import { goriText } from '../../../../texts'

import { goriGallery } from '../galleries/goriGallery'

export const goriTour = {
  extend: Tour,

  gallery: {
    extend: goriGallery,
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
          paragraphs: { childExtend: goriText },
          list: null
        }
      ]
    },

    button: {
      props: { alignSelf: 'flex-end' },
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, activeGoriArticle: true })
        }
      }
    }
  }
}
