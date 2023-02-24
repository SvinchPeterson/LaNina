'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText
} from '../../../../texts'

import { geoArmGallery } from '../galleries/geoArmGallery'

export const geoArmTour = {
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

  gallery: { extend: geoArmGallery },

  article: {
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
      props: { alignSelf: 'flex-start' },
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, active_Armenia_Article: true })
        }
      }

    }
  }
}
