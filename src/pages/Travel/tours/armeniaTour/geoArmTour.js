'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText, ananuriText, gudauriText, gergetText, kakhetiText, yerevanText,
  khorViperText, noravankText, savaneText, savaneMonastryText, dilijanText
} from '../../../../texts'

import { geoArmGallery } from '../galleries/geoArmGallery'

export const geoArmTour = {
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
          state.update({ activeFullDescription: true, active_Armenia_Description: true })
        }
      }

    }
  }
}
