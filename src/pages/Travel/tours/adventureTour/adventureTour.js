'use strict'

import { Tour } from '../../../../components'

import { adventure } from '../../../../texts'

import { geoArmGallery } from '../galleries/geoArmGallery'

export const adventureTour = {
  extend: Tour,

  props: {
    gallery: {
      images: { round: 'G G 0 0' },
      footer: { width: '100%' }
    }
  },

  gallery: { extend: geoArmGallery },

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
          state.update({ activeFullDescription: true, activeAdventureDescription: true })
        }
      }

    }
  }
}
