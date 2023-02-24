'use strict'

import { Tour } from '../../../../components'

import { adventure } from '../../../../texts'

import { adventureGallery } from '../galleries/adventureGallery'

export const adventureTour = {
  extend: Tour,

  props: {
    gallery: {
      images: {
        round: 'G G 0 0',
        ':after': { round: 'G G 0 0' },
        childProps: { round: 'G G 0 0' }
      },
      footer: { width: '100%' }
    }
  },

  gallery: { extend: adventureGallery },

  article: {
    articleContainer: {
      ...[
        {
          title: null,
          paragraphs: { childExtend: adventure }

        }
      ]
    },

    button: {
      props: { alignSelf: 'flex-start' },
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, activeAdventureArticle: true })
        }
      }

    }
  }
}
