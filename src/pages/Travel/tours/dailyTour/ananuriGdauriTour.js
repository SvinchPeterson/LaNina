'use strict'

import { Tour } from '../../../../components'

import { ananuriText, gudauriText, gergetText } from '../../../../texts'

import { ananuriGudauriGallery } from '../galleries/ananuriGudauriGallery'

export const ananuriGudauriTour = {
  extend: Tour,

  gallery: { extend: ananuriGudauriGallery },

  article: {
    articleContainer: {
      ...[
        {
          captionButton: {},
          title: {},
          paragraphs: {
            ...[
              { extend: ananuriText },
              { extend: gudauriText },
              { extend: gergetText }
            ]
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Zhinvali Water Reservoir' } },
                { props: { text: '- Ananuri Fortress' } },
                { props: { text: '- London bridge' } },
                { props: { text: '- Gudauri Panorama' } },
                { props: { text: '- I Love Tbilisi Statue' } },
                { props: { text: '- Spring Water Mountain' } },
                { props: { text: '- Kazbegi city ( Gergeti church extra charge)' } }
              ]
            }
          }
        }
      ]
    }

  }
}
