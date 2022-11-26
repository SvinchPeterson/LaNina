'use strict'

import { Tour } from '../../../../components'

import { megalith,
  tbilisiTravelText, ananuriText, gudauriText, gergetText, kakhetiText, yerevanText,
  khorViperText, noravankText, savaneText, savaneMonastryText, dilijanText
} from '../../../../texts'

import { geoArmGallery } from '../galleries/geoArmGallery'

export const exclusiveTour = {
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
          paragraphs: { childExtend: megalith }

        }
      ]
    },

    button: {
      props: { alignSelf: 'flex-start' },
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true, activeExclusiveDescription: true })
        }
      }

    }
  }
}
